import { CurrencyObject } from "@/features/quotes/types";

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

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type ProductType = {
  id: string;
  productId: string;
  name: string;
  description: string;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  price: string;
  quantity: string;
  minOrder: string;
  images: string[];
  mainImage: string;
  minLeadTime: number;
  maxLeadTime: number;
  createdAt: string;
  updatedAt: string;
  category: Category;
  categoryId: string;
  country: Country;
  countryId: string;
  minLeadTimePeriod: LeadTimePeriod;
  minLeadTimePeriodId: string;
  maxLeadTimePeriod: LeadTimePeriod;
  maxLeadTimePeriodId: string;
  minOrderUnit: Unit;
  minOrderUnitId: string;
  quantityUnit: QuantityUnit;
  quantityUnitId: string;
  user: User;
  userId: string;
  currency: CurrencyObject;
};

export type ProductFormData = {
  productName: string;
  category: string;
  quantity: string;
  unit: string;
  country: string;
  price: string;
  currency: string;
  minOrder: string;
  minLead: string;
  minLeadPeriod: string;
  maxLead: string;
  maxLeadPeriod: string;
  description: string;
  minOrderUnit: string;
};
