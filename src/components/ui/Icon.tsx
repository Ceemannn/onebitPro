import * as LucideIcons from 'lucide-react'
import { LucideProps } from 'lucide-react'

interface IconProps extends LucideProps {
  name: string
}

export function Icon({ name, ...props }: IconProps) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>
  const LucideIcon = icons[name]
  
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react`)
    return null
  }
  
  return <LucideIcon {...props} />
}
