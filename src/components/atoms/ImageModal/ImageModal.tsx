"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const ImageModal = ({
  showImageModal,
  setShowImageModal,
  currentImage,
  name,
}: {
  name: string;
  showImageModal: boolean;
  currentImage: null | string;
  setShowImageModal: (item: boolean) => void;
}) => {
  return (
    <>
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

export default ImageModal;
