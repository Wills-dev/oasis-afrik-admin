"use client";

import { useRouter } from "next/navigation";

import InfoCardWrapper from "@/components/atoms/InfoCardWrapper/InfoCardWrapper";

import { User } from "@/features/auth/types";

const SellerInfo = ({ user }: { user: User }) => {
  const router = useRouter();

  const handleUserClick = () => {
    router.push(`/users/info/${user.id}`);
  };

  return (
    <InfoCardWrapper title="Seller Information">
      <div className="p-6">
        <button
          onClick={handleUserClick}
          className="w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-green-500 hover:bg-green-50/50 transition-all group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
              {user.firstName.charAt(0)}
              {user.lastName.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                {user.firstName} {user.lastName}
              </p>
              {user.companyName && (
                <p className="text-sm text-slate-600 mb-1">
                  {user.companyName}
                </p>
              )}
              <p className="text-sm text-slate-500">{user.email}</p>
              <p className="text-xs text-green-600 mt-2 group-hover:underline">
                View seller profile →
              </p>
            </div>
          </div>
        </button>
      </div>
    </InfoCardWrapper>
  );
};

export default SellerInfo;
