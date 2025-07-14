import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { cn } from '../../utils/cn'

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { scrollY } = useScroll()
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const unsubscribe = scrollY.on('change', (latest) => {
			setIsScrolled(latest > 50)
		})
		return () => unsubscribe()
	}, [scrollY])

	const navItems = [
		{ name: 'Features', href: '#features' },
		{ name: 'Demo', href: '#demo' },
		{ name: 'Pricing', href: '#pricing' },
		{ name: 'FAQ', href: '#faq' },
	]

	return (
		<motion.nav
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				isScrolled 
					? "bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50" 
					: "bg-transparent"
			)}
			animate={{
				height: isScrolled ? "4rem" : "5rem",
			}}
			transition={{ duration: 0.3 }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
				<div className="flex items-center justify-between h-full">
					<div className="flex-shrink-0">
						<motion.a
							href="#"
							className={cn(
								"font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-start to-primary-end transition-all duration-300",
								isScrolled ? "text-xl" : "text-2xl"
							)}
							animate={{
								scale: isScrolled ? 0.9 : 1,
							}}
						>
							NexFlow
						</motion.a>
					</div>

					{/* Desktop menu */}
					<div className="hidden md:block h-full">
						<div className="ml-10 flex items-center space-x-1 h-full">
							{navItems.map((item) => (
								<motion.a
									key={item.name}
									href={item.href}
									className={cn(
										"relative px-3 py-2 rounded-md text-sm font-medium transition-colors",
										"text-gray-300 hover:text-white"
									)}
									whileHover={{ scale: 1.05 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
								>
									{item.name}
									<motion.div
										className="absolute inset-0 rounded-md bg-white/10"
										style={{ scaleX: 0 }}
										whileHover={{ scaleX: 1 }}
										transition={{ type: "spring", stiffness: 400, damping: 17 }}
									/>
								</motion.a>
							))}
							<motion.button
								className={cn(
									"relative overflow-hidden rounded-lg bg-gradient-to-r from-primary-start to-primary-end",
									"text-white font-medium transition-all",
									"hover:shadow-lg hover:shadow-primary-start/25",
									"focus:outline-none focus:ring-2 focus:ring-primary-start focus:ring-offset-2 focus:ring-offset-gray-900",
									isScrolled ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-base"
								)}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="relative z-10">Start Free Trial</span>
								<motion.div
									className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
									initial={{ x: '-100%' }}
									whileHover={{ x: '100%' }}
									transition={{ duration: 0.6, ease: 'easeInOut' }}
								/>
							</motion.button>
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<motion.button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-400 hover:text-white p-2"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</motion.button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
					>
						<div className="px-4 py-4 space-y-1">
							{navItems.map((item) => (
								<motion.a
									key={item.name}
									href={item.href}
									className="text-gray-300 hover:text-white block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-white/5 transition-colors"
									onClick={() => setIsOpen(false)}
									whileHover={{ x: 10 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
								>
									{item.name}
								</motion.a>
							))}
							<motion.button
								className="btn-primary w-full mt-4 py-2.5 rounded-lg"
								onClick={() => setIsOpen(false)}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Start Free Trial
							</motion.button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	)
}