import { axiosInstance } from "../axiosInstance";
import { fetchDataProps } from "../types";

export const getAllVerificationRequest = async ({
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

    const url = `/admin/verification/requests?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};
