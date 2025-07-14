import { cn } from "../../../utils/cn";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !animate) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      containerRef.current.style.setProperty("--x", x.toString());
      containerRef.current.style.setProperty("--y", y.toString());
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full w-full bg-transparent",
        containerClassName
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-start to-primary-end opacity-0 blur-xl transition duration-500",
          hovered && "opacity-100",
          className
        )}
      />
      <div
        className={cn(
          "absolute inset-[1px] rounded-3xl bg-gray-900",
          className
        )}
      />
      <div className="relative">{children}</div>
    </div>
  );
};