import { ChangeEvent, useState } from "react";
import { ProductFormData } from "../types";
import { formatInputTextNumberWithCommas } from "@/lib/helpers/formatInputTextNumberWithCommas";
import { formatInputTextNumber } from "@/lib/helpers/formatNumbers";

export const usePostProductState = () => {
  const [step, setStep] = useState<number>(1);
  const [product, setProduct] = useState<ProductFormData>({
    productName: "",
    category: "",
    quantity: "",
    unit: "",
    country: "",
    price: "",
    currency: "",
    minOrder: "",
    minOrderUnit: "",
    minLead: "",
    minLeadPeriod: "",
    maxLead: "",
    maxLeadPeriod: "",
    description: "",
  });

  const nextStep = () => {
    if (step === 2 || step > 2) {
      return;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step === 1 || step < 1) {
      return;
    }
    setStep((prev) => prev - 1);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: ["price", "quantity", "minOrder"].includes(name)
        ? formatInputTextNumberWithCommas(value)
        : ["minLead", "maxLead"].includes(name)
          ? formatInputTextNumber(value)
          : value,
    }));
  };

  const handleDropdownChange = (name: keyof ProductFormData, value: string) => {
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setProduct({
      productName: "",
      category: "",
      quantity: "",
      unit: "",
      country: "",
      price: "",
      currency: "",
      minOrder: "",
      minLead: "",
      minLeadPeriod: "days",
      maxLead: "",
      maxLeadPeriod: "days",
      description: "",
      minOrderUnit: "",
    });
  };

  return {
    product,
    setProduct,
    handleChange,
    step,
    nextStep,
    prevStep,
    handleReset,
    handleDropdownChange,
  };
};
