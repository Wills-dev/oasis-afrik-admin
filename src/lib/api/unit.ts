import { axiosInstance } from "../axiosInstance";
import { fetchDataProps } from "../types";

export const getAllUnits = async ({
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

    const url = `/admin/system/units?${params.toString()}`;
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteUnit = async ({ id }: { id: string }) => {
  try {
    const url = `/admin/system/units/${id}`;
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUnit = async ({
  id,
  name,
  status,
  abbreviation,
}: {
  id: string;
  name: string;
  status: string;
  abbreviation: string;
}) => {
  try {
    const url = `/admin/system/units/${id}`;

    const { data } = await axiosInstance.put(url, {
      abbreviation,
      status,
      name,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const postUnit = async ({
  name,
  status,
  abbreviation,
}: {
  name: string;
  abbreviation: string;
  status: string;
}) => {
  try {
    const url = `/admin/system/units`;

    const { data } = await axiosInstance.post(url, {
      name,
      abbreviation,
      status,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
