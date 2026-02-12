import { FormEvent } from "react";

import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import Label from "@/components/atoms/Label/Label";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";

import { Switch } from "@/components/ui/switch";
import { areAllFieldsFilled } from "@/lib/helpers/areAllFieldsFilled";

const UnitActionModal = ({
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
  formData: { name: string; abbreviation: string };
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
          <Label title="Unit name" />
          <Input
            value={formData?.name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Unit abbreviation" />
          <Input
            value={formData?.abbreviation}
            onChange={handleChange}
            type="text"
            name="abbreviation"
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Unit Status" />
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">
                {isActive === "ACTIVE" ? "Active" : "Inactive"}
              </p>
              <p className="text-sm text-muted-foreground">
                {isActive === "ACTIVE"
                  ? "This unit is visible and can be used."
                  : "This unit is disabled and won't be visible."}
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

export default UnitActionModal;
