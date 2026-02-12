"use client";

import Button from "@/components/atoms/Button/Button";
import UpdateCategoryModal from "../modals/UpdateCategoryModal/UpdateCategoryModal";

import { useCreateNewCategory } from "@/lib/hooks/useCreateNewCategory";

const CategoryActionPanel = () => {
  const {
    open,
    setOpen,
    isActive,
    setIsActive,
    name,
    setName,
    isPending,
    handleSubmit,
  } = useCreateNewCategory();

  return (
    <div className="flex justify-end">
      <Button width="w-fit" onClick={() => setOpen(true)}>
        Create New Category
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
        title="Create new category"
      />
    </div>
  );
};

export default CategoryActionPanel;
