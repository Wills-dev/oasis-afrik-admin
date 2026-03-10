import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";

import { Order } from "@/features/orders/types";
import { formatDate } from "@/lib/helpers/dateFormats";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { getCurrencySign } from "@/lib/helpers/getCurrencySign";

const columnHelper = createColumnHelper<Order>();

export const Columns = [
  columnHelper.accessor("createdAt", {
    header: "Created",
    cell: ({ row }) => {
      const date: string = row.getValue("createdAt");
      const formatted = date ? formatDate(date) : "";
      return <div>{formatted}</div>;
    },
  }),

  columnHelper.accessor("productId", {
    header: "Product ID",
    cell: ({ row }: CellContext<Order, unknown>) => {
      const order = row.original;

      return (
        <Link
          href={`/products/info/${order?.productId}`}
          className="text-primary hover:underline font-medium cursor-pointer transition-all duration-300"
        >
          {order?.productId}
        </Link>
      );
    },
  }),

  columnHelper.accessor("quantity", {
    header: "Quantity",
  }),

  columnHelper.accessor(
    (row) => ({
      amount: row.amount,
      currency: row.currency,
    }),
    {
      id: "amount",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ getValue }) => {
        const { amount, currency } = getValue();

        const numericAmount = Number(amount);

        return (
          <div>
            {currency && getCurrencySign(currency)}
            {numericAmount.toLocaleString()}
          </div>
        );
      },
    },
  ),

  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue() as Order["status"];
      return (
        <StatusBubble
          status={
            status === "PENDING_PAYMENT"
              ? "PENDING"
              : status === "AWAITING_PAYMENT_VERIFICATION"
                ? "PAYMENT_REVIEW"
                : status
          }
        />
      );
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<Order, unknown>) => {
      const order = row.original;
      return (
        <ColumnActionDropdown>
          <DropdownMenuItem>
            <Link href={`/orders/info/${order?.id}`}>View Details</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/products/info/${order?.productId}`}>
              View product
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/users/info/${order?.sellerId}`}>View seller</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/users/info/${order?.buyerId}`}>View buyer</Link>
          </DropdownMenuItem>
        </ColumnActionDropdown>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
