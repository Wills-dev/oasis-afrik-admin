"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const ProductThumbnailImages = ({
  images,
  currentImage,
  setCurrentImage,
}: {
  images: string[];
  currentImage: string | null;
  setCurrentImage: (item: string | null) => void;
}) => {
  return (
    <>
      {" "}
      {images.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-4 gap-3"
        >
          {images.map((image: string, index: number) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentImage(image)}
              className={`aspect-square bg-slate-100 rounded-xl overflow-hidden cursor-pointer border-2 transition-all${currentImage === image ? "border-green-600 ring-2 ring-green-200" : "border-slate-200 hover:border-green-400"}`}
            >
              <Image
                width={100}
                height={100}
                src={image}
                alt={`${name} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default ProductThumbnailImages;
