import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteProduct } from "../api";
import { toastOption } from "@/lib/helpers/toast";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { useState } from "react";

export const useDeleteProduct = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const queryClient = useQueryClient();

  const onCancel = () => {
    setIsOpen(false);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data, variables) => {
      toast.success("Product deleted successfully.", toastOption);
      onCancel();
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      queryClient.invalidateQueries({
        queryKey: ["seller's products"],
      });
      queryClient.invalidateQueries({
        queryKey: ["product info", variables?.productId],
      });
      router.push("/dashboard/products");
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error deleting product", error);
      promiseErrorFunction(error);
    },
  });

  const handleDelete = (productId: string) => {
    mutate({ productId });
  };

  return {
    isOpen,
    setIsOpen,
    onCancel,
    handleDelete,
    isDeleting: isPending,
  };
};
