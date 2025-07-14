import { HTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hover = true, className = '', children, ...props }, ref) => {
    const Component = hover ? motion.div : 'div'
    
    return (
      <Component
        ref={ref}
        className={`card ${className}`}
        whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
        transition={{ type: 'spring', stiffness: 300 }}
        {...props}
      >
        {children}
      </Component>
    )
  }
)