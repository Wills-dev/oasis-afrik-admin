import { useState } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { ApiErrorResponse } from "@/lib/types";
import { deleteInsight } from "../api";

export const useDeleteInsight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteInsight,
    onSuccess: (data, variables) => {
      toast.success("Insight deleted successfully.");
      setIsOpen(false);
      queryClient.invalidateQueries({
        queryKey: ["all insights"],
      });

      queryClient.invalidateQueries({
        queryKey: ["insight info", variables?.id],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error creating admin", error);
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
