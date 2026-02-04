"use client";

import { useSelector } from "react-redux";

import { RootState } from "@/store";

import Button from "@/components/atoms/Button/Button";
import DashboardTitle from "@/components/molecules/DashboardTitle/DashboardTitle";
import ScreenDisplayUnverifiedUser from "@/components/organisms/ScreenDisplayUnverifiedUser/ScreenDisplayUnverifiedUser";
import ProductTableWrapper from "../ProductTableWrapper/ProductTableWrapper";
import ProductCards from "../ProductCards/ProductCards";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import TableLoader from "@/components/atoms/skeletonLoader/TableLoader";

import { useGetUserProducts } from "../../hooks/useGetUserProducts";
import EmptyStatePage from "@/components/molecules/EmptyStatePage/EmptyStatePage";

const ProductsWrapper = () => {
  const { user, isLoading } = useSelector((state: RootState) => state.auth);
  const {
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    search,
    handleSearchChange,
    data,
    isLoading: isFetching,
    handleSearch,
    handleClear,
    currentPage,
    limit,
    filter,
    setFilter,
  } = useGetUserProducts();

  const isCompanyVerified = user?.isCompanyVerified;
  const noProduct = !isFetching && data?.data < 1;

  return (
    <div>
      {isLoading ? (
        <MainLoader />
      ) : (
        <>
          {isCompanyVerified ? (
            <div className="space-y-6">
              <div className="flex sm:items-center justify-between gap-6  max-sm:flex-col">
                <DashboardTitle
                  title="Products"
                  description="Manage your product catalog"
                />
                <Button href="/dashboard/products/new" width="w-fit">
                  Add a product
                </Button>
              </div>
              {noProduct ? (
                <EmptyStatePage
                  title="Let’s get you selling"
                  description="Your product list is empty for now. Upload your products and start connecting with buyers today"
                  type="products"
                />
              ) : (
                <>
                  <div className="pt-10">
                    <ProductCards
                      isLoading={isFetching}
                      statistics={data?.statistics}
                    />
                  </div>
                  {isFetching ? (
                    <TableLoader />
                  ) : (
                    <ProductTableWrapper
                      totalPages={data?.pagination?.totalPages}
                      currentPage={currentPage}
                      prevPage={prevPage}
                      nextPage={nextPage}
                      goToFirstPage={goToFirstPage}
                      goToLastPage={goToLastPage}
                      isFirstPage={isFirstPage}
                      isLastPage={isLastPage}
                      limit={limit}
                      setLimit={setLimit}
                      search={search}
                      handleSearchChange={handleSearchChange}
                      handleSearch={handleSearch}
                      filter={filter}
                      setFilter={setFilter}
                      handleClear={handleClear}
                      data={data?.data}
                    />
                  )}
                </>
              )}
            </div>
          ) : (
            <ScreenDisplayUnverifiedUser />
          )}
        </>
      )}
    </div>
  );
};

export default ProductsWrapper;
