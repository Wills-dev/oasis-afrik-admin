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

// export type Product = {
//   id: string;
//   productId: string;
//   name: string;
//   description: string;
//   price: string;
//   quantity: string;
//   quantityUnitId: string;
//   minOrder: string;
//   minOrderUnitId: string;
//   minLeadTime: number;
//   maxLeadTime: number;
//   minLeadTimePeriodId: string;
//   maxLeadTimePeriodId: string;
//   status: string;
//   mainImage: string;
//   images: string[];
//   createdAt: string;
//   updatedAt: string;

//   currencyId: string | null;
//   categoryId: string;
//   countryId: string;
//   userId: string;

//   user: UserSummary;
//   category: CategorySummary;
// };

export interface Product {
  id: string;
  productId: string;
  name: string;
  description: string;
  price: string;
  minOrder: string;
  quantity: string;
  minLeadTime: number;
  maxLeadTime: number;
  mainImage: string;
  images: string[];
  status: string;
  userId: string;
  quantityUnitId: string;
  categoryId: string;
  countryId: string;
  currencyId: string;
  createdAt: string;
  updatedAt: string;
  category: {
    id: string;
    name: string;
    description: string | null;
    status: string;
  };
  country: {
    id: string;
    name: string;
    code: string;
    status: string;
  };
  currency: {
    id: string;
    code: string;
    name: string;
    symbol: string;
    rateToNgn: string;
    status: string;
  };
  minOrderUnit: {
    id: string;
    name: string;
    abbreviation: string;
    status: string;
  };
  quantityUnit: {
    id: string;
    name: string;
    abbreviation: string;
    status: string;
  };
  minLeadTimePeriod: {
    id: string;
    name: string;
    status: string;
  };
  maxLeadTimePeriod: {
    id: string;
    name: string;
    status: string;
  };
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
  };
}
