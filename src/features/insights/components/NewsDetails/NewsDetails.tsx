"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { convertDateFormat } from "@/lib/helpers";
import { useGetInsightInfo } from "../../hooks/useGetInsightInfo";

import BackButton from "@/components/atoms/BackButton/BackButton";
import InfoSkeleton from "@/components/atoms/skeleton/InfoSkeleton";

const NewsDetails = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetInsightInfo(id);

  const formattedContent = (data?.content || "").replace(/&nbsp;/g, " ");

  return (
    <div className="grow">
      {isLoading ? (
        <InfoSkeleton />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <BackButton />

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-100 rounded-lg  overflow-hidden"
          >
            {data?.image && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-200"
              >
                <Image
                  src={data?.image}
                  alt={data?.title}
                  className="w-full h-full object-cover"
                  width={1200}
                  height={600}
                  loading="lazy"
                />
              </motion.div>
            )}

            <div className="p-6 sm:p-8 md:p-10">
              {(data?.createdAt || data?.author) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4"
                >
                  {data?.createdAt && (
                    <time className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {data?.createdAt && convertDateFormat(data.createdAt)}
                    </time>
                  )}
                  {data?.createdAt && data?.author && (
                    <span className="text-gray-300">•</span>
                  )}
                  {data?.author && (
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {data?.author?.firstName} {data?.author?.lastName}
                    </span>
                  )}
                </motion.div>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              >
                {data?.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-ul:list-disc prose-ol:list-decimal
                  prose-li:text-gray-700
                  prose-img:rounded-lg prose-img:shadow-md
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 
                  prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: formattedContent || "",
                }}
              />
            </div>
          </motion.article>
        </motion.div>
      )}
    </div>
  );
};

export default NewsDetails;
