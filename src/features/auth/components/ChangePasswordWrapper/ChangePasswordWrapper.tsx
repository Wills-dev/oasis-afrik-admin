"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Label from "@/components/atoms/Label/Label";
import Input from "@/components/atoms/Input/Input";
import PasswordValidation from "../PasswordValidations/PasswordValidation";
import Button from "@/components/atoms/Button/Button";

import { areAllFieldsFilled } from "@/lib/helpers/areAllFieldsFilled";
import { useChangePassword } from "@/features/auth/hooks/useChangePassword";

const ChangePasswordWrapper = () => {
  const {
    password,
    handleChange,
    showPassword,
    togglePasswordVisibility,
    handleSubmit,
    isPending,
    validations,
  } = useChangePassword();

  const isFormFilled = areAllFieldsFilled(password);

  return (
    <Card className="space-y-6 dark:bg-gray-800">
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="max-w-xl w-full space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label title="Old Password" />
            <Input
              value={password.oldPassword}
              onChange={handleChange}
              type={showPassword}
              name="oldPassword"
              placeholder=""
              showPassword={showPassword}
              onTogglePassword={togglePasswordVisibility}
            />
          </div>
          <div className="space-y-2">
            <Label title="New Password" />
            <Input
              value={password.newPassword}
              onChange={handleChange}
              type={showPassword}
              name="newPassword"
              placeholder=""
              showPassword={showPassword}
              onTogglePassword={togglePasswordVisibility}
            />
          </div>
          <div className="space-y-2">
            <Label title="Confirm New Password" />
            <Input
              value={password.confirmPassword}
              onChange={handleChange}
              type={showPassword}
              name="confirmPassword"
              placeholder=""
              showPassword={showPassword}
              onTogglePassword={togglePasswordVisibility}
            />
          </div>
          <div className="space-y-4">
            <CardDescription>Password Requirements:</CardDescription>
            <PasswordValidation
              password={password?.newPassword}
              validations={validations}
            />
          </div>
          <Button type="submit" loading={isPending} disabled={!isFormFilled}>
            Proceed
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ChangePasswordWrapper;
