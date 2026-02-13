"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ProductMainImage = ({
  currentImage,
  setShowImageModal,
  showImageModal,
  name,
}: {
  name: string;
  currentImage: string | null;
  showImageModal: boolean;
  setShowImageModal: (item: boolean) => void;
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
      >
        <div
          className="aspect-square bg-slate-100 cursor-pointer relative group"
          onClick={() => setShowImageModal(true)}
        >
          <AnimatePresence mode="wait">
            {currentImage && (
              <motion.img
                key={currentImage}
                src={currentImage}
                alt={name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
              Click to enlarge
            </span>
          </div>
        </div>
      </motion.div>
      {showImageModal && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
          onClick={() => setShowImageModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-6xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-slate-300 text-sm font-medium"
            >
              Close ✕
            </button>
            <div className="max-w-full max-h-[85vh]">
              {currentImage && (
                <Image
                  src={currentImage}
                  alt={name}
                  width={1200}
                  height={800}
                  className=" w-full h-full rounded-xl shadow-2xl"
                />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProductMainImage;
