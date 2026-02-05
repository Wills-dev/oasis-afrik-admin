"use client";

import { useLogin } from "../../hooks/useLogin";
import { areAllFieldsFilled } from "@/lib/helpers/areAllFieldsFilled";

import Label from "@/components/atoms/Label/Label";
import Input from "@/components/atoms/Input/Input";
import Alternative from "@/components/atoms/Alternative/Alternative";
import Button from "@/components/atoms/Button/Button";

const LoginWrapper = () => {
  const {
    showPassword,
    togglePasswordVisibility,
    handleChange,
    handleSubmit,
    loginForm,
    isPending,
  } = useLogin();

  const isFormFilled = areAllFieldsFilled(loginForm);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label title="Email" />
        <Input
          value={loginForm.email}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder=""
        />
      </div>
      <div className="space-y-2">
        <Label title="Password" />
        <Input
          value={loginForm.password}
          onChange={handleChange}
          type={showPassword}
          showPassword={showPassword}
          name="password"
          onTogglePassword={togglePasswordVisibility}
          placeholder=""
        />
      </div>
      <div className="flex justify-end">
        <Alternative
          descriptions="Don't remember password?"
          link="/forgot-password"
          title="Forgot password"
        />
      </div>
      <Button type="submit" loading={isPending} disabled={!isFormFilled}>
        Login
      </Button>
    </form>
  );
};

export default LoginWrapper;
