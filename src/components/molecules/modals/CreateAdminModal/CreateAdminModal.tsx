import { FormEvent } from "react";

import { areAllFieldsFilled } from "@/lib/helpers/areAllFieldsFilled";
import { CreateAdminData } from "@/lib/types";

import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import Button from "@/components/atoms/Button/Button";

const CreateAdminModal = ({
  handleSubmit,
  isPending,
  open,
  setOpen,
  handleChange,
  showPassword,
  togglePasswordVisibility,
  adminInfo,
}: {
  handleSubmit: (e: FormEvent) => void;
  isPending: boolean;
  open: boolean;
  setOpen: (item: boolean) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: "text" | "password";
  adminInfo: CreateAdminData;
  togglePasswordVisibility: () => void;
}) => {
  const isFormFilled = areAllFieldsFilled(adminInfo);

  return (
    <ModalWrapper
      open={open}
      onClose={setOpen}
      title="Create Admin"
      className="max-w-3xl w-full"
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label title="First Name" />
          <Input
            value={adminInfo.firstName}
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Last Name" />
          <Input
            value={adminInfo.lastName}
            onChange={handleChange}
            type="text"
            name="lastName"
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Email" />
          <Input
            value={adminInfo.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Password" />
          <Input
            value={adminInfo.password}
            onChange={handleChange}
            type={showPassword}
            showPassword={showPassword}
            name="password"
            onTogglePassword={togglePasswordVisibility}
            placeholder=""
          />
        </div>
        <Button type="submit" loading={isPending} disabled={!isFormFilled}>
          Proceed
        </Button>
      </form>
    </ModalWrapper>
  );
};

export default CreateAdminModal;
