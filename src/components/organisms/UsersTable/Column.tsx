import { createColumnHelper } from "@tanstack/react-table";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

import { UserTable } from "@/lib/types";
import { formatDate } from "@/lib/helpers/dateFormats";

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
    header: "Name",
    cell: ({ getValue }) => <div>{getValue()}</div>,
  }),

  columnHelper.accessor("email", {
    header: "Email",
  }),

  columnHelper.accessor("role", {
    header: "Role",
  }),

  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ getValue }) => <StatusBubble status={getValue()} />,
  }),

  columnHelper.accessor("isCompanyVerified", {
    header: "Company Verified",
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
];
