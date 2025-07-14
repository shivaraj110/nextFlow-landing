import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { SparklesCore } from '../components/ui/aceternity/SparklesEffect'
import { useRef } from 'react'

export const HeroSection = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollY } = useScroll();
	const parallaxY = useTransform(scrollY, [0, 500], [0, -150]);

	return (
		<section ref={containerRef} className="relative min-h-screen pt-20 overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0">
				{/* Sparkles Layer */}
				<SparklesCore
					background="transparent"
					minSize={0.4}
					maxSize={1}
					particleDensity={70}
					className="absolute inset-0"
					particleColor="rgba(255,255,255,0.3)"
				/>

				{/* Gradient Orbs */}
				<div className="absolute inset-0 overflow-hidden">
					{/* Primary gradient orb */}
					<motion.div
						className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-start/30 rounded-full blur-3xl"
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.3, 0.2, 0.3],
							x: [-10, 10, -10],
							y: [-10, 10, -10],
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>

					{/* Secondary gradient orb */}
					<motion.div
						className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-end/20 rounded-full blur-3xl"
						animate={{
							scale: [1, 1.1, 1],
							opacity: [0.2, 0.3, 0.2],
							x: [10, -10, 10],
							y: [10, -10, 10],
						}}
						transition={{
							duration: 10,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 1,
						}}
					/>
				</div>

				{/* Noise texture */}
				<div
					className="absolute inset-0 opacity-[0.015]"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
					}}
				/>
			</div>

			{/* Main Content */}
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					style={{ y: parallaxY }}
					className="relative"
				>
					{/* Hero Content */}
					<div className="text-center space-y-8 relative z-10">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.8 }}
							className="relative"
						>
							<motion.span
								className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-white tracking-tight"
								animate={{
									textShadow: [
										"0 0 20px rgba(52,144,220,0)",
										"0 0 50px rgba(52,144,220,0.3)",
										"0 0 20px rgba(52,144,220,0)",
									]
								}}
								transition={{ duration: 3, repeat: Infinity }}
							>
								Automate Your Workflow with
							</motion.span>

							{/* Logo Text */}
							<div className="relative inline-block mt-2">
								<div className="absolute -inset-4 bg-gradient-to-r from-primary-start to-primary-end opacity-75 blur-2xl" />
								<div className="relative">
									<motion.div
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.5, duration: 0.8 }}
									>
										<motion.span
											className="relative inline-block font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-start via-white to-primary-end"
											animate={{
												backgroundPosition: ['0%', '100%', '0%'],
											}}
											transition={{
												duration: 8,
												repeat: Infinity,
												ease: 'linear',
											}}
											style={{
												backgroundSize: '200% auto',
											}}
										>
											Flowro
										</motion.span>
									</motion.div>
								</div>
							</div>
						</motion.div>

						{/* Description */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.8 }}
							className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium"
						>
							Connect your tools, automate your tasks, and boost team productivity with
							our intelligent workflow automation platform.
						</motion.p>

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.8 }}
							className="flex flex-col sm:flex-row items-center justify-center gap-4"
						>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="w-full sm:w-auto"
							>
								<Button
									size="lg"
									className="w-full sm:w-auto shadow-lg shadow-primary-start/25 text-sm sm:text-base px-8 sm:px-10 py-4 relative group"
								>
									<span className="relative z-10">Start Free Trial</span>
									<motion.div
										className="absolute inset-0 bg-gradient-to-r from-primary-start to-primary-end rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
										initial={false}
										animate={{ scale: [0.8, 1], opacity: [0, 1] }}
										transition={{ duration: 0.3 }}
									/>
									<ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
								</Button>
							</motion.div>

							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="w-full sm:w-auto"
							>
								<Button
									variant="secondary"
									size="lg"
									className="w-full sm:w-auto shadow-lg shadow-gray-900/50 text-sm sm:text-base px-8 sm:px-10 py-4 group"
								>
									<Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:text-primary-start transition-colors" />
									<span className="group-hover:text-primary-start transition-colors">Watch Demo</span>
								</Button>
							</motion.div>
						</motion.div>

						{/* Stats */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8, duration: 0.8 }}
							className="pt-8 sm:pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"
						>
							{[
								{ value: '10M+', label: 'Tasks Automated' },
								{ value: '99.9%', label: 'Uptime' },
								{ value: '150+', label: 'Integrations' },
								{ value: '5000+', label: 'Happy Teams' },
							].map((stat, i) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
									className="relative group"
								>
									<div className="absolute inset-0 bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
									<div className="relative p-4 text-center">
										<div className="text-2xl sm:text-3xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-primary-start to-primary-end mb-1">
											{stat.value}
										</div>
										<div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
