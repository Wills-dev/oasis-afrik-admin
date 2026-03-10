import { Product } from "@/features/products/types";
import { Quote } from "@/features/quotes/types";
import { UserSummary } from "@/lib/types";

export type OrderStatus =
  | "PENDING_PAYMENT"
  | "AWAITING_PAYMENT_VERIFICATION"
  | "PAID"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "RECEIVED"
  | "SETTLED"
  | "CANCELLED";

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
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;

  buyer: UserSummary;
  seller: UserSummary;
  product: Product;
  quote: Quote;
  cancellationReason?: string | null;
};
