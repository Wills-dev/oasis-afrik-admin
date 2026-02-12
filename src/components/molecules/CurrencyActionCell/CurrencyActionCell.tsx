"use client";
import { FormEvent, useEffect } from "react";

import ConfirmAction from "../ConfirmAction/ConfirmAction";
import ColumnActionDropdown from "../ColumnActionDropdown/ColumnActionDropdown";
import CurrencyActionModal from "../modals/CurrencyActionModal/CurrencyActionModal";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useEditCurrency } from "@/lib/hooks/useEditCurrency";
import { useDeleteCurrency } from "@/lib/hooks/useDeleteCurrency";

const CurrencyActionCell = ({
  id,
  name,
  code,
  status,
  symbol,
  rateToNgn,
}: {
  id: string;
  status: string;
  name: string;
  code: string;
  symbol: string;
  rateToNgn: string;
}) => {
  const { isOpen, setIsOpen, isPending, handleDelete } = useDeleteCurrency();
  const {
    open,
    setOpen,
    isActive,
    setIsActive,
    formData,
    handleChange,
    isPending: isUpdating,
    handleSubmit,
    setFormData,
  } = useEditCurrency();

  const onSubmit = (e: FormEvent) => {
    handleSubmit(e, id);
  };

  useEffect(() => {
    setFormData({
      name,
      code,
      symbol,
      rateToNgn,
    });
    setIsActive(status);
  }, [code, status, setIsActive, name, symbol, rateToNgn, setFormData]);

  return (
    <>
      <ColumnActionDropdown>
        <DropdownMenuItem>
          <button onClick={() => setOpen(true)} className="cursor-pointer">
            Edit
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button
            onClick={() => setIsOpen(true)}
            className="cursor-pointer text-red-600"
          >
            Delete
          </button>
        </DropdownMenuItem>
      </ColumnActionDropdown>
      <ConfirmAction
        isPending={isPending}
        open={isOpen}
        setOpen={setIsOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => handleDelete(id)}
        title="Are You Sure You Want to delete currency?"
        description="Are you sure you want to delete this country? When deleted, you can't retrive it anymore."
      />
      <CurrencyActionModal
        handleSubmit={onSubmit}
        open={open}
        isActive={isActive}
        setIsActive={setIsActive}
        handleChange={handleChange}
        setOpen={setOpen}
        formData={formData}
        isPending={isUpdating}
        title="Edit currency info"
      />
    </>
  );
};

export default CurrencyActionCell;
