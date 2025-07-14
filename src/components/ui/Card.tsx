import { type HTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	hover?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
	({ hover = true, className = '', children, ...props }, ref) => {
		if (hover) {
			return (
				//@ts-ignore
				<motion.div
					ref={ref}
					className={`card ${className}`}
					whileHover={{ y: -5, scale: 1.02 }}
					transition={{ type: 'spring', stiffness: 300 }}
					{...props}
				>
					{children}
				</motion.div>
			)
		}

		return (
			<div
				ref={ref}
				className={`card ${className}`}
				{...props}
			>
				{children}
			</div>
		)
	}
)
