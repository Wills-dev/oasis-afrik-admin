import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import InsightsActionCell from "@/components/molecules/InsightsActionCell/InsightsActionCell";

import { Insights } from "@/lib/types";
import { formatDate } from "@/lib/helpers/dateFormats";

const columnHelper = createColumnHelper<Insights>();

export const Column = [
  columnHelper.accessor("createdAt", {
    header: "Posted",
    cell: ({ row }) => {
      const date: string = row.getValue("createdAt");
      const formatted = date ? formatDate(date) : "";
      return <div className="">{formatted}</div>;
    },
  }),

  columnHelper.accessor("title", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Insight Title
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  }),
  columnHelper.accessor((row) => row.author, {
    id: "author",
    header: "Author",
    cell: ({ getValue }) => {
      const author = getValue();
      const fullName = `${author.firstName} ${author.lastName}`;
      return <div>{fullName}</div>;
    },
  }),
  columnHelper.accessor("isPublished", {
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue() as boolean;

      const formattedStatus = status === true ? "PUBLISHED" : "DRAFT";

      return <StatusBubble status={formattedStatus} />;
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<Insights, unknown>) => {
      const insight = row.original;

      return <InsightsActionCell id={insight?.id} />;
    },
    enableSorting: false,
    enableHiding: false,
  },
];
