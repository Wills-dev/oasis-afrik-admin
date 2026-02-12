import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import { ConfigData } from "@/lib/types";
import { formatDate } from "@/lib/helpers/dateFormats";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import UnitActionCell from "@/components/molecules/UnitActionCell/UnitActionCell";

const columnHelper = createColumnHelper<ConfigData>();

export const UnitColumn = [
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

  columnHelper.accessor("abbreviation", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Abbreviation
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
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
        <UnitActionCell
          id={country?.id}
          name={country?.name}
          status={country?.status}
          abbreviation={country?.abbreviation || ""}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
