"use client";

import Link from "next/link";

import ConfirmAction from "../ConfirmAction/ConfirmAction";
import ColumnActionDropdown from "../ColumnActionDropdown/ColumnActionDropdown";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useDeleteInsight } from "@/features/insights/hooks/useDeleteInsight";

const InsightsActionCell = ({ id }: { id: string }) => {
  const { isOpen, setIsOpen, isPending, handleDelete } = useDeleteInsight();

  return (
    <>
      <ColumnActionDropdown>
        <DropdownMenuItem>
          <Link href={`/insights/info/${id}`}>View Details</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button
            onClick={() => setIsOpen(true)}
            className="cursor-pointer text-red-600"
          >
            Delete
          </button>
        </DropdownMenuItem>
      </ColumnActionDropdown>
      <ConfirmAction
        isPending={isPending}
        open={isOpen}
        setOpen={setIsOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => handleDelete(id)}
        title="Are You Sure You Want to delete Insight?"
        description="Are you sure you want to delete this insight? When deleted, you can't retrive it anymore."
      />
    </>
  );
};

export default InsightsActionCell;
