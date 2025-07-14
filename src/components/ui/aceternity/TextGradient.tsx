import { cn } from "../../../utils/cn";
import { motion } from "framer-motion";

export const TextGradient = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      className={cn(
        "animate-gradient bg-gradient-to-r from-[#3490dc] via-[#6366f1] to-[#3490dc] bg-[200%_auto] bg-clip-text text-transparent font-extrabold [text-shadow:_0_1px_20px_rgb(99_102_241_/_20%)]",
        className
      )}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.span>
  );
};