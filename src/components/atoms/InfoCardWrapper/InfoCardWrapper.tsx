"use client";

import { motion } from "framer-motion";

const InfoCardWrapper = ({
  title,
  className = "bg-slate-50",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-2xl shadow-sm border border-slate-200 overflow-hidden bg-white"
    >
      <div className={`border-b border-slate-200 px-6 py-4 ${className}`}>
        <h3 className="font-bold text-slate-900">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
};

export default InfoCardWrapper;
