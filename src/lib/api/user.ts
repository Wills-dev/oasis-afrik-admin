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

export const updateUserStatus = async ({
  id,
  status,
}: {
  id: string;
  status: string;
}) => {
  try {
    const url = `/admin/users/${id}/status`;
    const { data } = await axiosInstance.patch(url, { status });
    return data;
  } catch (error) {
    throw error;
  }
};

export const createAdmin = async ({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  try {
    const url = `/admin/users/admins`;
    const { data } = await axiosInstance.post(url, {
      firstName,
      lastName,
      email,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
