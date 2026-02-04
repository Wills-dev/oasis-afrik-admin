import { FormEvent } from "react";
import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { useLoginState } from "./useLoginState";
import { login } from "../api";
import { toastOption } from "@/lib/helpers/toast";
import { createAuthCookie } from "@/lib/helpers/cookie";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { setUser } from "@/store/features/auth/authSlice";

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    showPassword,
    togglePasswordVisibility,
    handleChange,
    loginForm,
    resetForm,
  } = useLoginState();

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      resetForm();
      toast.success("Login successful", toastOption);
      createAuthCookie("oasisAfrikUserId", data?.accessToken);
      createAuthCookie("refreshToken", data?.refreshToken);
      dispatch(setUser(data.user));
      router.push("/dashboard/overview");
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error logging", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!loginForm.email) {
      return toast.error("Email is required", toastOption);
    } else if (!loginForm.password) {
      return toast.error("Password is required", toastOption);
    }
    mutate(loginForm);
  };

  return {
    showPassword,
    togglePasswordVisibility,
    handleChange,
    handleSubmit,
    loginForm,
    isPending,
  };
};
