import { User } from "@/features/auth/types";
import { ProductType } from "@/features/products/types";

export type Order = {
  id: string;
  createdAt: string;
  productName: string;
  productId: string;
  quantity: number;
  price: string;
  amount: string;
  status:
    | "pending"
    | "processing"
    | "declined"
    | "in_transit"
    | "delivered"
    | "received";
  minLead: number;
  maxLead: number;
  minLeadPeriod: "days" | "weeks" | "months";
  maxLeadPeriod: "days" | "weeks" | "months";
};

export type OrderInfo = {
  id: string;
  createdAt: string;
  status:
    | "pending"
    | "processing"
    | "declined"
    | "in_transit"
    | "delivered"
    | "received";
  product: ProductType;
  seller: User;
  buyer: User;
};
