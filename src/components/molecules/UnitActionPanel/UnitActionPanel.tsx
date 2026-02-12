"use client";

import Button from "@/components/atoms/Button/Button";
import { useAddUnit } from "@/lib/hooks/useAddUnit";
import UnitActionModal from "../modals/UnitActionModal/UnitActionModal";

const UnitActionPanel = () => {
  const {
    open,
    setOpen,
    isActive,
    setIsActive,
    formData,
    handleChange,
    isPending,
    handleSubmit,
  } = useAddUnit();

  return (
    <div className="flex justify-end">
      <Button width="w-fit" onClick={() => setOpen(true)}>
        Add new unit
      </Button>
      <UnitActionModal
        handleSubmit={handleSubmit}
        open={open}
        isActive={isActive}
        setIsActive={setIsActive}
        handleChange={handleChange}
        setOpen={setOpen}
        formData={formData}
        isPending={isPending}
        title="Add New Unit"
      />
    </div>
  );
};

export default UnitActionPanel;
