import { useEffect } from "react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { usePostProductState } from "./usePostProductState";
import { useUploadProductImgState } from "./useUploadProductImgState";
import { editProducts } from "../api";
import { ApiErrorResponse } from "@/lib/types";
import { toastOption } from "@/lib/helpers/toast";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { removeCommas } from "@/lib/helpers/removeCommas";
import { useGetProductInfo } from "./useGetProductInfo";

export const useEditProduct = (productId: string) => {
  const { data, isLoading } = useGetProductInfo(productId);

  const {
    product,
    step,
    handleChange,
    nextStep,
    prevStep,
    handleReset,
    handleDropdownChange,
    setProduct,
  } = usePostProductState();
  const {
    selectedImages,
    selectedImageFiles,
    onSelectFile,
    handleImageDelete,
    setSelectedImageFiles,
    setSelectedImages,
    fetchedImages,
    setFetchedImages,
  } = useUploadProductImgState();

  const router = useRouter();

  const queryClient = useQueryClient();

  useEffect(() => {
    if (data && !isLoading) {
      setProduct({
        productName: data?.name,
        category: data?.categoryId,
        quantity: data?.quantity,
        unit: data?.quantityUnitId,
        country: data?.countryId,
        price: data?.price,
        currency: data?.currencyId,
        minOrder: data?.minOrder,
        minOrderUnit: data?.minOrderUnitId,
        minLead: data?.minLeadTime,
        minLeadPeriod: data?.minLeadTimePeriodId,
        maxLead: data?.maxLeadTime,
        maxLeadPeriod: data?.maxLeadTimePeriodId,
        description: data?.description,
      });
      setFetchedImages(data?.images);
    }
  }, [isLoading, data, setProduct, setFetchedImages]);

  const { mutate, isPending } = useMutation({
    mutationFn: editProducts,
    onSuccess: (data, variables) => {
      handleReset();
      setSelectedImageFiles([]);
      setSelectedImages([]);
      toast.success("Products edited successfully.", toastOption);
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      queryClient.invalidateQueries({
        queryKey: ["seller's products"],
      });
      queryClient.invalidateQueries({
        queryKey: ["product info", variables?.productId],
      });
      router.push(`/dashboard/products/info/${productId}`);
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error posting product", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const {
      productName,
      category,
      quantity,
      unit,
      country,
      price,
      currency,
      minLead,
      minLeadPeriod,
      maxLead,
      maxLeadPeriod,
      description,
      minOrder,
      minOrderUnit,
    } = product;
    if (!productName) {
      return toast.error("Product name is required", toastOption);
    } else if (!category) {
      return toast.error("Category is required", toastOption);
    } else if (!quantity) {
      return toast.error("Quantity is required", toastOption);
    } else if (!unit) {
      return toast.error("Quantity unit is required", toastOption);
    } else if (!country) {
      return toast.error("Country is required", toastOption);
    } else if (!price) {
      return toast.error("Price is required", toastOption);
    } else if (!currency) {
      return toast.error("Currency is required", toastOption);
    } else if (!minLead) {
      return toast.error("Min lead time is required", toastOption);
    } else if (!minLeadPeriod) {
      return toast.error("Min lead time period is required", toastOption);
    } else if (!maxLead) {
      return toast.error("Max lead time is required", toastOption);
    } else if (!maxLeadPeriod) {
      return toast.error("Max lead time period is required", toastOption);
    } else if (!minOrder) {
      return toast.error("Min order is required", toastOption);
    } else if (!minOrderUnit) {
      return toast.error("Min order unit is required", toastOption);
    } else if (!description) {
      return toast.error("Description is required", toastOption);
    }
    if (selectedImageFiles?.length < 1 && fetchedImages?.length < 1) {
      return toast.error("Product image is required", toastOption);
    }

    mutate({
      name: productName,
      description,
      price: removeCommas(price),
      minOrder: removeCommas(minOrder),
      quantity: removeCommas(quantity),
      minLeadTime: minLead,
      maxLeadTime: maxLead,
      categoryId: category,
      countryId: country,
      minOrderUnitId: minOrderUnit,
      quantityUnitId: unit,
      minLeadTimePeriodId: minLeadPeriod,
      maxLeadTimePeriodId: maxLeadPeriod,
      images: selectedImageFiles,
      currencyId: currency,
      productId,
    });
  };

  return {
    step,
    isPending,
    nextStep,
    prevStep,
    product,
    handleChange,
    selectedImages,
    onSelectFile,
    handleImageDelete,
    handleDropdownChange,
    handleSubmit,
    fetchedImages,
    isLoading,
  };
};
