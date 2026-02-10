"use client";

import { motion } from "framer-motion";

import { orderSteps } from "../../constants";
import { Order } from "../../types";

const OrderSteps = ({ data }: { data: Order }) => {
  const getCurrentStepIndex = () => {
    if (data?.status === "CANCELLED") return -1;
    return orderSteps.findIndex((step) => step.status === data?.status);
  };

  const currentStepIndex = getCurrentStepIndex();

  return (
    <>
      {data?.status !== "CANCELLED" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 lg:p-8"
        >
          <h2 className="text-lg font-bold text-slate-900 mb-6">
            Order Progress
          </h2>

          <div className="relative">
            <div className="absolute top-5 left-0 right-0 h-1 bg-slate-200">
              <motion.div
                initial={{ width: "0%" }}
                animate={{
                  width: `${(currentStepIndex / (orderSteps.length - 1)) * 100}%`,
                }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-green-600"
              />
            </div>

            <div className="relative grid grid-cols-5 gap-4">
              {orderSteps.map((step, index) => {
                const isCompleted = index < currentStepIndex;
                const isCurrent = index === currentStepIndex;
                const isPending = index > currentStepIndex;

                return (
                  <motion.div
                    key={step.status}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className={`
                            w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-3 relative z-10
                            transition-all duration-300
                            ${isCompleted ? "bg-green-600 text-white shadow-lg" : ""}
                            ${isCurrent ? "bg-white border-4 border-yellow-500 text-yellow-600 shadow-lg scale-110" : ""}
                            ${isPending ? "bg-slate-200 text-slate-400 border-2 border-slate-300" : ""}
                          `}
                    >
                      {isCompleted ? "✓" : index + 1}
                    </div>

                    <div className="space-y-1">
                      <p
                        className={`
                              text-xs font-bold leading-tight
                              ${isCompleted || isCurrent ? "text-slate-900" : "text-slate-400"}
                            `}
                      >
                        {step.label}
                      </p>
                      <p className="text-xs text-slate-500 hidden lg:block">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default OrderSteps;
