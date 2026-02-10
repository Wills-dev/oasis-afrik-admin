import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";

import { Order } from "../../types";
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

  columnHelper.accessor((row) => row.product, {
    id: "product",
    header: "Product",
    cell: ({ getValue }) => {
      const product = getValue();

      return (
        <Link
          href={`/products/info/${product?.id}`}
          className="text-primary hover:underline font-medium cursor-pointer transition-all duration-300"
        >
          {product.name}
        </Link>
      );
    },
  }),

  columnHelper.accessor((row) => row.buyer, {
    id: "buyer",
    header: "Buyer",
    cell: ({ getValue }) => {
      const buyer = getValue();

      return (
        <Link
          href={`/users/info/${buyer.id}`}
          className="hover:underline cursor-pointer transition-all duration-300"
        >
          {buyer.firstName} {buyer.lastName}
        </Link>
      );
    },
  }),

  columnHelper.accessor((row) => row.seller, {
    id: "seller",
    header: "Seller",
    cell: ({ getValue }) => {
      const seller = getValue();

      return (
        <Link
          href={`/users/info/${seller.id}`}
          className="hover:underline cursor-pointer transition-all duration-300"
        >
          {seller.firstName} {seller.lastName}
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
          status={status === "PENDING_PAYMENT" ? "PENDING" : status}
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
        </ColumnActionDropdown>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
