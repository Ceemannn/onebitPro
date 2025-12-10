import { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: string | ReactNode
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  titleClassName?: string
  size?: 'sm' | 'md' | 'lg'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  titleClassName = '',
  size = 'md',
}: SectionHeadingProps) {
  const alignmentStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  const sizeStyles = {
    sm: {
      title: 'text-2xl md:text-3xl',
      description: 'text-base',
      maxWidth: 'max-w-xl',
    },
    md: {
      title: 'text-3xl md:text-4xl lg:text-5xl',
      description: 'text-lg',
      maxWidth: 'max-w-2xl',
    },
    lg: {
      title: 'text-4xl md:text-5xl lg:text-6xl',
      description: 'text-xl',
      maxWidth: 'max-w-3xl',
    },
  }

  return (
    <div className={`${alignmentStyles[align]} ${sizeStyles[size].maxWidth} ${className}`}>
      {eyebrow && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary/10 dark:bg-primary/20 rounded-full">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-bold text-gray-900 dark:text-white leading-tight ${sizeStyles[size].title} ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-gray-600 dark:text-gray-300 ${sizeStyles[size].description}`}>
          {description}
        </p>
      )}
    </div>
  )
}
