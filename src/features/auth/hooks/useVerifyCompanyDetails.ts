import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { useVerifyCompanyState } from "./useVerifyCompanyState";
import { verifyCompanyDetails } from "../api";
import { toastOption } from "@/lib/helpers/toast";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";

export const useVerifyCompanyDetails = () => {
  const {
    companyInfo,
    validId,
    setValidId,
    utilityDocument,
    setUtilityDocument,
    cacDocument,
    setCacDocument,
    handleChange,
    resetForm,
    isSubmitted,
    setIsSubmitted,
  } = useVerifyCompanyState();

  const { mutate, isPending } = useMutation({
    mutationFn: verifyCompanyDetails,
    onSuccess: () => {
      resetForm();
      toast.success("Company details sent successfully.", toastOption);
      setIsSubmitted(true);
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error logging signing up", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyInfo.adminName) {
      return toast.error("Admin name is required", toastOption);
    } else if (!companyInfo.companyName) {
      return toast.error("Company name is required", toastOption);
    } else if (!companyInfo.businessRegistrationNumber) {
      return toast.error(
        "Business registration number is required",
        toastOption
      );
    } else if (!companyInfo.phoneNumber) {
      return toast.error("Phone number is required", toastOption);
    } else if (!companyInfo.companyAddress) {
      return toast.error("Company address is required", toastOption);
    } else if (!companyInfo.companyEmail) {
      return toast.error("Company email is required", toastOption);
    } else if (!validId) {
      return toast.error("Valid ID document is required", toastOption);
    } else if (!cacDocument) {
      return toast.error("CAC document is required", toastOption);
    } else if (!utilityDocument) {
      return toast.error("Utility document is required", toastOption);
    }
    mutate({
      ...companyInfo,
      validId,
      cacDocument,
      utilityDocument,
    });
  };

  return {
    handleChange,
    handleSubmit,
    isPending,
    companyInfo,
    validId,
    utilityDocument,
    cacDocument,
    isSubmitted,
    setValidId,
    setUtilityDocument,
    setCacDocument,
    resetForm,
  };
};
