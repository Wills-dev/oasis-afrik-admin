import { FormEvent } from "react";

import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import Label from "@/components/atoms/Label/Label";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";

import { Switch } from "@/components/ui/switch";
import { areAllFieldsFilled } from "@/lib/helpers/areAllFieldsFilled";

const CurrencyActionModal = ({
  handleSubmit,
  isPending,
  open,
  setOpen,
  formData,
  handleChange,
  isActive,
  setIsActive,
  title,
}: {
  handleSubmit: (e: FormEvent) => void;
  isPending: boolean;
  open: boolean;
  setOpen: (item: boolean) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: { name: string; code: string; symbol: string; rateToNgn: string };
  setIsActive: (item: string) => void;
  isActive: string;
  title: string;
}) => {
  const isFormFilled = areAllFieldsFilled(formData);

  return (
    <ModalWrapper
      open={open}
      onClose={setOpen}
      title={title}
      className="max-w-3xl w-full"
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label title="Curreny name" />
          <Input
            value={formData?.name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Currency code" />
          <Input
            value={formData?.code}
            onChange={handleChange}
            type="text"
            name="code"
            placeholder=""
          />
        </div>{" "}
        <div className="space-y-2">
          <Label title="Currency symbol" />
          <Input
            value={formData?.symbol}
            onChange={handleChange}
            type="text"
            name="symbol"
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Currency rate to Naira" />
          <Input
            value={formData?.rateToNgn}
            onChange={handleChange}
            type="text"
            name="rateToNgn"
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Category Status" />
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">
                {isActive === "ACTIVE" ? "Active" : "Inactive"}
              </p>
              <p className="text-sm text-muted-foreground">
                {isActive === "ACTIVE"
                  ? "This category is visible and can be used."
                  : "This category is disabled and won't be visible."}
              </p>
            </div>

            <Switch
              checked={isActive === "ACTIVE"}
              onCheckedChange={(checked: boolean) =>
                setIsActive(checked ? "ACTIVE" : "INACTIVE")
              }
              className="data-[state=checked]:bg-green-600"
            />
          </div>
        </div>
        <Button type="submit" loading={isPending} disabled={!isFormFilled}>
          Proceed
        </Button>
      </form>
    </ModalWrapper>
  );
};

export default CurrencyActionModal;
