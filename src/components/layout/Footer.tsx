import { Facebook, Twitter, Linkedin, Github } from 'lucide-react'

export const Footer = () => {
	const links = {
		product: [
			{ name: 'Features', href: '#features' },
			{ name: 'Pricing', href: '#pricing' },
			{ name: 'Demo', href: '#demo' },
			{ name: 'FAQ', href: '#faq' },
		],
		company: [
			{ name: 'About', href: '#' },
			{ name: 'Blog', href: '#' },
			{ name: 'Careers', href: '#' },
			{ name: 'Contact', href: '#' },
		],
		resources: [
			{ name: 'Documentation', href: '#' },
			{ name: 'API Reference', href: '#' },
			{ name: 'Guides', href: '#' },
			{ name: 'Status', href: '#' },
		],
		legal: [
			{ name: 'Privacy', href: '#' },
			{ name: 'Terms', href: '#' },
			{ name: 'Security', href: '#' },
			{ name: 'Cookies', href: '#' },
		],
	}

	const socialLinks = [
		{ name: 'Facebook', icon: Facebook, href: '#' },
		{ name: 'Twitter', icon: Twitter, href: '#' },
		{ name: 'LinkedIn', icon: Linkedin, href: '#' },
		{ name: 'GitHub', icon: Github, href: '#' },
	]

	return (
		<footer className="bg-gray-900 pt-20 pb-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">
					{/* Product */}
					<div>
						<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
							Product
						</h3>
						<ul className="space-y-3">
							{links.product.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className="text-gray-400 hover:text-white transition-colors"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
							Company
						</h3>
						<ul className="space-y-3">
							{links.company.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className="text-gray-400 hover:text-white transition-colors"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
							Resources
						</h3>
						<ul className="space-y-3">
							{links.resources.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className="text-gray-400 hover:text-white transition-colors"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
							Stay Updated
						</h3>
						<p className="text-gray-400 mb-4">
							Subscribe to our newsletter for updates and tips.
						</p>
						<form className="space-y-2">
							<input
								type="email"
								placeholder="Enter your email"
								className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-start"
							/>
							<button
								type="submit"
								className="w-full px-4 py-2 bg-primary-start hover:bg-primary-end transition-colors rounded-lg font-medium"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>

				{/* Bottom section */}
				<div className="pt-8 border-t border-gray-800">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="flex items-center space-x-4">
							{socialLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className="text-gray-400 hover:text-white transition-colors"
								>
									<link.icon className="w-5 h-5" />
								</a>
							))}
						</div>

						<div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
							{links.legal.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className="hover:text-white transition-colors"
								>
									{link.name}
								</a>
							))}
						</div>

						<p className="text-gray-400 text-sm">
							© {new Date().getFullYear()} NexFlow. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
