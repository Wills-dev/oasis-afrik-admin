"use client";

import { useSelector } from "react-redux";

import { pageSelectors } from "../../constants";
import { RootState } from "@/store";
import { useGetQuotes } from "../../hooks/useGetQuotes";

import AllQuotesWrapper from "../AllQuotesWrapper/AllQuotesWrapper";
import DashboardTitle from "@/components/molecules/DashboardTitle/DashboardTitle";
import EmptyStatePage from "@/components/molecules/EmptyStatePage/EmptyStatePage";
import PageSelector from "@/components/molecules/PageSelector/PageSelector";
import QuoteLoader from "@/components/atoms/skeletonLoader/QuoteLoader";

const QuoteWrapper = () => {
  const { user, isLoading: isFetching } = useSelector(
    (state: RootState) => state.auth,
  );

  const isUserSeller = user?.isCompanyVerified || false;

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
    isLoading,
    handleSearch,
    handleClear,
    currentPage,
    limit,
    filter,
    setFilter,
    tab,
    setTab,
  } = useGetQuotes();

  const loading = isFetching || isLoading;

  const showEmptyState = !isLoading && data?.data.length < 1;

  const emptyStateTitle =
    tab === "incoming" ? "No Quotes Yet" : "You Haven’t Requested Any Quotes";

  const emptyStateDescription =
    tab === "incoming"
      ? "You don’t have any quotes at the moment. When a buyer requests a quote for your products, it will appear here."
      : "Request a quote from a seller to negotiate pricing and delivery details. Your quotes will show up here.";

  return (
    <div className="space-y-6">
      <div className="flex sm:items-center justify-between gap-6  max-sm:flex-col">
        <DashboardTitle
          title="Quote"
          description="Manage quote requests and negotiations"
        />
      </div>
      {isUserSeller && (
        <PageSelector
          selectPage={tab || "outgoing"}
          setSelectPage={setTab}
          options={pageSelectors}
        />
      )}
      {loading ? (
        <QuoteLoader />
      ) : (
        <>
          {showEmptyState ? (
            <EmptyStatePage
              type="products"
              title={emptyStateTitle}
              description={emptyStateDescription}
            />
          ) : (
            <>
              <AllQuotesWrapper
                data={data?.data || []}
                totalPages={data?.pagination?.totalPages || 0}
                totalQuotes={data?.pagination?.total || 0}
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
                handleChange={handleSearchChange}
                handleClear={handleClear}
                filter={filter}
                setFilter={setFilter}
                onSubmit={handleSearch}
                tab={tab}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default QuoteWrapper;
