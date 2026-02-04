import { Dispatch, SetStateAction, useState } from "react";

import toast from "react-hot-toast";

import { toastOption } from "@/lib/helpers/toast";

export const useVerifyCompanyState = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validId, setValidId] = useState<File | null>(null);
  const [utilityDocument, setUtilityDocument] = useState<File | null>(null);
  const [cacDocument, setCacDocument] = useState<File | null>(null);
  const [companyInfo, setCompanyInfo] = useState({
    adminName: "",
    companyName: "",
    businessRegistrationNumber: "",
    phoneNumber: "",
    companyAddress: "",
    companyEmail: "",
  });

  const allowedTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];

  const MAX_FILE_SIZE = 2 * 1024 * 1024;

  const validateFile = (file: File) => {
    if (file.size > MAX_FILE_SIZE) {
      toast.error("File size should be less than 2MB", toastOption);
      return false;
    }

    if (!allowedTypes.includes(file.type)) {
      toast.error(
        "Only PDF, JPEG, PNG, and JPG files are allowed",
        toastOption
      );
      return false;
    }

    return true;
  };

  const fileSetters: Record<string, Dispatch<SetStateAction<File | null>>> = {
    validId: setValidId,
    utilityDocument: setUtilityDocument,
    cacDocument: setCacDocument,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (files && fileSetters[name]) {
      const file = files[0];
      if (!file) return;

      if (!validateFile(file)) return;

      fileSetters[name](file);
      return;
    }

    setCompanyInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setCompanyInfo({
      adminName: "",
      companyName: "",
      businessRegistrationNumber: "",
      phoneNumber: "",
      companyAddress: "",
      companyEmail: "",
    });
    setValidId(null);
    setUtilityDocument(null);
    setCacDocument(null);
  };

  return {
    companyInfo,
    setCompanyInfo,
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
  };
};
