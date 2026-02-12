import { FormEvent, useState } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";
import { updateCurrency } from "../api/currency";
import { formatInputTextNumberWithCommas } from "../helpers/formatInputTextNumberWithCommas";
import { removeCommas } from "../helpers/removeCommas";

export const useEditCurrency = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState("ACTIVE");
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    rateToNgn: "",
    symbol: "",
  });

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateCurrency,
    onSuccess: () => {
      toast.success("Currency updated successfully.");
      setOpen(false);
      setFormData({
        code: "",
        name: "",
        rateToNgn: "",
        symbol: "",
      });
      queryClient.invalidateQueries({
        queryKey: ["all currencies"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error updating currency", error);
      promiseErrorFunction(error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "code"
          ? value.toUpperCase()
          : name === "rateToNgn"
            ? formatInputTextNumberWithCommas(value)
            : value,
    }));
  };

  const handleSubmit = (e: FormEvent, id: string) => {
    e.preventDefault();

    const { name, code, rateToNgn, symbol } = formData;
    if (!name) {
      return toast.error("Currency name is required");
    } else if (!code) {
      return toast.error("Currency code is required");
    } else if (!symbol) {
      return toast.error("Currency symbol is required");
    } else if (!rateToNgn) {
      return toast.error("Currency rate to naira is required");
    }
    mutate({
      id,
      name,
      code,
      status: isActive,
      symbol,
      rateToNgn: removeCommas(rateToNgn),
    });
  };

  return {
    open,
    setOpen,
    isActive,
    setIsActive,
    formData,
    handleChange,
    isPending,
    handleSubmit,
    setFormData,
  };
};
