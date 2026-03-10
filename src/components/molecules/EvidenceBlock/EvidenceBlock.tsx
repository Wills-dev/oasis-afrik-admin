"use client";

import { useState } from "react";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, FileText, X, ZoomIn } from "lucide-react";

const EvidenceBlock = ({ file }: { file: string }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const isPdf = file.toLowerCase().endsWith(".pdf");

  if (isPdf) {
    return (
      <div className="mt-3 flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 w-fit">
        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
          <FileText className="w-4 h-4 text-red-500" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-slate-700 leading-tight">
            Proof of delivery
          </span>
          <span className="text-[10px] text-slate-400">PDF Document</span>
        </div>
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors px-2.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100"
        >
          View <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="mt-3 group relative w-fit">
        <div
          className="relative w-32 h-20 rounded-xl overflow-hidden border-2 border-slate-200 cursor-pointer hover:border-green-400 transition-all duration-200 shadow-sm hover:shadow-md"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            width={128}
            height={80}
            src={file}
            alt="Proof"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
            <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </div>
        </div>
        <span className="block mt-1 text-[10px] text-slate-400 font-medium">
          Tap to view
        </span>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-3xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={file}
                alt="Proof"
                width={1200}
                height={800}
                className="w-full h-full object-contain bg-white"
              />
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EvidenceBlock;
