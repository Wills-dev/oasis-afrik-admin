import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";

export const getOrders = async ({
  currentPage,
  limit,
  search,
  filter,
}: fetchDataProps) => {
  try {
    const url = `/orders?page=${currentPage}&limit=${limit}${
      filter ? `&filter=${filter}` : ""
    }${search ? `&search=${search}` : ""}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
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
