import { useState } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ApiErrorResponse } from "@/lib/types";
import { acceptQuote } from "../api";
import { toastOption } from "@/lib/helpers/toast";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";

export const useAcceptQuote = () => {
  const [isOpen, setIsOpen] = useState(false);

  const queryClient = useQueryClient();

  const onCancel = () => {
    setIsOpen(false);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: acceptQuote,
    onSuccess: (data, variable) => {
      toast.success("Quote successful accepted", toastOption);
      onCancel();
      queryClient.invalidateQueries({
        queryKey: ["quotes"],
      });
      queryClient.invalidateQueries({
        queryKey: ["quote info", variable?.quoteId],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error accepting quote", error);
      promiseErrorFunction(error);
    },
  });

  const handleAcceptQuote = (quoteId: string) => {
    mutate({ quoteId });
  };

  return {
    isOpen,
    setIsOpen,
    onCancel,
    isPending,
    handleAcceptQuote,
  };
};
