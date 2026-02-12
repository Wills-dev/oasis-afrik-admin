import { ColumnDef } from "@tanstack/react-table";
import { FormEvent } from "react";

export interface ApiErrorResponse {
  response?: {
    data?: {
      message?: string;
      detail?: string;
      errors?: {
        message: string;
      }[];
    };
  };
}

export interface fetchDataProps {
  currentPage: number;
  limit: number;
  status?: string;
  search: string | null;
  filter?: string;
  categoryId?: string;
  countryId?: string;
  dateRange?: string;
  tab?: string;
  role?: "ADMIN" | "USER";
}

export interface TableWrapperProps<TData = unknown> {
  columns: ColumnDef<TData>[];
  data: TData[];
  totalPages: number;
  currentPage: number;
  prevPage: () => void;
  nextPage: (totalPages: number) => void;
  goToLastPage: (totalPages: number) => void;
  goToFirstPage: () => void;
  isFirstPage: () => boolean;
  isLastPage: (totalPages: number) => boolean;
  limit: number;
  setLimit: (limit: number) => void;
  search?: string | number;
  handleChange?: (search: string) => void;
  handleClear?: () => void;
  onSubmit?: (e: FormEvent) => void;
  setCurrentPage?: (page: number) => void;
}

export interface optionsType {
  label: string;
  value: number | string;
}

export interface HistoryProps<TData = unknown> {
  isLoading: boolean;
  data: TData[];
  totalPages: number;
  currentPage: number;
  prevPage: () => void;
  nextPage: (totalPages: number) => void;
  goToLastPage: (totalPages: number) => void;
  goToFirstPage: () => void;
  isFirstPage: () => boolean;
  isLastPage: (totalPages: number) => boolean;
  limit: number;
  setLimit: (limit: number) => void;
  search?: string | number;
  handleChange?: (search: string) => void;
  handleClear?: () => void;
  onSubmit?: (e: FormEvent) => void;
  setCurrentPage: (page: number) => void;
  isAdmin?: boolean;
}

export interface Testimonial {
  id: number;
  type: "Buyer Testimonial" | "Producer Testimonial" | "Investor Testimonial";
  content: string;
  author: {
    name: string;
    company: string;
    initials: string;
  };
  highlighted?: boolean;
}

export interface Verification {
  id: string;
  adminName: string;
  businessRegistrationNumber: string;
  companyName: string;
  companyEmail: string;
  companyAddress: string;
  phoneNumber: string;
  cacDocumentUrl: string;
  utilityDocumentUrl: string;
  validIdUrl: string;
  status: string;
  rejectionReason: string | null;
  reviewedAt: string | null;
  reviewedBy: string | null;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export interface Insights {
  id: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  image?: string;
  author: {
    firstName: string;
    lastName: string;
  };
}

export interface DateOptions {
  year: "numeric" | "2-digit" | undefined;
  month: "numeric" | "2-digit" | "short" | "long" | "narrow" | undefined;
  day: "numeric" | "2-digit" | undefined;
  hour: "numeric" | "2-digit" | undefined;
  minute: "numeric" | "2-digit" | undefined;
  hour12: boolean;
}

export type UserSummary = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type UserTable = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "USER" | "ADMIN" | string;
  status: string;
  isCompanyVerified: boolean;
  createdAt: string;
  _count: {
    products: number;
    buyerOrders: number;
    sellerOrders: number;
  };
};

export interface CreateAdminData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface TabType {
  value: string;
  label: string;
  content: React.ReactElement;
}

export interface ConfigData {
  createdAt: string;
  name: string;
  status: string;
  id: string;
  code?: string;
  description?: null | string;
  rateToNgn: string;
  symbol: string;
}
