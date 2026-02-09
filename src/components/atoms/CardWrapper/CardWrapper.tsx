"use client";

import { motion } from "framer-motion";

import SummaryCardLoader from "../skeleton/SummaryCardLoader";

const CardWrapper = ({
  children,
  loading,
}: {
  children: React.ReactNode;
  loading: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {loading ? <SummaryCardLoader /> : children}
    </motion.div>
  );
};

export default CardWrapper;
