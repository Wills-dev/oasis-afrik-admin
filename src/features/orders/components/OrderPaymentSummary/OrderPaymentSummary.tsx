"use client";

import { motion } from "framer-motion";

import { Order } from "../../types";
import { getCurrencySign } from "@/lib/helpers/getCurrencySign";
import { numberWithCommas } from "@/lib/helpers";
import { formatDate } from "@/lib/helpers/dateFormats";

const OrderPaymentSummary = ({ data }: { data: Order }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
    >
      <div className="border-b border-slate-200 px-6 py-4 bg-emerald-50">
        <h3 className="font-bold text-slate-900">Payment Summary</h3>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <span className="text-slate-600">Subtotal</span>
          <span className="font-semibold text-slate-900">
            {`${data?.currency && getCurrencySign(data?.currency)}${data?.amount && numberWithCommas(Number(data?.amount))}`}
          </span>
        </div>
        <div className="flex justify-between items-start">
          <span className="text-slate-600">Amount Charged</span>
          <span className="font-semibold text-slate-900">
            {`${getCurrencySign("NGN")}${data?.amountChargedNgn && numberWithCommas(Number(data?.amountChargedNgn))}`}
          </span>
        </div>
        <div className="pt-4 border-t border-slate-200">
          <div className="flex justify-between items-start mb-2">
            <span className="font-bold text-slate-900">Total</span>
            <span className="font-bold text-2xl text-emerald-600">
              {`${getCurrencySign("NGN")}${data?.amountChargedNgn && numberWithCommas(Number(data?.amountChargedNgn))}`}
            </span>
          </div>
        </div>

        {data?.paidAt && (
          <div className="pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500 mb-1">Paid on</p>
            <p className="text-sm font-semibold text-slate-900">
              {formatDate(data?.paidAt)}
            </p>
          </div>
        )}

        {data?.paystackReference && (
          <div className="pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500 mb-1">Payment Reference</p>
            <p className="text-sm font-mono text-slate-900 break-all">
              {data?.paystackReference}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default OrderPaymentSummary;
