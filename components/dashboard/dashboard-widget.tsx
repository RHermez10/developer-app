"use client";
import { motion } from "framer-motion";

type DashboardWidgetProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export function DashboardWidget({
  title,
  children,
  className = "",
}: DashboardWidgetProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={` rounded-2xl border border-gray-800 bg-gray-900 p-6 ${className}`}
    >
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}
