import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Check, Sparkles } from 'lucide-react'
import { ToggleSwitch } from '../components/ui/ToggleSwitch'

const plans = [
	{
		name: 'Starter',
		price: { monthly: 29, annual: 24 },
		description: 'Perfect for small teams getting started with automation',
		features: [
			'Up to 5 team members',
			'50 automated workflows',
			'1,000 tasks per month',
			'Basic integrations',
			'Email support',
		],
	},
	{
		name: 'Professional',
		price: { monthly: 79, annual: 69 },
		description: 'Advanced features for growing businesses',
		popular: true,
		features: [
			'Up to 20 team members',
			'Unlimited workflows',
			'10,000 tasks per month',
			'Advanced integrations',
			'Priority support',
			'Workflow templates',
			'Advanced analytics',
		],
	},
	{
		name: 'Enterprise',
		price: { monthly: 199, annual: 169 },
		description: 'Custom solutions for large organizations',
		features: [
			'Unlimited team members',
			'Unlimited workflows',
			'Unlimited tasks',
			'Custom integrations',
			'Dedicated support',
			'SSO & SAML',
			'API access',
			'Custom contract',
		],
	},
]

export const PricingSection = () => {
	const [isAnnual, setIsAnnual] = useState(true)

	return (
		<section id="pricing" className="py-20 relative overflow-hidden">
			{/* Background with radial gradient */}
			<div className="absolute inset-0 bg-gray-900">
				<div className="absolute inset-0 bg-gradient-to-b from-primary-start/5 via-transparent to-transparent" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-start/10 via-transparent to-transparent opacity-70" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="font-display text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
					>
						Simple,{' '}
						<span className="relative">
							<span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary-start to-primary-end">
								Transparent Pricing
							</span>
							<div className="absolute -inset-1 bg-gradient-to-r from-primary-start/20 to-primary-end/20 blur-lg" />
						</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
					>
						Choose the perfect plan for your team's needs
					</motion.p>

					{/* Billing Toggle */}
					<div className="relative inline-flex items-center justify-center gap-4 mb-12 p-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
						<span className={`text-sm transition-colors duration-200 ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
							Monthly
						</span>
						<ToggleSwitch checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
						<span className={`text-sm transition-colors duration-200 ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
							Annual{' '}
							<span className="text-sm font-medium text-primary-start">
								(20% off)
							</span>
						</span>
					</div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6">
					{plans.map((plan, index) => (
						<motion.div
							key={plan.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							viewport={{ once: true }}
							className="relative group"
						>
							{/* Popular badge */}
							{plan.popular && (
								<div className="absolute -top-4 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
									<motion.div
										className="relative"
										animate={{
											y: [0, -4, 0]
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "easeInOut"
										}}
									>
										{/* Outer glow */}
										<div className="absolute -inset-[6px] bg-primary-start/50 rounded-full blur-md" />

										{/* Main badge */}
										<div className="relative px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-start to-primary-end">
											{/* Inner glow/shine effect */}
											<div className="absolute inset-0 rounded-full overflow-hidden">
												<div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20" />
												<div className="absolute inset-x-0 top-0 h-[1px] bg-white/30" />
											</div>

											{/* Badge content */}
											<div className="relative flex items-center justify-center gap-1.5">
												<Sparkles className="w-3.5 h-3.5 text-white" />
												<span className="text-sm font-medium text-white whitespace-nowrap">Most Popular</span>
											</div>
										</div>
									</motion.div>
								</div>
							)}

							{/* Card */}
							<div className={`
                relative rounded-2xl overflow-hidden backdrop-blur-xl border mt-4
                transition-all duration-300
                ${plan.popular
									? 'bg-gray-800/70 border-primary-start/50 shadow-lg shadow-primary-start/20'
									: 'bg-gray-800/50 border-gray-700/50 group-hover:border-gray-600/50'}
              `}>
								{/* Inner glass effect */}
								<div className="absolute inset-0">
									<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
									<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
								</div>

								<div className="relative p-6 sm:p-8 h-full flex flex-col">
									{/* Plan header */}
									<div className="mb-6">
										<h3 className="font-display text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-white/90 transition-colors tracking-tight">
											{plan.name}
										</h3>
										<p className="font-sans text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors">
											{plan.description}
										</p>
									</div>

									{/* Price */}
									<div className="mb-6">
										<div className="flex items-baseline gap-1">
											<span className="text-3xl sm:text-4xl font-bold text-white group-hover:text-white/90 transition-colors">
												${isAnnual ? plan.price.annual : plan.price.monthly}
											</span>
											<span className="text-gray-400 group-hover:text-gray-300 transition-colors">
												/month
											</span>
										</div>
										{isAnnual && (
											<div className="mt-1 text-sm text-primary-start">
												Save ${(plan.price.monthly - plan.price.annual) * 12}/year
											</div>
										)}
									</div>

									{/* Features */}
									<div className="flex-grow">
										<ul className="space-y-3 mb-8">
											{plan.features.map((feature) => (
												<li key={feature} className="flex items-start gap-3">
													<div className="relative flex-shrink-0 w-5 h-5 rounded-full bg-primary-start/20 flex items-center justify-center group/check">
														<Check className="w-3 h-3 text-primary-start group-hover/check:scale-110 transition-transform" />
														<div className="absolute inset-0 rounded-full bg-primary-start/10 group-hover/check:scale-110 transition-transform" />
													</div>
													<span className="text-gray-300 group-hover:text-gray-200 transition-colors">
														{feature}
													</span>
												</li>
											))}
										</ul>
									</div>

									{/* CTA Button */}
									<div className="relative">
										<Button
											variant={plan.popular ? 'primary' : 'secondary'}
											className={`
                        w-full text-sm sm:text-base py-2.5 sm:py-3
                        ${plan.popular
													? 'shadow-lg shadow-primary-start/20 hover:shadow-primary-start/30'
													: 'shadow-lg shadow-gray-900/20 hover:shadow-gray-900/30'}
                      `}
										>
											Get Started
										</Button>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Money Back Guarantee */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative mt-16 text-center"
				>
					<div className="inline-block px-6 py-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
						<p className="text-gray-400">
							30-day money-back guarantee •{' '}
							<span className="text-primary-start">No credit card required</span>
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
