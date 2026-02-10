import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";

export const getAllOrders = async ({
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

    const url = `/admin/orders?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getOrderInfo = async ({ orderId }: { orderId: string }) => {
  try {
    const url = `/orders/${orderId}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
