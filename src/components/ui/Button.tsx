import { forwardRef } from 'react'
import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3',
      lg: 'px-10 py-4 text-lg',
    }

    return (
      <motion.button
        ref={ref}
        className={`${baseClasses} ${sizeClasses[size]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)