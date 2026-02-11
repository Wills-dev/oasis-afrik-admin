import { FormEvent, useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { ApiErrorResponse } from "../types";
import { promiseErrorFunction } from "../helpers/promiseError";
import { createAdmin } from "../api/user";

export const useCreateAdmin = () => {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState<"text" | "password">(
    "password",
  );
  const [adminInfo, setAdminInfo] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createAdmin,
    onSuccess: () => {
      toast.success("Admin created successfully.");
      setOpen(false);
      setAdminInfo({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      });
      queryClient.invalidateQueries({
        queryKey: ["all users"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error creating admin", error);
      promiseErrorFunction(error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAdminInfo((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = adminInfo;
    if (!firstName) {
      return toast.error("First name is required");
    } else if (!lastName) {
      return toast.error("Last name is required");
    } else if (!email) {
      return toast.error("Email is required");
    } else if (!password) {
      return toast.error("Password is required");
    }
    mutate(adminInfo);
  };

  return {
    handleSubmit,
    isPending,
    open,
    setOpen,
    handleChange,
    showPassword,
    togglePasswordVisibility,
    adminInfo,
  };
};
