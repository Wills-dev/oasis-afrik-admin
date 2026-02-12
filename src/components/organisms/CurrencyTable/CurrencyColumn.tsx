import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import { ConfigData } from "@/lib/types";
import { formatDate } from "@/lib/helpers/dateFormats";
import { numberWithCommas } from "@/lib/helpers";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import CurrencyActionCell from "@/components/molecules/CurrencyActionCell/CurrencyActionCell";

const columnHelper = createColumnHelper<ConfigData>();

export const CurrencyColumn = [
  columnHelper.accessor("createdAt", {
    header: "Posted",
    cell: ({ row }) => {
      const date: string = row.getValue("createdAt");
      const formatted = date ? formatDate(date) : "";
      return <div className="">{formatted}</div>;
    },
  }),

  columnHelper.accessor("name", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  }),

  columnHelper.accessor("code", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Code
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  }),
  columnHelper.accessor("symbol", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Symbol
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  }),
  columnHelper.accessor("rateToNgn", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Rate to Naira
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const rate = row.getValue("rateToNgn");

      const numericAmount = numberWithCommas(Number(rate)) || 0;

      return <div>{numericAmount}</div>;
    },
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
    cell: ({ row }: CellContext<ConfigData, unknown>) => {
      const country = row.original;

      return (
        <CurrencyActionCell
          id={country?.id}
          name={country?.name}
          status={country?.status}
          code={country?.code || ""}
          symbol={country?.symbol || ""}
          rateToNgn={country?.rateToNgn || ""}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
