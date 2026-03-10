import Link from "next/link";

import { createColumnHelper, CellContext } from "@tanstack/react-table";
import { Product } from "@/features/products/types";
import { formatDate } from "@/lib/helpers/dateFormats";

import ProjectActionCell from "@/features/products/components/ProjectActionCell/ProjectActionCell";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

const columnHelper = createColumnHelper<Product>();

export const Columns = [
  columnHelper.accessor("createdAt", {
    header: "Created",
    cell: ({ getValue }) => {
      const date = getValue();
      return <div>{formatDate(date)}</div>;
    },
  }),

  columnHelper.accessor("name", {
    header: "Product Name",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <Link
          href={`/products/info/${product.id}`}
          className="text-primary hover:underline"
        >
          {product.name}
        </Link>
      );
    },
  }),

  columnHelper.accessor(
    (row) => ({
      quantity: row.quantity,
      unitId: row.quantityUnitId,
    }),
    {
      id: "quantity",
      header: "Quantity",
      cell: ({ getValue }) => {
        const { quantity, unitId } = getValue();

        const unitName = "";
        return (
          <div>
            {Number(quantity).toLocaleString()} {unitName}
          </div>
        );
      },
    },
  ),

  columnHelper.accessor(
    (row) => ({
      price: row.price,
      currencyId: row.currencyId,
    }),
    {
      id: "price",
      header: "Price",
      cell: ({ getValue }) => {
        const { price, currencyId } = getValue();

        const currencySymbol = "";
        return (
          <div>
            {currencySymbol}
            {Number(price).toLocaleString()}
          </div>
        );
      },
    },
  ),

  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue();
      return <StatusBubble status={status} />;
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<Product, unknown>) => {
      const product = row.original;

      return <ProjectActionCell id={product?.id} status={product?.status} />;
    },
    enableSorting: false,
    enableHiding: false,
  },
];
