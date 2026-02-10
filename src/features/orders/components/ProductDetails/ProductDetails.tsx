"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import DataField from "@/components/atoms/DataField/DataField";

import { Order } from "../../types";
import { numberWithCommas } from "@/lib/helpers";
import { getCurrencySign } from "@/lib/helpers/getCurrencySign";

const ProductDetails = ({ data }: { data: Order }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
    >
      <div className="border-b border-slate-200 px-6 py-4 bg-slate-50">
        <h2 className="text-xl font-bold text-slate-900">Product Details</h2>
      </div>

      <div className="p-6">
        <div className="flex gap-6 mb-6">
          <div className="w-32 h-32 bg-slate-100 rounded-xl overflow-hidden hrink-0 cursor-pointer hover:ring-2 hover:ring-emerald-500 transition-all">
            {data?.product?.mainImage && (
              <Image
                width={128}
                height={128}
                src={data?.product?.mainImage}
                alt={data?.product?.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {data?.product?.name}
            </h3>
            <p className="text-slate-600 text-sm line-clamp-3">
              {data?.product?.description}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <DataField
            label="Quantity"
            value={`${data?.quantity && numberWithCommas(Number(data?.quantity))} units`}
          />
          <DataField
            label="Unit Price"
            value={`${data?.currency && getCurrencySign(data?.currency)}${data?.product.price && numberWithCommas(Number(data?.product.price))}`}
          />
          <DataField
            label="Total Amount"
            value={`${data?.currency && getCurrencySign(data?.currency)}${data?.amount && numberWithCommas(Number(data?.amount))}`}
            large
          />
          <DataField
            label="Lead Time"
            value={`${data?.product.minLeadTime}-${data?.product.maxLeadTime}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
