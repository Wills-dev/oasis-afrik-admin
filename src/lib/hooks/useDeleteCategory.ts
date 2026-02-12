import { useState } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";
import { deleteCategory } from "../api/category";

export const useDeleteCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      toast.success("Category deleted successfully.");
      setIsOpen(false);
      queryClient.invalidateQueries({
        queryKey: ["all categories"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error deleting category", error);
      promiseErrorFunction(error);
    },
  });

  const handleDelete = (id: string) => {
    mutate({ id });
  };

  return {
    isOpen,
    setIsOpen,
    isPending,
    handleDelete,
  };
};
