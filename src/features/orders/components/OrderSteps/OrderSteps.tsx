"use client";

import { motion } from "framer-motion";

import { orderSteps } from "../../constants";
import { Order } from "../../types";
import { useUpdateOrderStatus } from "../../hooks/useUpdateOrderStatus";

import CancelOrderModal from "@/components/molecules/modals/CancelOrderModal/CancelOrderModal";
import EvidenceBlock from "@/components/molecules/EvidenceBlock/EvidenceBlock";
import { useUpdatePaymentProof } from "../../hooks/useUpdatePaymentProof";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";

const OrderSteps = ({
  data,
  shippedEvidence,
  deliveredEvidence,
  paymentProof,
}: {
  data: Order;
  shippedEvidence?: string;
  deliveredEvidence?: string;
  paymentProof?: string;
}) => {
  const {
    handleUpdate,
    isPending,
    isOpen,
    setIsOpen,
    reason,
    setReason,
    isOpenModal,
    setIsOpenModal,
  } = useUpdateOrderStatus();
  const {
    open,
    setOpen,
    openModal,
    setOpenModal,
    handleUpdatePayment,
    isSubmitting,
  } = useUpdatePaymentProof();

  const handleCancelOrder = (e: React.FormEvent) => {
    e.preventDefault();
    handleUpdate(data.id, "CANCELLED");
  };

  const getCurrentStepIndex = () => {
    if (data?.status === "CANCELLED") return -1;
    return orderSteps.findIndex((step) => step.status === data?.status);
  };

  const currentStepIndex = getCurrentStepIndex();

  const getEvidenceForStep = (status: string) => {
    if (status === "AWAITING_PAYMENT_VERIFICATION") return paymentProof;
    if (status === "SHIPPED") return shippedEvidence;
    if (status === "DELIVERED") return deliveredEvidence;
    return undefined;
  };

  const showCancelOrderBtn = [
    "CANCELLED",
    "SHIPPED",
    "DELIVERED",
    "RECEIVED",
    "SETTLED",
  ].includes(data?.status);

  return (
    <>
      {
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 lg:p-8"
        >
          <div className="flex sm:items-center justify-between gap-4 flex-wrap mb-6">
            <h2 className="text-lg font-bold text-slate-900">Order Progress</h2>
            <div className="flex gap-2 flex-wrap">
              {data?.status === "AWAITING_PAYMENT_VERIFICATION" && (
                <>
                  <button
                    onClick={() => setOpen(true)}
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 disabled:bg-green-300 transition cursor-pointer disabled:cursor-not-allowed"
                  >
                    Approve payment
                  </button>
                  <button
                    onClick={() => setOpenModal(true)}
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 disabled:bg-red-300 transition cursor-pointer disabled:cursor-not-allowed"
                  >
                    Decline payment
                  </button>
                </>
              )}
              {data?.status === "RECEIVED" && (
                <button
                  onClick={() => setIsOpenModal(true)}
                  disabled={isPending}
                  className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 disabled:bg-green-300 transition cursor-pointer disabled:cursor-not-allowed"
                >
                  Confirm settlement
                </button>
              )}
              {!showCancelOrderBtn && (
                <button
                  onClick={() => setIsOpen(true)}
                  disabled={isPending}
                  className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 disabled:bg-red-300 transition cursor-pointer disabled:cursor-not-allowed"
                >
                  Cancel Order
                </button>
              )}
            </div>
          </div>
          {data?.status !== "CANCELLED" ? (
            <div className="relative">
              <div className="absolute left-5 top-5 bottom-5 w-1 bg-slate-200">
                <motion.div
                  initial={{ height: "0%" }}
                  animate={{
                    height: `${(currentStepIndex / (orderSteps.length - 1)) * 100}%`,
                  }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="w-full bg-green-600"
                />
              </div>

              <div className="relative space-y-6">
                {orderSteps.map((step, index) => {
                  const isCompleted =
                    index < currentStepIndex || index === currentStepIndex;
                  const nextStep = index === currentStepIndex + 1;
                  const isPending = index > currentStepIndex;

                  const evidence = isCompleted
                    ? getEvidenceForStep(step.status)
                    : undefined;

                  return (
                    <motion.div
                      key={step.status}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div
                        className={`
                        w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold relative z-10 shrink-0
                        transition-all duration-300
                        ${isCompleted ? "bg-green-600 text-white shadow-lg" : ""}
                        
                        ${nextStep ? "bg-yellow-500 border-4 border-yellow-500 text-white shadow-lg scale-110" : ""}
                        ${isPending ? "bg-slate-200 text-slate-400 border-2 border-slate-300" : ""}
                      `}
                      >
                        {isCompleted ? "✓" : index + 1}
                      </div>

                      <div className="flex-1 pt-1">
                        <p
                          className={`
                          text-sm font-bold leading-tight mb-1
                          ${isCompleted ? "text-slate-900" : "text-slate-400"}
                        `}
                        >
                          {step.label}
                        </p>
                        <p className="text-xs text-slate-500">
                          {step.description}
                        </p>
                        {evidence && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.3 + index * 0.1,
                            }}
                          >
                            <EvidenceBlock file={evidence} />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-red-600 text-lg font-bold">Order Cancelled</p>
              <p className="text-sm text-slate-500 mt-2">
                This order has been cancelled.
              </p>
              {data?.cancellationReason && (
                <p className="text-sm text-slate-600 mt-2">
                  {data?.cancellationReason}
                </p>
              )}
            </div>
          )}
        </motion.div>
      }
      <CancelOrderModal
        open={isOpen}
        setOpen={setIsOpen}
        handleSubmit={handleCancelOrder}
        isPending={isPending}
        reason={reason}
        setReason={setReason}
      />
      <ConfirmAction
        isPending={isPending}
        open={isOpenModal}
        setOpen={setIsOpenModal}
        onCancel={() => setIsOpenModal(false)}
        onConfirm={() => handleUpdate(data.id, "SETTLED")}
        title="Confrim settlement"
        description="Please confirm you have settled seller for this order."
      />
      <ConfirmAction
        isPending={isSubmitting}
        open={open}
        setOpen={setOpen}
        onCancel={() => setOpen(false)}
        onConfirm={() => handleUpdatePayment(data.id, true)}
        title="Payment confirmation"
        description="Please confirm you have seen this payment. This action can not be reversed."
      />
      <ConfirmAction
        isPending={isSubmitting}
        open={openModal}
        setOpen={setOpenModal}
        onCancel={() => setOpenModal(false)}
        onConfirm={() => handleUpdatePayment(data.id, true)}
        title="Payment Not Seen"
        description="Please confirm you have not seen this payment. This action can not be reversed."
      />
    </>
  );
};

export default OrderSteps;
