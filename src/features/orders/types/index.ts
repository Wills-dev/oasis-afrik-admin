import { UserSummary } from "@/lib/types";

export type ProductSummary = {
  id: string;
  name: string;
  productId: string;
};

export type Order = {
  id: string;
  address: string;
  amount: string;
  amountChargedNgn: string | null;
  buyerId: string;
  sellerId: string;
  productId: string;
  quantity: string;
  quantityUnitId: string;
  quoteId: string;
  currency: string;
  currencyId: string | null;
  paystackReference: string | null;
  paidAt: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;

  buyer: UserSummary;
  seller: UserSummary;
  product: ProductSummary;
};
