"use client";

import Link from "next/link";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { useApproveProduct } from "../../hooks/useApproveProduct";
import { useRejectProduct } from "../../hooks/useRejectProduct";

const ProjectActionCell = ({ id, status }: { id: string; status: string }) => {
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
      <ColumnActionDropdown>
        <DropdownMenuItem>
          <Link href={`/products/info/${id}`}>View Details</Link>
        </DropdownMenuItem>
        {status === "DRAFT" && (
          <>
            <DropdownMenuItem>
              <button
                className="cursor-pointer text-green-600"
                onClick={() => setIsOpen(true)}
              >
                Approve
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                className="cursor-pointer text-red-600"
                onClick={() => setShowRejectModal(true)}
              >
                Reject
              </button>
            </DropdownMenuItem>
          </>
        )}
      </ColumnActionDropdown>

      <ConfirmAction
        isPending={isPending}
        open={isOpen}
        setOpen={setIsOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => handleApprove(id)}
        title="Are You Sure You Want to approve this product?"
        description="Are you sure you want to approve this product? The product will be visible to other users once you approve."
      />
      <ConfirmAction
        isPending={isRejecting}
        open={showRejectModal}
        setOpen={setShowRejectModal}
        onCancel={() => setShowRejectModal(false)}
        onConfirm={() => handleReject(id)}
        title="Are You Sure You Want to Reject This Product?"
        description="Are you sure you want to reject this product? Other users won't have access to this product."
        reason={rejectionReason}
        setReason={setRejectionReason}
      />
    </>
  );
};

export default ProjectActionCell;
