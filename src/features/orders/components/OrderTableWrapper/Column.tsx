import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Order } from "../../types";
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
  columnHelper.accessor("id", {
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
  columnHelper.accessor("quantity", {
    header: "Quantity",
    cell: ({ row }) => {
      const quantity: string = row.getValue("quantity");
      const unit = (row?.original as { unit?: string })?.unit;

      return (
        <p className="">
          {quantity}
          {unit}
        </p>
      );
    },
  }),
  columnHelper.accessor("price", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
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
  columnHelper.accessor("minLead", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Min Lead Time
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const minLead: string = row.getValue("minLead");
      const minLeadPeriod = (row?.original as { minLeadPeriod?: string })
        ?.minLeadPeriod;

      return (
        <p className="">
          {minLead}
          {minLeadPeriod}
        </p>
      );
    },
  }),
  columnHelper.accessor("maxLead", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Max Lead Time
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const maxLead: string = row.getValue("maxLead");
      const maxLeadPeriod = (row?.original as { maxLeadPeriod?: string })
        ?.maxLeadPeriod;

      return (
        <p className="">
          {maxLead}
          {maxLeadPeriod}
        </p>
      );
    },
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
    cell: ({ row }: CellContext<Order, unknown>) => {
      const order = row.original;

      return (
        <>
          <ColumnActionDropdown>
            <DropdownMenuItem>
              <Link href={`/dashboard/orders/info/${order?.id}`}>
                View order info
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`/dashboard/products/info/${order?.productId}`}>
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
