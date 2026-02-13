"use client";

import { useApproveProduct } from "../../hooks/useApproveProduct";
import { useRejectProduct } from "../../hooks/useRejectProduct";

import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";
import InfoCardWrapper from "@/components/atoms/InfoCardWrapper/InfoCardWrapper";

const ProductActionPanel = ({
  status,
  productId,
}: {
  status: string;
  productId: string;
}) => {
  const { handleApprove, isPending, isOpen, setIsOpen } = useApproveProduct();
  const {
    handleReject,
    isRejecting,
    rejectionReason,
    setRejectionReason,
    showRejectModal,
    setShowRejectModal,
  } = useRejectProduct();

  return (
    <>
      {status === "DRAFT" && (
        <InfoCardWrapper title="Admin Actions">
          <div className="p-6 space-y-3 flex items-center gap-4 flex-wrap">
            <button
              onClick={() => setIsOpen(true)}
              disabled={isPending}
              className="w-fit bg-linear-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 disabled:from-slate-400 disabled:to-slate-500 disabled:cursor-not-allowed shadow-lg hover:shadow-xl mb-0"
            >
              {isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Approving...
                </span>
              ) : (
                "Approve Product"
              )}
            </button>

            <button
              onClick={() => setShowRejectModal(true)}
              disabled={isPending || isRejecting}
              className="w-fit bg-white text-red-600 py-3 px-4 rounded-xl font-semibold border-2 border-red-600 hover:bg-red-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Reject Product
            </button>
          </div>
        </InfoCardWrapper>
      )}
      <ConfirmAction
        isPending={isPending}
        open={isOpen}
        setOpen={setIsOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => handleApprove(productId)}
        title="Are You Sure You Want to approve this product?"
        description="Are you sure you want to approve this product? The product will be visible to other users once you approve."
      />
      <ConfirmAction
        isPending={isRejecting}
        open={showRejectModal}
        setOpen={setShowRejectModal}
        onCancel={() => setShowRejectModal(false)}
        onConfirm={() => handleReject(productId)}
        title="Are You Sure You Want to Reject This Product?"
        description="Are you sure you want to reject this product? Other users won't have access to this product."
        reason={rejectionReason}
        setReason={setRejectionReason}
      />
    </>
  );
};

export default ProductActionPanel;
