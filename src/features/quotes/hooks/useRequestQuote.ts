import { FormEvent, useState } from "react";

import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { QuotePayloadType } from "../types";
import { requestQuote } from "../api";
import { toastOption } from "@/lib/helpers/toast";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { validateQuote } from "../helpers/validateQuote";
import { formatInputTextNumberWithCommas } from "@/lib/helpers/formatInputTextNumberWithCommas";
import { formatInputTextNumber } from "@/lib/helpers/formatNumbers";

export const useRequestQuote = (productId: string) => {
  const [showQuote, setShowQuote] = useState(false);
  const [quote, setQuote] = useState<QuotePayloadType>({
    productId,
    amount: "",
    currency: "",
    quantityUnitId: "",
    quantity: "",
    address: "",
    description: "",
    maxLeadTime: "",
    maxLeadTimePeriodId: "",
    minLeadTime: "",
    minLeadTimePeriodId: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setQuote((prev) => ({
      ...prev,
      [name]: ["amount", "quantity"].includes(name)
        ? formatInputTextNumberWithCommas(value)
        : ["maxLeadTime", "minLeadTime"].includes(name)
          ? formatInputTextNumber(value)
          : value,
    }));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: requestQuote,
    onSuccess: () => {
      setQuote({
        productId: "",
        amount: "",
        currency: "",
        quantityUnitId: "",
        quantity: "",
        address: "",
        description: "",
        maxLeadTime: "",
        maxLeadTimePeriodId: "",
        minLeadTime: "",
        minLeadTimePeriodId: "",
      });
      toast.success("Quote sent successful", toastOption);
      setShowQuote(false);
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error sending quote", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const error = validateQuote(quote);
    if (error) {
      return toast.error(error, toastOption);
    }
    mutate(quote);
  };

  return {
    quote,
    showQuote,
    setShowQuote,
    handleChange,
    handleSubmit,
    isPending,
  };
};
