import { FormEvent, useState } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateCountry } from "../api/country";
import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";

export const useEditCountry = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState("ACTIVE");
  const [formData, setFormData] = useState({
    name: "",
    code: "",
  });

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateCountry,
    onSuccess: () => {
      toast.success("Country added successfully.");
      setOpen(false);
      setFormData({
        code: "",
        name: "",
      });
      queryClient.invalidateQueries({
        queryKey: ["all countries"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error editing country", error);
      promiseErrorFunction(error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "code" ? value.toUpperCase() : value,
    }));
  };

  const handleSubmit = (e: FormEvent, id: string) => {
    e.preventDefault();

    const { name, code } = formData;
    if (!name) {
      return toast.error("Country name is required");
    } else if (!code) {
      return toast.error("Country code is required");
    }
    mutate({ id, name, code, status: isActive });
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
