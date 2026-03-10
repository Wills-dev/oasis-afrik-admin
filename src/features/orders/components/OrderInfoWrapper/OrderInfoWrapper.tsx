"use client";

import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import DataField from "@/components/atoms/DataField/DataField";
import InfoSkeleton from "@/components/atoms/skeleton/InfoSkeleton";
import OrderSteps from "../OrderSteps/OrderSteps";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import TimelineItem from "@/components/atoms/TimelineItem/TimelineItem";
import UserSummary from "@/components/molecules/UserSummary/UserSummary";
import ProductDetails from "../ProductDetails/ProductDetails";
import OrderPaymentSummary from "../OrderPaymentSummary/OrderPaymentSummary";
import InfoCardWrapper from "@/components/atoms/InfoCardWrapper/InfoCardWrapper";

import { useGetOrderInfo } from "../../hooks/useGetOrderInfo";
import { QuoteNote } from "@/features/quotes/types";
import { formatDate } from "@/lib/helpers/dateFormats";

const OrderInfoWrapper = ({ orderId }: { orderId: string }) => {
  const { data, isLoading } = useGetOrderInfo(orderId);

  const orderBreadcrumb = [
    { label: `All Orders`, href: `/orders` },
    { label: "Order Info" },
  ];

  return (
    <div className="space-y-6">
      <PageTitle title="Order Info" description={`ID: #${orderId}`} />
      <AppBreadcrumb items={orderBreadcrumb} />
      {isLoading ? (
        <InfoSkeleton />
      ) : (
        <>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <OrderSteps
                data={data}
                shippedEvidence={data?.shippingEvidence}
                deliveredEvidence={data?.deliveryEvidence}
                paymentProof={data?.paymentProof}
              />
              <ProductDetails data={data} />
              <InfoCardWrapper title="Delivery Information">
                <div className="p-6">
                  <DataField label="Delivery Address" value={data?.address} />
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <DataField
                      label="Expected Delivery"
                      value={`${data?.quote.minLeadTime}-${data?.quote.maxLeadTime} days from payment`}
                    />
                  </div>
                </div>
              </InfoCardWrapper>

              {data?.quote?.notes && data?.quote.notes.length > 0 && (
                <InfoCardWrapper title="Order Notes">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-end gap-2">
                      <div className="flex flex-col items-end">
                        <div className="w-4 h-1 bg-emerald-500" />
                        <p className="text-xs">Buyer</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="w-4 h-1 bg-yellow-500 " />
                        <p className="text-xs">Seller</p>
                      </div>
                    </div>
                    {data?.quote.notes.map((note: QuoteNote) => {
                      const isBuyer = data?.buyerId === note?.authorId;
                      // const amount =
                      //   note?.amount &&
                      //   `${data?.currency}${numberWithCommas(Number(note?.amount))}`;
                      // const unit =
                      //   note?.quantityUnit || data?.quantityUnit?.abbreviation;
                      // const quantity = note?.quantity
                      //   ? numberWithCommas(Number(note?.quantity))
                      //   : data?.quantity
                      //     ? numberWithCommas(Number(data?.quantity))
                      //     : 0;

                      // const formattedQuantity = `${quantity}${unit}`;

                      return (
                        <div
                          key={note?.id}
                          className={`border-l-4 pl-4 py-2 ${isBuyer ? "border-emerald-500" : "border-yellow-500"}`}
                        >
                          {/* {amount && (
                            <DataField label="Amount" value={amount} />
                          )}
                          {formattedQuantity && (
                            <DataField
                              label="Proposed quantity"
                              value={formattedQuantity}
                            />
                          )} */}
                          <p className="text-slate-700">{note?.message}</p>
                          <p className="text-xs text-slate-500 mt-1">
                            {note?.createdAt && formatDate(note?.createdAt)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </InfoCardWrapper>
              )}
            </div>

            <div className="space-y-6">
              <OrderPaymentSummary data={data} />
              <UserSummary
                id={data?.buyer.id}
                title="Buyer Information"
                firstName={data?.buyer.firstName}
                lastName={data?.buyer.lastName}
                email={data?.buyer.email}
                emailVerified={data?.buyer.emailVerified}
              />
              <UserSummary
                id={data?.seller.id}
                title="Seller Information"
                firstName={data?.seller.firstName}
                lastName={data?.seller.lastName}
                email={data?.seller.email}
                emailVerified={data?.seller.emailVerified}
              />
              <InfoCardWrapper title="Order Timeline">
                <div className="p-6 space-y-4">
                  <TimelineItem
                    label="Order Created"
                    date={data?.createdAt && formatDate(data?.createdAt)}
                    active
                  />
                  {data?.paidAt && (
                    <TimelineItem
                      label="Payment Confirmed"
                      date={data?.paidAt && formatDate(data?.paidAt)}
                      active
                    />
                  )}
                  <TimelineItem
                    label="Last Updated"
                    date={data?.updatedAt && formatDate(data?.updatedAt)}
                    active
                  />
                </div>
              </InfoCardWrapper>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderInfoWrapper;
