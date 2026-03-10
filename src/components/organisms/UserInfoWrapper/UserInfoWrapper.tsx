"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import InfoSkeleton from "@/components/atoms/skeleton/InfoSkeleton";
import AdminInfoHeader from "@/components/molecules/AdminInfoHeader/AdminInfoHeader";
import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import CompanyDetailsView from "@/components/molecules/CompanyDetailsView/CompanyDetailsView";
import DynamicTabs from "@/components/molecules/DynamicTabs/DynamicTabs";

import { useGetUserInfo } from "@/lib/hooks/useGetUserInfo";

import { CompanyDetails } from "@/lib/types";
import UserOrdersWrapper from "../UserOrdersWrapper/UserOrdersWrapper";
import UserProductWrapper from "../UserProductWrapper/UserProductWrapper";

const UserInfoWrapper = ({ userId }: { userId: string }) => {
  const {
    data,
    isLoading,
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    currentPage,
    limit,
    setCurrentPage,
    tab,
    handleSwithTab,
  } = useGetUserInfo(userId);

  const userBreadcrumb = [
    { label: `All Users`, href: `/users` },
    { label: "User Info" },
  ];

  const tabs = [
    {
      value: "OutGoing-Orders",
      label: "Out going orders",
      content: (
        <UserOrdersWrapper
          data={data?.buyerOrders || []}
          totalPages={1}
          currentPage={currentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          goToFirstPage={goToFirstPage}
          goToLastPage={goToLastPage}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          limit={limit}
          setLimit={setLimit}
          isLoading={isLoading}
          setCurrentPage={setCurrentPage}
        />
      ),
    },
    {
      value: "InComing-Orders",
      label: " Incoming orders",
      content: (
        <UserOrdersWrapper
          data={data?.sellerOrders || []}
          totalPages={1}
          currentPage={currentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          goToFirstPage={goToFirstPage}
          goToLastPage={goToLastPage}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          limit={limit}
          setLimit={setLimit}
          isLoading={isLoading}
          setCurrentPage={setCurrentPage}
        />
      ),
    },
    {
      value: "products",
      label: "Products",
      content: (
        <UserProductWrapper
          data={data?.products || []}
          totalPages={1}
          currentPage={currentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          goToFirstPage={goToFirstPage}
          goToLastPage={goToLastPage}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          limit={limit}
          setLimit={setLimit}
          isLoading={isLoading}
          setCurrentPage={setCurrentPage}
        />
      ),
    },
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
          <DynamicTabs tabs={tabs} defaultTab={tab} onClick={handleSwithTab} />
        </>
      )}
    </div>
  );
};

export default UserInfoWrapper;
