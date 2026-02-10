"use client";

import Link from "next/link";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const ProjectActionCell = ({ id }: { id: string }) => {
  return (
    <>
      <ColumnActionDropdown>
        <DropdownMenuItem>
          <Link href={`/products/info/${id}`}>View Details</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {/* <button className="cursor-pointer text-red-600">Reject</button> */}
          <button className="cursor-pointer text-green-600">Approve</button>
        </DropdownMenuItem>
      </ColumnActionDropdown>
      {/* <ConfirmAction
        isPending={isPending}
        open={isOpen}
        setOpen={setIsOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => handleDelete(id)}
        title="Are You Sure You Want to delete Insight?"
        description="Are you sure you want to delete this insight? When deleted, you can't retrive it anymore."
      /> */}
    </>
  );
};

export default ProjectActionCell;
