import { axiosInstance } from "../axiosInstance";
import { fetchDataProps } from "../types";

export const getAllPeriods = async ({
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

    const url = `/admin/system/periods?${params.toString()}`;
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deletePeriod = async ({ id }: { id: string }) => {
  try {
    const url = `/admin/system/periods/${id}`;
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updatePeriod = async ({
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

    const url = `/admin/system/periods/${id}`;

    const { data } = await axiosInstance.put(url, payload);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postPeriod = async ({
  name,
  status,
}: {
  name: string;
  status: string;
}) => {
  try {
    const url = `/admin/system/periods`;

    const { data } = await axiosInstance.post(url, { name, status });
    return data;
  } catch (error) {
    throw error;
  }
};
