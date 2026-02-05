"use client";

import { useForgotPassword } from "../../hooks/useForgotPassword";

import Label from "@/components/atoms/Label/Label";
import Input from "@/components/atoms/Input/Input";
import Alternative from "@/components/atoms/Alternative/Alternative";
import Button from "@/components/atoms/Button/Button";

const ForgotPasswordWrapper = () => {
  const { email, setEmail, handleSubmit, isPending } = useForgotPassword();

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label title="Email" />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder=""
        />
      </div>
      <div className="flex justify-end">
        <Alternative
          descriptions="Remember password?"
          link="/login"
          title="Login"
        />
      </div>
      <Button type="submit" loading={isPending} disabled={email.trim() === ""}>
        Proceed
      </Button>
    </form>
  );
};

export default ForgotPasswordWrapper;
