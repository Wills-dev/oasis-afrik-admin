import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";

export const getAllInsights = async ({
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
    if (status) params.set("isPublished", status.toString());

    const url = `/admin/insights?${params.toString()}`;
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const postInsight = async ({
  title,
  content,
  isPublished,
  file,
}: {
  title: string;
  content: string;
  isPublished: boolean;
  file: File | null;
}) => {
  try {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("isPublished", isPublished.toString());
    if (file) {
      formData.append("image", file);
    }

    const url = `/admin/insights`;
    const { data } = await axiosInstance.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteInsight = async ({ id }: { id: string }) => {
  try {
    const url = `/admin/insights/${id}`;
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getInsightInfo = async ({ id }: { id: string }) => {
  try {
    const url = `/admin/insights/${id}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
