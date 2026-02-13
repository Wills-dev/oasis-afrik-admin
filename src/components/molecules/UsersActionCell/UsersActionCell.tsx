"use client";

import Link from "next/link";

import ColumnActionDropdown from "../ColumnActionDropdown/ColumnActionDropdown";
import ConfirmAction from "../ConfirmAction/ConfirmAction";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useUpdateUserStatus } from "@/lib/hooks/useUpdateUserStatus";

const UsersActionCell = ({
  id,
  status,
  isAdmin,
}: {
  id: string;
  status: string;
  isAdmin?: boolean;
}) => {
  const {
    openActivateModal,
    setOpenActivateModal,
    openSuspendModal,
    setOpenSuspendModal,
    openDeactivateModal,
    setOpenDeactivateModal,
    isPending,
    handleUpdate,
  } = useUpdateUserStatus();

  return (
    <>
      <ColumnActionDropdown>
        {!isAdmin && (
          <DropdownMenuItem>
            <Link href={`/users/info/${id}`}>View Details</Link>
          </DropdownMenuItem>
        )}
        {status === "ACTIVE" ? (
          <>
            <DropdownMenuItem>
              <button
                className="cursor-pointer text-red-600"
                onClick={() => setOpenSuspendModal(true)}
              >
                Suspend
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                className="cursor-pointer text-yellow-600"
                onClick={() => setOpenDeactivateModal(true)}
              >
                Deactivate
              </button>
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem>
            <button
              className="cursor-pointer text-green-600"
              onClick={() => setOpenActivateModal(true)}
            >
              Activate
            </button>
          </DropdownMenuItem>
        )}
      </ColumnActionDropdown>
      <ConfirmAction
        isPending={isPending}
        open={openActivateModal}
        setOpen={setOpenActivateModal}
        onCancel={() => setOpenActivateModal(false)}
        onConfirm={() => handleUpdate(id, "ACTIVE")}
        title="Are You Sure You Want to Activate This User?"
        description="Activating this user will immediately restore full access to their account and platform features."
      />
      <ConfirmAction
        isPending={isPending}
        open={openDeactivateModal}
        setOpen={setOpenDeactivateModal}
        onCancel={() => setOpenDeactivateModal(false)}
        onConfirm={() => handleUpdate(id, "INACTIVE")}
        title="Are You Sure You Want to Deactivate This User?"
        description="Deactivating this user will disable their account and prevent them from accessing the platform. This action can be reversed by reactivating the account."
      />
      <ConfirmAction
        isPending={isPending}
        open={openSuspendModal}
        setOpen={setOpenSuspendModal}
        onCancel={() => setOpenSuspendModal(false)}
        onConfirm={() => handleUpdate(id, "SUSPENDED")}
        title="Are You Sure You Want to Suspend This User?"
        description="Suspending this user will immediately restrict their access to the platform and prevent all account activity until reactivated."
      />
    </>
  );
};

export default UsersActionCell;
