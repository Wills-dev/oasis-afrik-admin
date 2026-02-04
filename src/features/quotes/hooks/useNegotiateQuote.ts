import { FormEvent, useState } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ApiErrorResponse } from "@/lib/types";
import { negotiateQuote } from "../api";
import { toastOption } from "@/lib/helpers/toast";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { formatInputTextNumberWithCommas } from "@/lib/helpers/formatInputTextNumberWithCommas";
import { formatInputTextNumber } from "@/lib/helpers/formatNumbers";

export const useNegotiateQuote = () => {
  const [showModal, setShowModal] = useState(false);
  const [negotiateInfo, setNegotiateInfo] = useState({
    message: "",
    amount: "",
    address: "",
    quantity: "",
    quantityUnitId: "",
    minLeadTime: "",
    minLeadTimePeriodId: "",
    maxLeadTime: "",
    maxLeadTimePeriodId: "",
  });

  const queryClient = useQueryClient();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setNegotiateInfo((prev) => ({
      ...prev,
      [name]: ["amount", "quantity"].includes(name)
        ? formatInputTextNumberWithCommas(value)
        : ["minLeadTime", "maxLeadTime"].includes(name)
          ? formatInputTextNumber(value)
          : value,
    }));
  };

  const resetForm = () => {
    setNegotiateInfo({
      message: "",
      amount: "",
      address: "",
      quantity: "",
      minLeadTime: "",
      quantityUnitId: "",
      minLeadTimePeriodId: "",
      maxLeadTime: "",
      maxLeadTimePeriodId: "",
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: negotiateQuote,
    onSuccess: (data, variable) => {
      toast.success("Negotiation sent successfully", toastOption);
      setShowModal(false);
      resetForm();
      queryClient.invalidateQueries({
        queryKey: ["quotes"],
      });
      queryClient.invalidateQueries({
        queryKey: ["quote info", variable?.quoteId],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error negotiating quote", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: FormEvent, quoteId: string) => {
    e.preventDefault();
    const { message, amount, quantity, address, quantityUnitId } =
      negotiateInfo;
    if (!message) {
      return toast.error("Message is required", toastOption);
    }
    mutate({
      message,
      address,
      amount,
      quoteId,
      quantity,
      quantityUnitId,
    });
  };

  return {
    showModal,
    setShowModal,
    negotiateInfo,
    handleChange,
    handleSubmit,
    isSubmitting: isPending,
  };
};
