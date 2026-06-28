import { ReactNode } from "react";
import { motion } from "motion/react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  id: string;
  delay?: number;
  key?: string | number;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  id,
  delay = 0,
}: GlassCardProps) {
  const classes = `glass-card ${hoverEffect ? "glass-card-hover" : ""} rounded-2xl p-6 md:p-8 relative overflow-hidden ${className}`;

  if (hoverEffect) {
    return (
      <motion.div
        id={id}
        className={classes}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Inner glow accent */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      className={classes}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {children}
    </motion.div>
  );
}
