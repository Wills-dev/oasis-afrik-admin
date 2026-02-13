"use client";

import { motion, AnimatePresence } from "framer-motion";

import ImageModal from "@/components/atoms/ImageModal/ImageModal";

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
      <ImageModal
        showImageModal={showImageModal}
        setShowImageModal={setShowImageModal}
        currentImage={currentImage}
        name={name}
      />
    </>
  );
};

export default ProductMainImage;
