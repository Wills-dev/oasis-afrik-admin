import { FormEvent, useState } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";
import { postUnit } from "../api/unit";

export const useAddUnit = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState("ACTIVE");
  const [formData, setFormData] = useState({
    name: "",
    abbreviation: "",
  });

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: postUnit,
    onSuccess: () => {
      toast.success("Unit added successfully.");
      setOpen(false);
      setFormData({
        abbreviation: "",
        name: "",
      });
      queryClient.invalidateQueries({
        queryKey: ["all units"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error adding new unit", error);
      promiseErrorFunction(error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { name, abbreviation } = formData;
    if (!name) {
      return toast.error("Unit name is required");
    } else if (!abbreviation) {
      return toast.error("Unit abbreviation is required");
    }
    mutate({ name, abbreviation, status: isActive });
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
  };
};
