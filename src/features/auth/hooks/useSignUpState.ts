import { useState } from "react";
import { SignUpProps } from "../types";

export const useSignUpState = () => {
  const [showPassword, setShowPassword] = useState<"text" | "password">(
    "password"
  );
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [signUpForm, setSignUpForm] = useState<SignUpProps>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const resetForm = () => {
    setSignUpForm({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    });
    setAcceptTerms(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({ ...prev, [name]: value }));
  };

  return {
    showPassword,
    togglePasswordVisibility,
    handleChange,
    signUpForm,
    resetForm,
    acceptTerms,
    setAcceptTerms,
  };
};
