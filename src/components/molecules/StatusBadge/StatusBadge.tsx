import './StatusBadge.scss'

type StatusBadgeProps = {
  label: string
}

export function StatusBadge({ label }: StatusBadgeProps) {
  return (
    <p className="status-badge">
      <span className="status-badge__dot" aria-hidden="true" />
      {label}
    </p>
  )
}