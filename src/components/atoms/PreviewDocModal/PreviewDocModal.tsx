"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PreviewDocModal = ({
  selectedDocument,
  setSelectedDocument,
}: {
  selectedDocument: string | null;
  setSelectedDocument: (item: string | null) => void;
}) => {
  return (
    <>
      {selectedDocument && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedDocument(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDocument(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-sm font-medium"
            >
              Close ✕
            </button>
            <Image
              src={selectedDocument}
              alt="Document preview"
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
              width={1200}
              height={780}
            />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PreviewDocModal;
