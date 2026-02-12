"use client";

import Button from "@/components/atoms/Button/Button";
import CountryActionModal from "../modals/CountryActionModal/CountryActionModal";

import { useCreateNewCountry } from "@/lib/hooks/useCreateNewCountry";

const CountryActionPanel = () => {
  const {
    open,
    setOpen,
    isActive,
    setIsActive,
    formData,
    handleChange,
    isPending,
    handleSubmit,
  } = useCreateNewCountry();

  return (
    <div className="flex justify-end">
      <Button width="w-fit" onClick={() => setOpen(true)}>
        Add new country
      </Button>
      <CountryActionModal
        handleSubmit={handleSubmit}
        open={open}
        isActive={isActive}
        setIsActive={setIsActive}
        handleChange={handleChange}
        setOpen={setOpen}
        formData={formData}
        isPending={isPending}
        title="Create new country"
      />
    </div>
  );
};

export default CountryActionPanel;
