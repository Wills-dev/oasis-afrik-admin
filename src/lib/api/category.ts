import { axiosInstance } from "../axiosInstance";
import { fetchDataProps } from "../types";

export const getAllCategories = async ({
  currentPage,
  limit,
  search,
  status,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (status) params.set("status", status);

    const url = `/admin/system/categories?${params.toString()}`;
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async ({ id }: { id: string }) => {
  try {
    const url = `/admin/system/categories/${id}`;
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async ({
  id,
  name,
  status,
}: {
  id: string;
  name: string;
  status: string;
}) => {
  try {
    const payload: {
      name: string;
      status: string;
    } = { name, status };

    const url = `/admin/system/categories/${id}`;

    const { data } = await axiosInstance.put(url, payload);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postCategory = async ({
  name,
  status,
}: {
  name: string;
  status: string;
}) => {
  try {
    const payload: {
      name: string;
      status: string;
    } = { name, status };

    const url = `/admin/system/categories`;

    const { data } = await axiosInstance.post(url, payload);
    return data;
  } catch (error) {
    throw error;
  }
};
