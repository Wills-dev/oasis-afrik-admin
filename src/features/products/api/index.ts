import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";

export const getProducts = async ({
  currentPage,
  limit,
  search,
  status,
}: fetchDataProps) => {
  try {
    const url = `/admin/products?page=${currentPage}&limit=${limit}${
      status ? `&status=${status}` : ""
    }${search ? `&search=${search}` : ""}`;

    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserProducts = async ({
  currentPage,
  limit,
  search,
  filter,
}: fetchDataProps) => {
  try {
    const url = `/products/user-products?page=${currentPage}&limit=${limit}${
      filter ? `&filter=${filter}` : ""
    }${search ? `&search=${search}` : ""}`;

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
