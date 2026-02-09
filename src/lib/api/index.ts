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

export const getVerificationInfo = async ({ id }: { id: string }) => {
  try {
    const url = `/admin/verification/${id}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const approveVerification = async ({ id }: { id: string }) => {
  try {
    const url = `/admin/verification/${id}/approve`;
    const { data } = await axiosInstance.post(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const rejectVerification = async ({
  id,
  rejectionReason,
}: {
  id: string;
  rejectionReason: string;
}) => {
  try {
    const url = `/admin/verification/${id}/reject`;
    const { data } = await axiosInstance.post(url, { rejectionReason });
    return data;
  } catch (error) {
    throw error;
  }
};
