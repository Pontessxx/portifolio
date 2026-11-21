import './SectionLabel.scss'

type SectionLabelProps = {
  label: string
}

export function SectionLabel({ label }: SectionLabelProps) {
  return <p className="section-label">{`// ${label}`}</p>
}