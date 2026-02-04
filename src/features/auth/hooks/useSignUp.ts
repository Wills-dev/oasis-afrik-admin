import { FormEvent } from "react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { useSignUpState } from "./useSignUpState";
import { signUp } from "../api";
import { toastOption } from "@/lib/helpers/toast";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";

export const useSignUp = () => {
  const router = useRouter();

  const {
    showPassword,
    togglePasswordVisibility,
    handleChange,
    signUpForm,
    resetForm,
    acceptTerms,
    setAcceptTerms,
  } = useSignUpState();

  const { mutate, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      resetForm();
      toast.success("Sign up successful", toastOption);
      router.push(`/verify?email=${signUpForm?.email}`);
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error logging signing up", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!signUpForm.firstName) {
      return toast.error("First name is required", toastOption);
    } else if (!signUpForm.lastName) {
      return toast.error("Last name is required", toastOption);
    } else if (!signUpForm.email) {
      return toast.error("Email is required", toastOption);
    } else if (!signUpForm.password) {
      return toast.error("Password is required", toastOption);
    } else if (!acceptTerms) {
      return toast.error(
        "Please accept terms and conditions to proceed.",
        toastOption
      );
    }
    mutate(signUpForm);
  };

  return {
    showPassword,
    togglePasswordVisibility,
    handleChange,
    handleSubmit,
    signUpForm,
    isPending,
    acceptTerms,
    setAcceptTerms,
  };
};
