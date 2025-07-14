import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { SparklesCore } from '../components/ui/aceternity/SparklesEffect'

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '150+', label: 'Integrations' },
  { value: '2M+', label: 'Tasks Automated' },
  { value: '10x', label: 'Faster Workflows' }
]

const companies = [
  { name: 'TechCorp', employees: '5000+ employees' },
  { name: 'InnovateLabs', employees: '1000+ employees' },
  { name: 'FutureScale', employees: '2000+ employees' },
  { name: 'GrowthTech', employees: '3000+ employees' }
]

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden font-sans">
      <div className="absolute inset-0 flex flex-col">
        {/* Sparkles Effect */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={100}
          className="absolute inset-0"
          particleColor="rgba(255,255,255,0.3)"
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center rounded-3xl p-4 sm:p-6 lg:p-8 bg-gray-900/80 backdrop-blur-xl shadow-2xl border border-gray-800/50"
        >
          <h1 className="relative">
						<span className="block font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
							Automate Your Workflow with
						</span>
						<div className="relative inline-block mt-2">
							{/* Glow effect */}
							<div className="absolute -inset-4 bg-gradient-to-r from-primary-start to-primary-end opacity-75 blur-2xl" />
							
							{/* Main text */}
							<span className="relative inline-block font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-200">
								NexFlow
							</span>              
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-start via-primary-end to-primary-start bg-[length:200%_auto] animate-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                  NexFlow
                </span>
              </div>
            </div>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Connect your tools, automate your tasks, and boost team productivity with
            our intelligent workflow automation platform.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto shadow-lg shadow-primary-start/25 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
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
                className="w-full sm:w-auto shadow-lg shadow-gray-900/50 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="relative p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-start/5 to-primary-end/5 rounded-xl" />
                  <div className="relative">
                    <div className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-start to-primary-end mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-12 sm:mt-16">
            <motion.div
              className="relative rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-6 sm:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-start/5 to-primary-end/5 rounded-2xl" />
              <motion.p 
                className="relative text-sm text-gray-400 mb-6 sm:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Trusted by leading companies worldwide
              </motion.p>
              <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {companies.map((company, i) => (
                  <motion.div
                    key={company.name}
                    className="text-center relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                    <div className="relative">
                      <div className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
                        {company.name}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">{company.employees}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}