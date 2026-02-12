"use client";
import { FormEvent, useEffect } from "react";

import ConfirmAction from "../ConfirmAction/ConfirmAction";
import ColumnActionDropdown from "../ColumnActionDropdown/ColumnActionDropdown";
import CountryActionModal from "../modals/CountryActionModal/CountryActionModal";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { useEditCountry } from "@/lib/hooks/useEditCountry";
import { useDeleteCountry } from "@/lib/hooks/useDeleteCountry";

const CountryActionCell = ({
  id,
  name,
  code,
  status,
}: {
  id: string;
  status: string;
  name: string;
  code: string;
}) => {
  const { isOpen, setIsOpen, isPending, handleDelete } = useDeleteCountry();
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
  } = useEditCountry();

  const onSubmit = (e: FormEvent) => {
    handleSubmit(e, id);
  };

  useEffect(() => {
    setFormData({
      name,
      code,
    });
    setIsActive(status);
  }, [code, status, setIsActive, name, setFormData]);
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
        title="Are You Sure You Want to delete country?"
        description="Are you sure you want to delete this country? When deleted, you can't retrive it anymore."
      />
      <CountryActionModal
        handleSubmit={onSubmit}
        open={open}
        isActive={isActive}
        setIsActive={setIsActive}
        handleChange={handleChange}
        setOpen={setOpen}
        formData={formData}
        isPending={isUpdating}
        title="Edit country info"
      />
    </>
  );
};

export default CountryActionCell;
