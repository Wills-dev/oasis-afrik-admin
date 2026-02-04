import { ColumnDef } from "@tanstack/react-table";

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
}

export interface optionsType {
  label: string;
  value: number | string;
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
