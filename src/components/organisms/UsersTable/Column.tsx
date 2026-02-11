import { CellContext, createColumnHelper } from "@tanstack/react-table";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

import { UserTable } from "@/lib/types";
import { formatDate } from "@/lib/helpers/dateFormats";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import UsersActionCell from "@/components/molecules/UsersActionCell/UsersActionCell";

const columnHelper = createColumnHelper<UserTable>();

export const UserColumns = [
  columnHelper.accessor("createdAt", {
    header: "Joined",
    cell: ({ getValue }) => {
      const date = getValue();
      return <div>{formatDate(date)}</div>;
    },
  }),

  columnHelper.accessor((row) => `${row.firstName} ${row.lastName}`, {
    id: "fullName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Full name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => <div>{getValue()}</div>,
  }),

  columnHelper.accessor("email", {
    header: "Email",
  }),

  columnHelper.accessor("role", {
    header: "Role",
  }),

  columnHelper.accessor("status", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => <StatusBubble status={getValue()} />,
  }),

  columnHelper.accessor("isCompanyVerified", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Company verified
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => (getValue() ? "Yes" : "No"),
  }),

  columnHelper.accessor((row) => row._count.products, {
    id: "products",
    header: "Products",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  }),

  columnHelper.accessor((row) => row._count.buyerOrders, {
    id: "buyerOrders",
    header: "Buyer Orders",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  }),

  columnHelper.accessor((row) => row._count.sellerOrders, {
    id: "sellerOrders",
    header: "Seller Orders",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  }),
  {
    id: "actions",
    cell: ({ row }: CellContext<UserTable, unknown>) => {
      const insight = row.original;

      return <UsersActionCell status={insight?.status} id={insight?.id} />;
    },
    enableSorting: false,
    enableHiding: false,
  },
];
