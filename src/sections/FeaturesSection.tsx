import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card'
import { Zap, Workflow, Lock, BarChart, Settings } from 'lucide-react'
import { LinkIcon } from '@heroicons/react/24/solid'

const features = [
	{
		icon: Workflow,
		title: 'Visual Workflow Builder',
		description: 'Create complex automations with our intuitive drag-and-drop interface.',
	},
	{
		icon: LinkIcon,
		title: 'Seamless Integrations',
		description: 'Connect with 100+ popular tools and services out of the box.',
	},
	{
		icon: Zap,
		title: 'Real-time Execution',
		description: 'Trigger workflows instantly and monitor their execution in real-time.',
	},
	{
		icon: Lock,
		title: 'Enterprise Security',
		description: 'Bank-grade encryption and compliance with SOC 2 and GDPR standards.',
	},
	{
		icon: BarChart,
		title: 'Advanced Analytics',
		description: 'Track automation performance with detailed metrics and insights.',
	},
	{
		icon: Settings,
		title: 'Custom Actions',
		description: 'Build and integrate custom actions using our developer API.',
	},
]

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
}

export const FeaturesSection = () => {
	return (
		<section id="features" className="py-20 bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl sm:text-4xl font-bold mb-4"
					>
						Powerful Features for{' '}
						<span className="gradient-text">Modern Teams</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-gray-400 text-lg max-w-2xl mx-auto"
					>
						Everything you need to automate your workflow and boost productivity
					</motion.p>
				</div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{features.map((feature) => (
						<motion.div key={feature.title} variants={itemVariants}>
							<Card className="h-full">
								<div className="p-2 w-12 h-12 rounded-lg bg-primary-start/10 mb-4">
									<feature.icon className="w-8 h-8 text-primary-start" />
								</div>
								<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
								<p className="text-gray-400">{feature.description}</p>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
