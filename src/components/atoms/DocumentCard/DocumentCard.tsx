"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const DocumentCard = ({
  title,
  imageUrl,
  onClick,
}: {
  title: string;
  imageUrl: string;
  onClick: () => void;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:border-green-500 transition-all duration-200 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="aspect-4/5 bg-gray-100 relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 bg-white border-t border-gray-100">
        <p className="text-sm font-semibold text-gray-900 text-center">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export default DocumentCard;
