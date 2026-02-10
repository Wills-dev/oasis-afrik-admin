import { UserSummary } from "@/lib/types";

export type ProductImageType = {
  id: string;
  imgUrl: string;
};

export type Timestamped = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type Category = Timestamped & {
  name: string;
  description: string | null;
};

export type Country = Timestamped & {
  name: string;
  code: string;
};

export type LeadTimePeriod = Timestamped & {
  name: string;
};

export type Unit = Timestamped & {
  name: string;
  abbreviation: string;
};

export type QuantityUnit = Timestamped & {
  name: string;
  abbreviation: string;
};

export type CategorySummary = {
  id: string;
  name: string;
};

export interface ProductStatus {
  status: "DRAFT" | "ACTIVE" | "INACTIVE" | "SOLD_OUT" | "DECLINED";
}

export type Product = {
  id: string;
  productId: string;
  name: string;
  description: string;
  price: string;
  quantity: string;
  quantityUnitId: string;
  minOrder: string;
  minOrderUnitId: string;
  minLeadTime: number;
  maxLeadTime: number;
  minLeadTimePeriodId: string;
  maxLeadTimePeriodId: string;
  status: string;
  mainImage: string;
  images: string[];
  createdAt: string;
  updatedAt: string;

  currencyId: string | null;
  categoryId: string;
  countryId: string;
  userId: string;

  user: UserSummary;
  category: CategorySummary;
};
