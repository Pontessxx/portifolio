// src/components/molecules/ProfileCard/ProfileCard.tsx
// Adaptado do react-bits ProfileCard: tema vem do data-theme do site (via SCSS),
// ícone vem do BrandIcon (lucide) e as classes seguem BEM com prefixo "profile-card".
import { memo, useEffect, useRef, type CSSProperties } from 'react'
import { BrandIcon } from '../../atoms/BrandIcon/BrandIcon'
import './ProfileCard.scss'

type ProfileCardProps = {
  avatarUrl?: string
  iconUrl?: string // padrão usado como máscara do holográfico
  name?: string
  title?: string
  handle?: string
  status?: string
  statusColor?: string
  contactText?: string
  showUserInfo?: boolean
  onContactClick?: () => void
  radius?: number
  holo?: number
  glare?: number
  enableTilt?: boolean
  tiltStrength?: number
  parallax?: number
  intro?: boolean
  className?: string
}

type Engine = { write: () => void }

const GRAIN = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='500' height='500'><filter id='g' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0 0 0 0 1'/></filter><rect width='100%' height='100%' filter='url(#g)'/></svg>",
)}")`

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

function ProfileCardBase({
  avatarUrl = '',
  iconUrl,
  name,
  title,
  handle,
  status,
  statusColor = '#22c55e',
  contactText,
  showUserInfo = true,
  onContactClick,
  radius = 16,
  holo = 0.8,
  glare = 0.5,
  enableTilt = true,
  tiltStrength = 12,
  parallax = 8,
  intro = true,
  className = '',
}: ProfileCardProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<Engine | null>(null)
  const settingsRef = useRef({ enableTilt, tiltStrength, parallax, intro })
  settingsRef.current = { enableTilt, tiltStrength, parallax, intro }

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const size = { width: root.offsetWidth, height: root.offsetHeight }
    const x = { p: 0, v: 0, target: 0 }
    const y = { p: 0, v: 0, target: 0 }
    const light = { p: 0, target: 0 }
    let raf = 0
    let last = 0
    let slowUntil = 0
    let touchId: number | null = null

    const write = () => {
      const { enableTilt: tiltOn, tiltStrength: strength, parallax: depth } = settingsRef.current
      const angle = tiltOn && !reduced ? strength : 0
      const tilt = Math.min(1, Math.hypot(x.p, y.p))
      const s = root.style
      s.setProperty('--pc-light-x', `${((x.p + 1) * 0.5 * size.width).toFixed(1)}px`)
      s.setProperty('--pc-light-y', `${((y.p + 1) * 0.5 * size.height).toFixed(1)}px`)
      s.setProperty('--pc-pointer-x', `${((x.p + 1) * 50).toFixed(2)}%`)
      s.setProperty('--pc-pointer-y', `${((y.p + 1) * 50).toFixed(2)}%`)
      s.setProperty('--pc-band-x', `${(50 + x.p * 15).toFixed(2)}%`)
      s.setProperty('--pc-band-y', `${(50 + y.p * 15).toFixed(2)}%`)
      s.setProperty('--pc-rotate-x', `${(y.p * angle).toFixed(3)}deg`)
      s.setProperty('--pc-rotate-y', `${(-x.p * angle).toFixed(3)}deg`)
      s.setProperty('--pc-shift-x', `${(x.p * (reduced ? 0 : depth)).toFixed(2)}px`)
      s.setProperty('--pc-shift-y', `${(y.p * (reduced ? 0 : depth)).toFixed(2)}px`)
      s.setProperty('--pc-reach', tilt.toFixed(4))
      s.setProperty('--pc-tilt', (tilt * light.p).toFixed(4))
      s.setProperty('--pc-active', light.p.toFixed(4))
    }

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0)
      last = now
      const slow = now < slowUntil
      const stiffness = slow ? 24 : 120
      const damping = slow ? 9 : 16
      const steps = Math.max(1, Math.ceil(dt / (1 / 120)))
      const h = dt / steps
      for (let i = 0; i < steps; i++) {
        for (const axis of [x, y]) {
          axis.v += (stiffness * (axis.target - axis.p) - damping * axis.v) * h
          axis.p += axis.v * h
        }
      }
      const tau = light.target > light.p ? 0.18 : slow ? 0.9 : 0.45
      light.p += (light.target - light.p) * (1 - Math.exp(-dt / tau))
      write()
      const moving =
        Math.abs(x.target - x.p) > 0.0005 ||
        Math.abs(y.target - y.p) > 0.0005 ||
        Math.abs(x.v) > 0.0005 ||
        Math.abs(y.v) > 0.0005 ||
        Math.abs(light.target - light.p) > 0.002
      if (moving) {
        raf = requestAnimationFrame(frame)
      } else {
        x.p = x.target
        y.p = y.target
        light.p = light.target
        write()
        raf = 0
      }
    }

    const wake = () => {
      if (raf) return
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }

    const aim = (nx: number, ny: number, on = true) => {
      x.target = clamp(nx, -1, 1)
      y.target = clamp(ny, -1, 1)
      light.target = on ? 1 : 0
      slowUntil = 0
      wake()
    }

    const aimAt = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      aim(((e.clientX - rect.left) / rect.width) * 2 - 1, ((e.clientY - rect.top) / rect.height) * 2 - 1)
    }
    const release = () => aim(0, 0, false)

    const onEnter = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') aimAt(e)
    }
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' || e.pointerId === touchId) aimAt(e)
    }
    const onLeave = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') release()
    }
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') return
      touchId = e.pointerId
      aimAt(e)
    }
    const onUp = (e: PointerEvent) => {
      if (e.pointerId !== touchId) return
      touchId = null
      release()
    }

    root.addEventListener('pointerenter', onEnter)
    root.addEventListener('pointermove', onMove)
    root.addEventListener('pointerleave', onLeave)
    root.addEventListener('pointerdown', onDown)
    root.addEventListener('pointerup', onUp)
    root.addEventListener('pointercancel', onUp)

    const observer = new ResizeObserver(() => {
      size.width = root.offsetWidth
      size.height = root.offsetHeight
      write()
    })
    observer.observe(root)

    engineRef.current = { write }

    if (settingsRef.current.intro && !reduced) {
      x.p = 0.62
      y.p = -0.55
      light.p = 1
      slowUntil = performance.now() + 1400
      write()
      wake()
    } else {
      write()
    }

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      root.removeEventListener('pointerenter', onEnter)
      root.removeEventListener('pointermove', onMove)
      root.removeEventListener('pointerleave', onLeave)
      root.removeEventListener('pointerdown', onDown)
      root.removeEventListener('pointerup', onUp)
      root.removeEventListener('pointercancel', onUp)
      engineRef.current = null
    }
  }, [])

  useEffect(() => {
    engineRef.current?.write()
  }, [enableTilt, tiltStrength, parallax])

  return (
    <div
      ref={rootRef}
      className={`profile-card ${className}`.trim()}
      style={
        {
          '--pc-radius': `${Math.max(0, radius)}px`,
          '--pc-holo': clamp(holo, 0, 1),
          '--pc-glare': clamp(glare, 0, 1),
          '--pc-parallax': `${Math.max(0, parallax)}px`,
          '--pc-status': statusColor,
          '--pc-grain': GRAIN,
          '--pc-pattern': iconUrl ? `url("${iconUrl}")` : 'linear-gradient(#000, #000)',
          '--pc-pattern-size': iconUrl ? '180% auto' : '100% 100%',
          '--pc-holo-gain': iconUrl ? 1.25 : 0.75,
          '--pc-holo-detail': iconUrl ? 1 : 0,
        } as CSSProperties
      }
    >
      <div className="profile-card__body">
        <div className="profile-card__tile">
          <span className="profile-card__sheen" />
          <span className="profile-card__holo">
            <span className="profile-card__holo-glow" />
            <span className="profile-card__holo-shift" />
          </span>
          {avatarUrl && (
            <img className="profile-card__photo" src={avatarUrl} alt={name || ''} loading="lazy" draggable={false} />
          )}
          {(name || title) && (
            <>
              <span className="profile-card__scrim" />
              <div className="profile-card__info">
                {name && <h3 className="profile-card__name">{name}</h3>}
                {title && <p className="profile-card__title">{title}</p>}
              </div>
            </>
          )}
          <span className="profile-card__tile-rim" />
        </div>

        {showUserInfo && (handle || status || contactText) && (
          <div className="profile-card__footer">
            <div className="profile-card__meta">
              {handle && <span className="profile-card__handle">@{handle}</span>}
              {status && <span className="profile-card__status">{status}</span>}
            </div>
            {contactText && (
              <button
                type="button"
                className="profile-card__contact"
                onClick={onContactClick}
                aria-label={name ? `${contactText} ${name}` : contactText}
              >
                <BrandIcon name="mail" size={16} />
                {contactText}
              </button>
            )}
          </div>
        )}

        <span className="profile-card__glare" />
        <span className="profile-card__shade" />
        <span className="profile-card__rim" />
      </div>
    </div>
  )
}

export const ProfileCard = memo(ProfileCardBase)
