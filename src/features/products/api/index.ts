import { ProductData } from "@/features/auth/types";
import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";

export const newProducts = async ({
  name,
  description,
  price,
  minOrder,
  quantity,
  minLeadTime,
  maxLeadTime,
  categoryId,
  countryId,
  minOrderUnitId,
  quantityUnitId,
  minLeadTimePeriodId,
  maxLeadTimePeriodId,
  images,
  currencyId,
}: ProductData) => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("minOrder", minOrder);
    formData.append("quantity", quantity);
    formData.append("currencyId", currencyId);
    formData.append("minLeadTime", minLeadTime);
    formData.append("maxLeadTime", maxLeadTime);
    formData.append("categoryId", categoryId);
    formData.append("countryId", countryId);
    formData.append("minOrderUnitId", minOrderUnitId);
    formData.append("quantityUnitId", quantityUnitId);
    formData.append("minLeadTimePeriodId", minLeadTimePeriodId);
    formData.append("maxLeadTimePeriodId", maxLeadTimePeriodId);

    for (let index = 0; index < (images?.length ?? 0); index++) {
      const file = images[index];
      formData.append("images", file);
    }

    const { data } = await axiosInstance.post(`/products`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProducts = async ({
  currentPage,
  limit,
  search,
  filter,
}: fetchDataProps) => {
  try {
    const url = `/products?page=${currentPage}&limit=${limit}${
      filter ? `&filter=${filter}` : ""
    }${search ? `&search=${search}` : ""}`;

    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const editProducts = async ({
  name,
  description,
  price,
  minOrder,
  quantity,
  minLeadTime,
  maxLeadTime,
  categoryId,
  countryId,
  minOrderUnitId,
  quantityUnitId,
  minLeadTimePeriodId,
  maxLeadTimePeriodId,
  images,
  productId,
  currencyId,
}: ProductData) => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("minOrder", minOrder);
    formData.append("quantity", quantity);
    formData.append("currencyId", currencyId);
    formData.append("minLeadTime", minLeadTime);
    formData.append("maxLeadTime", maxLeadTime);
    formData.append("categoryId", categoryId);
    formData.append("countryId", countryId);
    formData.append("minOrderUnitId", minOrderUnitId);
    formData.append("quantityUnitId", quantityUnitId);
    formData.append("minLeadTimePeriodId", minLeadTimePeriodId);
    formData.append("maxLeadTimePeriodId", maxLeadTimePeriodId);

    for (let index = 0; index < (images?.length ?? 0); index++) {
      const file = images[index];
      formData.append("images", file);
    }

    const { data } = await axiosInstance.put(
      `/products/${productId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserProducts = async ({
  currentPage,
  limit,
  search,
  filter,
}: fetchDataProps) => {
  try {
    const url = `/products/user-products?page=${currentPage}&limit=${limit}${
      filter ? `&filter=${filter}` : ""
    }${search ? `&search=${search}` : ""}`;

    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductInfo = async ({ productId }: { productId: string }) => {
  try {
    const url = `/products/${productId}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async ({ productId }: { productId: string }) => {
  try {
    const url = `/products/${productId}`;
    const { data } = await axiosInstance.delete(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getProductCategories = async () => {
  try {
    const url = `/products/categories`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getProductCountries = async () => {
  try {
    const url = `/products/countries`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getProductPeriods = async () => {
  try {
    const url = `/products/periods`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getProductUnits = async () => {
  try {
    const url = `/products/units`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getCurrencies = async () => {
  try {
    const url = `/products/currencies`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
