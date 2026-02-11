import { axiosInstance } from "../axiosInstance";
import { fetchDataProps } from "../types";

export const getAllUsers = async ({
  currentPage,
  limit,
  search,
  status,
  role,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (status) params.set("status", status);
    if (role) params.set("role", role);

    const url = `/admin/users?${params.toString()}`;
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};
