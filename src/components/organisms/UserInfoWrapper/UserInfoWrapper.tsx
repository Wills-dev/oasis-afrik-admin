"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import InfoSkeleton from "@/components/atoms/skeleton/InfoSkeleton";
import AdminInfoHeader from "@/components/molecules/AdminInfoHeader/AdminInfoHeader";
import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import CompanyDetailsView from "@/components/molecules/CompanyDetailsView/CompanyDetailsView";

import { useGetUserInfo } from "@/lib/hooks/useGetUserInfo";

import { CompanyDetails } from "@/lib/types";

const UserInfoWrapper = ({ userId }: { userId: string }) => {
  const { data, isLoading } = useGetUserInfo(userId);

  const userBreadcrumb = [
    { label: `All Users`, href: `/users` },
    { label: "User Info" },
  ];

  return (
    <div className="space-y-6">
      <PageTitle title="User Info" description={`ID: #${userId}`} />
      <AppBreadcrumb items={userBreadcrumb} />
      {isLoading ? (
        <InfoSkeleton />
      ) : (
        <>
          <AdminInfoHeader adminData={data} />
          {data?.companyVerifications?.map((company: CompanyDetails) => (
            <CompanyDetailsView data={company} key={company?.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default UserInfoWrapper;
