import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Payment } from "../../types";
import { convertDateFormat } from "@/lib/helpers";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

const columnHelper = createColumnHelper();

export const Column = [
  columnHelper.accessor("createdAt", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date: Date = row.getValue("createdAt");
      const formatted = date ? convertDateFormat(date) : "";
      return <div className="">{formatted}</div>;
    },
  }),
  columnHelper.accessor("orderId", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          OrderID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("productName", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("paymentType", {
    header: "Payment Type",
    cell: ({ row }) => {
      const paymentType: string = row.getValue("paymentType");
      return (
        <p
          className={`uppercase ${
            paymentType === "credit" ? "text-green-500" : "text-red-500"
          }`}
        >
          {paymentType}
        </p>
      );
    },
  }),
  columnHelper.accessor("transactionType", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Transaction Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("amount", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    // cell: ({ row }) => {
    //   const price = row.getValue("amount");
    //   const currency = (row?.original as { currency?: string })?.currency;

    //   return (
    //     <p className="">
    //       {currency && getCurrencySign(currency)}
    //       {price ? numberWithCommas(Number(price)) : "0.00"}
    //     </p>
    //   );
    // },
  }),
  columnHelper.accessor("status", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return <StatusBubble status={status} />;
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<Payment, unknown>) => {
      const payment = row.original;

      return (
        <>
          <ColumnActionDropdown>
            <DropdownMenuItem>
              <Link href={`/dashboard/orders/info/${payment?.orderId}`}>
                View order info
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`/dashboard/products/info/${payment?.productId}`}>
                View product info
              </Link>
            </DropdownMenuItem>
          </ColumnActionDropdown>
        </>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
