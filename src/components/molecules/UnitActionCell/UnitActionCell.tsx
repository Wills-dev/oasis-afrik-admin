"use client";

import { FormEvent, useEffect } from "react";

import ConfirmAction from "../ConfirmAction/ConfirmAction";
import ColumnActionDropdown from "../ColumnActionDropdown/ColumnActionDropdown";

import UnitActionModal from "../modals/UnitActionModal/UnitActionModal";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useDeleteUnit } from "@/lib/hooks/useDeleteUnit";
import { useEditUnit } from "@/lib/hooks/useEditUnit";

const UnitActionCell = ({
  id,
  name,
  abbreviation,
  status,
}: {
  id: string;
  status: string;
  name: string;
  abbreviation: string;
}) => {
  const { isOpen, setIsOpen, isPending, handleDelete } = useDeleteUnit();
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
  } = useEditUnit();

  const onSubmit = (e: FormEvent) => {
    handleSubmit(e, id);
  };
  useEffect(() => {
    setFormData({
      name,
      abbreviation,
    });
    setIsActive(status);
  }, [abbreviation, status, setIsActive, name, setFormData]);

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
        title="Are You Sure You Want to delete unit?"
        description="Are you sure you want to delete this unit? When deleted, you can't retrive it anymore."
      />
      <UnitActionModal
        handleSubmit={onSubmit}
        open={open}
        isActive={isActive}
        setIsActive={setIsActive}
        handleChange={handleChange}
        setOpen={setOpen}
        formData={formData}
        isPending={isUpdating}
        title="Edit unit info"
      />
    </>
  );
};

export default UnitActionCell;
