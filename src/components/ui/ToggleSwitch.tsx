import { motion } from 'framer-motion';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
}

export const ToggleSwitch = ({ checked, onChange }: ToggleSwitchProps) => {
  return (
    <button
      onClick={onChange}
      className="relative w-20 h-10 rounded-full overflow-hidden transition-all duration-300 group"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700" />
      <div className="absolute inset-0.5 rounded-full bg-gray-900" />
      
       {/* Highlight effects */}
       <div className="absolute inset-0.5 rounded-full overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
       </div>
      {/* Thumb track highlight */}
      <div
        className={`
          absolute inset-1 rounded-full transition-colors duration-200
          ${checked ? 'bg-gradient-to-r from-primary-start/20 to-primary-end/20' : 'bg-gray-800/50'}
        `}
      />

      {/* Animated thumb */}
      <motion.div
        layout
        className="absolute w-8 h-8 top-1 left-1"
        animate={{ x: checked ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div className="relative w-full h-full rounded-full">
          {/* Thumb background with gradient */}
          <div className={`
            absolute inset-0 rounded-full
            bg-gradient-to-br from-primary-start to-primary-end
            transition-opacity duration-200
            ${checked ? 'opacity-100' : 'opacity-0'}
          `} />
          <div className={`
            absolute inset-0 rounded-full
            bg-gradient-to-br from-gray-400 to-gray-500
            transition-opacity duration-200
            ${checked ? 'opacity-0' : 'opacity-100'}
          `} />

          {/* Thumb highlights */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
          <div className="absolute inset-px rounded-full bg-gray-900" />
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
          </div>
        </div>
      </motion.div>
    </button>
  );
};