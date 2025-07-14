import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
	{
		question: "How does Flowy's automation work?",
		answer:
			'Flowy uses a visual workflow builder where you can connect different apps and actions using drag-and-drop. When triggered, workflows execute automatically, moving data between apps and performing actions based on your rules.',
	},
	{
		question: 'What integrations are available?',
		answer:
			'We support 100+ popular tools including Slack, Gmail, Trello, Asana, GitHub, and more. Custom integrations can be built using our API for Enterprise plans.',
	},
	{
		question: 'Do I need technical knowledge to use Flowy?',
		answer:
			'No technical knowledge is required! Our visual workflow builder is designed for non-technical users. However, developers can use our API to create custom actions and integrations.',
	},
	{
		question: 'Can I try Flowy before purchasing?',
		answer:
			"Yes! We offer a 14-day free trial on all plans. No credit card is required, and you'll have access to all features during the trial period.",
	},
	{
		question: 'What kind of support do you provide?',
		answer:
			'All plans include email support. Professional plans get priority support with 24-hour response time, while Enterprise plans receive dedicated support with custom SLAs.',
	},
	{
		question: 'Is my data secure with Flowy?',
		answer:
			'Absolutely. We use bank-grade encryption, are SOC 2 Type II compliant, and GDPR ready. Your data is encrypted both in transit and at rest.',
	},
]

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
		>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full text-left py-4 flex items-center justify-between gap-4"
			>
				<span className="text-lg font-medium">{question}</span>
				<motion.div
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.2 }}
				>
					<ChevronDown className="w-5 h-5 text-gray-400" />
				</motion.div>
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="overflow-hidden"
					>
						<p className="pb-4 text-gray-400">{answer}</p>
					</motion.div>
				)}
			</AnimatePresence>
			<div className="border-b border-gray-800" />
		</motion.div>
	)
}

export const FAQSection = () => {
	return (
		<section id="faq" className="py-20 bg-gray-900/50">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl sm:text-4xl font-bold mb-4"
					>
						Frequently Asked <span className="gradient-text">Questions</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-gray-400 text-lg"
					>
						Everything you need to know about Flowy
					</motion.p>
				</div>

				<div className="space-y-2">
					{faqs.map((faq) => (
						<FAQItem key={faq.question} {...faq} />
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mt-12"
				>
					<p className="text-gray-400">
						Still have questions?{' '}
						<a href="#" className="text-primary-start hover:text-primary-end">
							Contact our support team
						</a>
					</p>
				</motion.div>
			</div>
		</section>
	)
}
