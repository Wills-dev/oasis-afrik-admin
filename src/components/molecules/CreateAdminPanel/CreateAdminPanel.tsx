"use client";

import Button from "@/components/atoms/Button/Button";
import CreateAdminModal from "../modals/CreateAdminModal/CreateAdminModal";

import { useCreateAdmin } from "@/lib/hooks/useCreateAdmin";

const CreateAdminPanel = () => {
  const {
    handleSubmit,
    isPending,
    open,
    setOpen,
    handleChange,
    showPassword,
    togglePasswordVisibility,
    adminInfo,
  } = useCreateAdmin();

  return (
    <div className="flex justify-end">
      <Button onClick={() => setOpen(true)}>Create Admin</Button>
      <CreateAdminModal
        setOpen={setOpen}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        open={open}
        isPending={isPending}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
        adminInfo={adminInfo}
      />
    </div>
  );
};

export default CreateAdminPanel;
