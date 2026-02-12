import { axiosInstance } from "../axiosInstance";
import { fetchDataProps } from "../types";

export const getAllCountries = async ({
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

    const url = `/admin/system/countries?${params.toString()}`;
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteCountry = async ({ id }: { id: string }) => {
  try {
    const url = `/admin/system/countries/${id}`;
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateCountry = async ({
  id,
  name,
  status,
  code,
}: {
  id: string;
  name: string;
  status: string;
  code: string;
}) => {
  try {
    const url = `/admin/system/countries/${id}`;

    const { data } = await axiosInstance.put(url, { code, status, name });
    return data;
  } catch (error) {
    throw error;
  }
};

export const postCountry = async ({
  name,
  status,
  code,
}: {
  name: string;
  code: string;
  status: string;
}) => {
  try {
    const url = `/admin/system/countries`;

    const { data } = await axiosInstance.post(url, { name, code, status });
    return data;
  } catch (error) {
    throw error;
  }
};
