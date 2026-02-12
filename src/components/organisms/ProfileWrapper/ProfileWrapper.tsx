"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import AdminInfoLoader from "@/components/atoms/skeleton/AdminInfoLoader";
import StatusBubbleLoader from "@/components/atoms/skeleton/StatusBubbleLoader";
import AdminInfoHeader from "@/components/molecules/AdminInfoHeader/AdminInfoHeader";

import { RootState } from "@/store";
import { useSelector } from "react-redux";

const ProfileWrapper = () => {
  const { user, isLoading } = useSelector((state: RootState) => state.auth);

  const status = user?.status || "";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <PageTitle title="Profile" description="" />
        {isLoading ? (
          <StatusBubbleLoader />
        ) : (
          <div
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              user?.status === "ACTIVE"
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : user?.status === "INACTIVE"
                  ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 "
                  : "bg-red-500/10 text-red-400 border border-red-500/20 "
            }`}
          >
            {status?.charAt(0).toUpperCase() + status?.slice(1)}
          </div>
        )}
      </div>
      {isLoading ? <AdminInfoLoader /> : <AdminInfoHeader adminData={user} />}
    </div>
  );
};

export default ProfileWrapper;
