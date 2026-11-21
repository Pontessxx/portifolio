// src/components/atoms/Reveal/Reveal.tsx
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import './Reveal.scss'

const SHOW_AT = 0.15 // fração do elemento que precisa aparecer para animar

type RevealProps = {
  children: ReactNode
  delay?: number // ms, para escalonar elementos que aparecem juntos
  className?: string
}

// Faz o conteúdo subir e aparecer quando entra na tela. Ao sair totalmente da tela ele
// volta ao estado escondido, então a animação roda de novo ao voltar (subindo ou descendo).
export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= SHOW_AT) setVisible(true)
        else if (!entry.isIntersecting) setVisible(false) // saiu por completo: reinicia
      },
      { threshold: [0, SHOW_AT], rootMargin: '0px 0px -12% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const style = delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined

  return (
    <div ref={ref} style={style} className={`reveal${visible ? ' reveal--visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  )
}
