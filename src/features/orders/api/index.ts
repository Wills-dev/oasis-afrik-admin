import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";
import { format } from "date-fns";

export const getAllOrders = async ({
  currentPage,
  limit,
  search,
  status,
  selectedDateFilterValue,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (status) params.set("status", status);
    if (selectedDateFilterValue) {
      params.set("period", selectedDateFilterValue.label);
      if (selectedDateFilterValue.label === "custom") {
        params.set(
          "startDate",
          format(selectedDateFilterValue.dateRange.start, "yyyy-MM-dd"),
        );
        params.set(
          "endDate",
          format(selectedDateFilterValue.dateRange.end, "yyyy-MM-dd"),
        );
      }
    }

    const url = `/admin/orders?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getOrderInfo = async ({ orderId }: { orderId: string }) => {
  try {
    const url = `/admin/orders/${orderId}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const updateOrderInfo = async ({
  orderId,
  status,
  reason,
}: {
  orderId: string;
  status: string;
  reason: string;
}) => {
  try {
    const url = `/orders/${orderId}/status`;
    const { data } = await axiosInstance.patch(url, { status, reason });
    return data?.data;
  } catch (error) {
    throw error;
  }
};
