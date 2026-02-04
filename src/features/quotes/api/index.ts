import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";
import { QuotePayloadType } from "../types";
import { removeCommas } from "@/lib/helpers/removeCommas";

export const getQuotes = async ({
  currentPage,
  limit,
  search,
  filter,
  tab,
}: fetchDataProps) => {
  try {
    const url = `/quotes?type=${tab || "outgoing"}&page=${currentPage}&limit=${limit}${
      filter ? `&filter=${filter}` : ""
    }${search ? `&search=${search}` : ""}`;

    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getQuoteInfo = async ({ quoteId }: { quoteId: string }) => {
  try {
    const url = `/quotes/${quoteId}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const requestQuote = async ({
  productId,
  amount,
  currency,
  quantity,
  quantityUnitId,
  address,
  minLeadTime,
  minLeadTimePeriodId,
  maxLeadTime,
  maxLeadTimePeriodId,
  description,
}: QuotePayloadType) => {
  try {
    const payload: {
      productId: string;
      amount: string;
      currency: string;
      quantity: number;
      quantityUnitId: string;
      address: string;
      minLeadTime?: number;
      minLeadTimePeriodId?: string;
      maxLeadTime?: number;
      maxLeadTimePeriodId?: string;
      description?: string;
    } = {
      productId,
      amount: removeCommas(amount),
      currency,
      quantity: Number(removeCommas(quantity)),
      quantityUnitId,
      address,
    };
    if (minLeadTime) payload.minLeadTime = Number(minLeadTime);
    if (minLeadTimePeriodId) payload.minLeadTimePeriodId = minLeadTimePeriodId;
    if (maxLeadTime) payload.maxLeadTime = Number(maxLeadTime);
    if (maxLeadTimePeriodId) payload.maxLeadTimePeriodId = maxLeadTimePeriodId;
    if (description) payload.description = description;
    const { data } = await axiosInstance.post(`/quotes/request`, payload);

    return data;
  } catch (error) {
    throw error;
  }
};

export const acceptQuote = async ({ quoteId }: { quoteId: string }) => {
  try {
    const url = `/quotes/${quoteId}/accept`;
    const { data } = await axiosInstance.put(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const rejectQuote = async ({ quoteId }: { quoteId: string }) => {
  try {
    const url = `/quotes/${quoteId}/reject`;
    const { data } = await axiosInstance.put(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const negotiateQuote = async ({
  quoteId,
  message,
  quantity,
  amount,
  address,
  quantityUnitId,
}: {
  quoteId: string;
  message: string;
  quantity?: string;
  amount?: string;
  address?: string;
  quantityUnitId?: string;
}) => {
  try {
    const payload: {
      message: string;
      quantity?: number;
      amount?: number;
      address?: string;
      quantityUnitId?: string;
    } = { message };
    if (quantity) payload.quantity = Number(removeCommas(quantity));
    if (quantityUnitId) payload.quantityUnitId = quantityUnitId;
    if (amount) payload.amount = Number(removeCommas(amount));
    if (address) payload.address = address;

    const url = `/quotes/${quoteId}/notes`;
    const { data } = await axiosInstance.post(url, payload);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
