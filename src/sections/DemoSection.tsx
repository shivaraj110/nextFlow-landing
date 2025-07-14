import { motion } from 'framer-motion'
import { Check, Mail, Database, GitMerge, Workflow } from 'lucide-react'

export const DemoSection = () => {
	const benefits = [
		'Reduce manual work by 80%',
		'Eliminate human errors',
		'Improve team collaboration',
		'Real-time status updates',
	]

	const steps = [
		{
			name: 'Trigger',
			icon: Mail,
			color: 'from-[#4F46E5] via-[#3B82F6] to-[#2563EB]',
			shadowColor: '#4F46E5',
			description: 'Start with email or webhook',
			bgPattern: 'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)',
		},
		{
			name: 'Process',
			icon: Workflow,
			color: 'from-[#9333EA] via-[#A855F7] to-[#7C3AED]',
			shadowColor: '#9333EA',
			description: 'Define your workflow',
			bgPattern: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
		},
		{
			name: 'Transform',
			icon: GitMerge,
			color: 'from-[#EC4899] via-[#F472B6] to-[#DB2777]',
			shadowColor: '#EC4899',
			description: 'Modify your data',
			bgPattern: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
		},
		{
			name: 'Store',
			icon: Database,
			color: 'from-[#10B981] via-[#34D399] to-[#059669]',
			shadowColor: '#10B981',
			description: 'Save to database',
			bgPattern: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
		},
	]

	return (
		<section id="demo" className="py-12 sm:py-20 relative overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80 backdrop-blur-sm" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="relative"
					>
						{/* Gradient background for content */}
						<div className="absolute -inset-4 bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-2xl blur-xl" />

						<div className="relative">
							<h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">
								Transform Your Workflow with{' '}
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-start to-primary-end">
									Intelligent Automation
								</span>
							</h2>
							<p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
								Flowro helps you automate repetitive tasks, connect your favorite tools,
								and streamline your workflow in minutes, not hours.
							</p>

							<div className="space-y-3 sm:space-y-4">
								{benefits.map((benefit) => (
									<motion.div
										key={benefit}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										className="flex items-center space-x-3"
									>
										<div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-start/20 flex items-center justify-center">
											<Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary-start" />
										</div>
										<span className="text-sm sm:text-base text-gray-300">{benefit}</span>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>

					{/* Demo Visual */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="lg:pl-8"
					>
						<div className="relative bg-gray-900/50 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl border border-gray-800/50">
							{/* Background gradient */}
							<div className="absolute inset-0 bg-gradient-to-br from-primary-start/5 to-primary-end/5 rounded-2xl" />

							{/* Workflow steps */}
							<div className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
								{steps.map((step, index) => (
									<motion.div
										key={step.name}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										className="relative group"
									>
										{/* Floating container */}
										<motion.div
											initial={{ y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
											animate={{
												y: [0, index % 2 === 0 ? -8 : 8, 0],
												rotate: [index % 2 === 0 ? -2 : 2, 0, index % 2 === 0 ? -2 : 2],
											}}
											transition={{
												y: {
													duration: 4 + index * 0.5,
													repeat: Infinity,
													ease: "easeInOut",
												},
												rotate: {
													duration: 6 + index * 0.5,
													repeat: Infinity,
													ease: "easeInOut",
												},
											}}
											className="relative p-3 sm:p-4 rounded-xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
										>
											{/* Background layers */}
											<div className="absolute inset-0 bg-gray-800/90 backdrop-blur-xl" />
											<div
												className="absolute inset-0 opacity-40"
												style={{ background: step.bgPattern }}
											/>
											<div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 via-gray-800/50 to-gray-900/50" />

											{/* Animated glow border */}
											<div
												className="absolute inset-0 rounded-xl"
												style={{
													background: `linear-gradient(90deg, transparent, ${step.shadowColor}40, transparent)`,
													animation: 'shine 3s infinite',
													backgroundSize: '200% 100%',
												}}
											/>

											{/* Content container */}
											<div className="relative">
												{/* Icon container with effects */}
												<motion.div
													className="relative mb-4 group-hover:scale-110 transform transition-all duration-300 ease-out"
													whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
													transition={{ duration: 0.5 }}
												>
													{/* Icon background with gradient */}
													<div
														className={`
                              relative p-4 rounded-xl overflow-hidden
                              bg-gradient-to-br ${step.color}
                            `}
														style={{
															boxShadow: `0 0 20px ${step.shadowColor}30`,
														}}
													>
														{/* Shine effect */}
														<div
															className="absolute inset-0"
															style={{
																background: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)',
																backgroundSize: '250% 250%',
																animation: 'shine 8s infinite linear',
															}}
														/>

														{/* Animated dots background */}
														<div
															className="absolute inset-0 opacity-10"
															style={{
																backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`,
																backgroundSize: '8px 8px',
															}}
														/>

														{/* Icon with animated glow */}
														<div className="relative">
															<div
																className="absolute inset-0 blur-sm"
																style={{ filter: `drop-shadow(0 0 8px ${step.shadowColor})` }}
															>
																<step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
															</div>
															<step.icon className="relative w-6 h-6 sm:w-8 sm:h-8 text-white transform group-hover:scale-110 transition-transform duration-300" />
														</div>
													</div>
												</motion.div>

												{/* Text content */}
												<div className="relative text-center">
													<motion.h3
														className="text-sm sm:text-base font-display font-semibold text-white mb-1"
														style={{
															textShadow: `0 0 10px ${step.shadowColor}50`,
														}}
													>
														{step.name}
													</motion.h3>
													<p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
														{step.description}
													</p>
												</div>
											</div>
										</motion.div>
									</motion.div>
								))}
							</div>

							{/* Stats */}
							<div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800/50">
								<div className="grid grid-cols-2 gap-4">
									<div className="text-center">
										<div className="text-lg sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-start to-primary-end">
											100+
										</div>
										<div className="text-xs sm:text-sm text-gray-400">Templates</div>
									</div>
									<div className="text-center">
										<div className="text-lg sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-start to-primary-end">
											50M+
										</div>
										<div className="text-xs sm:text-sm text-gray-400">Tasks/Month</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
