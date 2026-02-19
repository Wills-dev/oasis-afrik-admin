import { axiosInstance } from "../axiosInstance";

export const getAnalytics = async ({ period }: { period: string }) => {
  try {
    const url = `/admin/dashboard${period ? `?period=${period}` : ""}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
