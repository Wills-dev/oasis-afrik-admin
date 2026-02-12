"use client";

import { FormEvent, useEffect } from "react";

import ConfirmAction from "../ConfirmAction/ConfirmAction";
import ColumnActionDropdown from "../ColumnActionDropdown/ColumnActionDropdown";
import UpdateCategoryModal from "../modals/UpdateCategoryModal/UpdateCategoryModal";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useDeleteCategory } from "@/lib/hooks/useDeleteCategory";
import { useUpdateCategory } from "@/lib/hooks/useUpdateCategory";

const CategoryActionCell = ({
  id,
  categoryName,
  status,
}: {
  id: string;
  status: string;
  categoryName: string;
}) => {
  const { isOpen, setIsOpen, isPending, handleDelete } = useDeleteCategory();
  const {
    open,
    setOpen,
    isActive,
    setIsActive,
    name,
    setName,
    isPending: isUpdating,
    handleSubmit,
  } = useUpdateCategory();

  const onSubmit = (e: FormEvent) => {
    handleSubmit(e, id);
  };

  useEffect(() => {
    setName(categoryName);
    setIsActive(status);
  }, [categoryName, status, setIsActive, setName]);

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
        title="Are You Sure You Want to delete category?"
        description="Are you sure you want to delete this category? When deleted, you can't retrive it anymore."
      />
      <UpdateCategoryModal
        handleSubmit={onSubmit}
        open={open}
        isActive={isActive}
        setIsActive={setIsActive}
        setName={setName}
        setOpen={setOpen}
        name={name}
        isPending={isUpdating}
        title="Update category info"
      />
    </>
  );
};

export default CategoryActionCell;
