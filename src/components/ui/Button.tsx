import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  isLoading?: boolean
  fullWidth?: boolean
  children: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-tertiary text-white 
    hover:bg-gradient-to-r hover:from-tertiary hover:via-tertiary-300 hover:to-tertiary
    focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2
    shadow-md hover:shadow-lg
  `,
  secondary: `
    bg-primary text-white 
    hover:bg-primary-600
    focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
  `,
  tertiary: `
    bg-secondary text-primary-900 
    hover:bg-secondary-600
    focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2
  `,
  ghost: `
    bg-transparent text-primary dark:text-secondary
    hover:bg-primary/10 dark:hover:bg-secondary/10
    focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
  `,
  outline: `
    border-2 border-primary text-primary dark:border-secondary dark:text-secondary
    hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-primary-900
    focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
  `,
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      external,
      leftIcon,
      rightIcon,
      isLoading,
      fullWidth,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-semibold rounded-lg
      transition-all duration-300 ease-out
      disabled:opacity-50 disabled:cursor-not-allowed
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {leftIcon && !isLoading && <span className="flex-shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </>
    )

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseStyles}
          >
            {content}
          </a>
        )
      }
      return (
        <Link to={href} className={baseStyles}>
          {content}
        </Link>
      )
    }

    return (
      <button
        ref={ref}
        className={baseStyles}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
