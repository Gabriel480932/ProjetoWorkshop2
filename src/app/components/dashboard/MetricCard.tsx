import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  subtitle?: string;
  variant?: "default" | "alert" | "info" | "warning";
  index?: number;
}

export function MetricCard({
  icon: Icon,
  label,
  value,
  subtitle,
  variant = "default",
  index = 0,
}: MetricCardProps) {
  const variantStyles = {
    default: {
      bg: "#1E1E1E",
      iconBg: "rgba(200, 241, 53, 0.1)",
      iconColor: "#C8F135",
      border: "#2D2D2D",
    },
    alert: {
      bg: "rgba(224, 32, 32, 0.1)",
      iconBg: "rgba(224, 32, 32, 0.2)",
      iconColor: "#E02020",
      border: "rgba(224, 32, 32, 0.3)",
    },
    info: {
      bg: "#1E1E1E",
      iconBg: "rgba(0, 229, 255, 0.1)",
      iconColor: "#00E5FF",
      border: "#2D2D2D",
    },
    warning: {
      bg: "#1E1E1E",
      iconBg: "rgba(255, 107, 26, 0.1)",
      iconColor: "#FF6B1A",
      border: "#2D2D2D",
    },
  };

  const style = variantStyles[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="rounded-xl border relative overflow-hidden group"
      style={{ backgroundColor: style.bg, borderColor: style.border }}
    >
      {/* Mobile: vertical layout compacto */}
      <div className="flex flex-col p-3 sm:hidden">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center mb-2 flex-shrink-0"
          style={{ backgroundColor: style.iconBg }}
        >
          <Icon size={15} style={{ color: style.iconColor }} strokeWidth={2.5} />
        </div>

        <p
          className="tracking-widest uppercase mb-1"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            color: "#6B6B6B",
            fontSize: "0.5625rem",
          }}
        >
          {label}
        </p>

        <motion.p
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring", bounce: 0.4 }}
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1,
            fontSize: "1.375rem",
          }}
        >
          {value}
        </motion.p>

        {subtitle && (
          <p
            className="mt-1"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#6B6B6B",
              fontSize: "0.5625rem",
              lineHeight: 1.3,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Desktop: vertical layout */}
      <div className="hidden sm:block p-4 lg:p-6">
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4"
          style={{ backgroundColor: style.iconBg }}
        >
          <Icon size={24} style={{ color: style.iconColor }} strokeWidth={2.5} />
        </div>

        <p
          className="mb-1.5 sm:mb-2 tracking-widest uppercase text-xs"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            color: "#6B6B6B",
          }}
        >
          {label}
        </p>

        <motion.h3
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring", bounce: 0.4 }}
          className="mb-1 text-2xl sm:text-3xl lg:text-4xl"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1,
          }}
        >
          {value}
        </motion.h3>

        {subtitle && (
          <p
            className="text-xs sm:text-sm truncate"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#B0B0B0",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Hover effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${style.iconColor}05 0%, transparent 100%)`,
        }}
      />
    </motion.div>
  );
}