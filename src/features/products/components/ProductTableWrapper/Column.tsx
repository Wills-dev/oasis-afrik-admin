import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { convertDateFormat, numberWithCommas } from "@/lib/helpers";
import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ProductType, Unit } from "../../types";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import { CurrencyObject } from "@/features/quotes/types";

const columnHelper = createColumnHelper<ProductType>();

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
  columnHelper.accessor("productId", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ProductID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("name", {
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
  columnHelper.accessor("country.name", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Country
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
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
    cell: ({ row }) => {
      const price = row.getValue("price");
      const currency = (row?.original as { currency?: CurrencyObject })
        ?.currency?.symbol;

      return (
        <p className="">
          {currency || "₦"}
          {price ? numberWithCommas(Number(price)) : "0.00"}
        </p>
      );
    },
  }),
  columnHelper.accessor("minOrder", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Minimum Order
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const minOrder = row.getValue("minOrder");
      const minOrderUnit = (row?.original as { minOrderUnit: Unit })
        ?.minOrderUnit;

      return (
        <p className="">
          {minOrder ? numberWithCommas(Number(minOrder)) : "0"}{" "}
          <span className="uppercase">{minOrderUnit?.abbreviation}</span>
        </p>
      );
    },
  }),
  columnHelper.accessor("quantity", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Availability Quantity
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const availableQuantity = row.getValue("quantity");
      const quantityUnit = (row?.original as { quantityUnit: Unit })
        ?.quantityUnit;
      return (
        <p className="">
          {availableQuantity ? numberWithCommas(Number(availableQuantity)) : 0}{" "}
          <span className="uppercase">{quantityUnit?.abbreviation}</span>
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
    cell: ({ row }: CellContext<ProductType, unknown>) => {
      const product = row.original;

      return (
        <>
          <ColumnActionDropdown>
            <DropdownMenuItem>
              <Link href={`/dashboard/products/info/${product?.id}`}>
                View info
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
