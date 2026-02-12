import Button from "@/components/atoms/Button/Button";
import CurrencyActionModal from "../modals/CurrencyActionModal/CurrencyActionModal";

import { useAddNewCurrency } from "@/lib/hooks/useAddNewCurrency";

const CurrencyActionPanel = () => {
  const {
    open,
    setOpen,
    isActive,
    setIsActive,
    formData,
    handleChange,
    isPending,
    handleSubmit,
  } = useAddNewCurrency();

  return (
    <div className="flex justify-end">
      <Button width="w-fit" onClick={() => setOpen(true)}>
        Add New Currency
      </Button>
      <CurrencyActionModal
        handleSubmit={handleSubmit}
        open={open}
        isActive={isActive}
        setIsActive={setIsActive}
        handleChange={handleChange}
        setOpen={setOpen}
        formData={formData}
        isPending={isPending}
        title="Add new currency"
      />
    </div>
  );
};

export default CurrencyActionPanel;
