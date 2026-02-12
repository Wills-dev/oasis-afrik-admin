import { axiosInstance } from "../axiosInstance";
import { fetchDataProps } from "../types";

export const getAllCurrencies = async ({
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

    const url = `/admin/system/currencies?${params.toString()}`;
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteCurrency = async ({ id }: { id: string }) => {
  try {
    const url = `/admin/system/currencies/${id}`;
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateCurrency = async ({
  id,
  name,
  status,
  code,
  symbol,
  rateToNgn,
}: {
  id: string;
  name: string;
  status: string;
  code: string;
  symbol: string;
  rateToNgn: string;
}) => {
  try {
    const url = `/admin/system/currencies/${id}`;

    const { data } = await axiosInstance.put(url, {
      code,
      status,
      name,
      symbol,
      rateToNgn,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const postCurrency = async ({
  name,
  status,
  code,
  symbol,
  rateToNgn,
}: {
  name: string;
  code: string;
  status: string;
  symbol: string;
  rateToNgn: string;
}) => {
  try {
    const url = `/admin/system/currencies`;

    const { data } = await axiosInstance.post(url, {
      name,
      code,
      status,
      symbol,
      rateToNgn,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
