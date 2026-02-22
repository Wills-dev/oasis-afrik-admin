import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";
import { format } from "date-fns";

export const getProducts = async ({
  currentPage,
  limit,
  search,
  status,
  selectedDateFilterValue,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (status) params.set("status", status);
    if (selectedDateFilterValue) {
      params.set("period", selectedDateFilterValue.label);
      if (selectedDateFilterValue.label === "custom") {
        params.set(
          "startDate",
          format(selectedDateFilterValue.dateRange.start, "yyyy-MM-dd"),
        );
        params.set(
          "endDate",
          format(selectedDateFilterValue.dateRange.end, "yyyy-MM-dd"),
        );
      }
    }

    const url = `/admin/products?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductInfo = async ({ productId }: { productId: string }) => {
  try {
    const url = `/products/${productId}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const approveProduct = async ({ id }: { id: string }) => {
  try {
    const url = `/admin/products/${id}/approve`;
    const { data } = await axiosInstance.post(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const rejectProduct = async ({
  id,
  rejectionReason,
}: {
  id: string;
  rejectionReason: string;
}) => {
  try {
    const url = `/admin/products/${id}/reject`;
    const { data } = await axiosInstance.post(url, { rejectionReason });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductCategories = async () => {
  try {
    const url = `/products/categories`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getProductCountries = async () => {
  try {
    const url = `/products/countries`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getProductPeriods = async () => {
  try {
    const url = `/products/periods`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getProductUnits = async () => {
  try {
    const url = `/products/units`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getCurrencies = async () => {
  try {
    const url = `/products/currencies`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
