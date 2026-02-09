import Link from "next/link";
import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

import { Verification } from "@/lib/types";
import { formatDate } from "@/lib/helpers/dateFormats";

const columnHelper = createColumnHelper<Verification>();

export const Column = [
  columnHelper.accessor("createdAt", {
    header: "Submitted At",
    cell: ({ row }) => {
      const date: string = row.getValue("createdAt");
      const formatted = date ? formatDate(date) : "";
      return <div className="">{formatted}</div>;
    },
  }),

  columnHelper.accessor("reviewedAt", {
    header: "Reviewed At",
    cell: ({ row }) => {
      const date: string = row.getValue("reviewedAt");
      const formatted = date ? formatDate(date) : "";
      return <div className="">{formatted}</div>;
    },
  }),

  columnHelper.accessor("companyName", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Company Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  }),

  columnHelper.accessor("adminName", {
    header: "Admin Name",
  }),

  columnHelper.accessor("businessRegistrationNumber", {
    header: "Business Reg. No",
  }),

  columnHelper.accessor("companyEmail", {
    header: "Email",
  }),

  columnHelper.accessor("phoneNumber", {
    header: "Phone",
  }),

  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue() as string;

      return <StatusBubble status={status} />;
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<Verification, unknown>) => {
      const verification = row.original;

      return (
        <ColumnActionDropdown>
          <DropdownMenuItem>
            <Link href={`/verifications/info/${verification.id}`}>
              View Details
            </Link>
          </DropdownMenuItem>
        </ColumnActionDropdown>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
