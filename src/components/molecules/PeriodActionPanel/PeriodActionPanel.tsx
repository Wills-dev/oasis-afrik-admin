"use client";

import Button from "@/components/atoms/Button/Button";
import UpdateCategoryModal from "../modals/UpdateCategoryModal/UpdateCategoryModal";

import { useAddPeriod } from "@/lib/hooks/useAddPeriod";

const PeriodActionPanel = () => {
  const {
    open,
    setOpen,
    isActive,
    setIsActive,
    name,
    setName,
    isPending,
    handleSubmit,
  } = useAddPeriod();
  return (
    <div className="flex justify-end">
      <Button width="w-fit" onClick={() => setOpen(true)}>
        Add period
      </Button>
      <UpdateCategoryModal
        handleSubmit={handleSubmit}
        open={open}
        isActive={isActive}
        setIsActive={setIsActive}
        setName={setName}
        setOpen={setOpen}
        name={name}
        isPending={isPending}
        title="Add New Period"
        nameCaption="Period name"
      />
    </div>
  );
};

export default PeriodActionPanel;
