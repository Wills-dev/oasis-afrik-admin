"use client";

import { MapPin, Star } from "lucide-react";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { ProductType } from "../../types";
import { numberWithCommas } from "@/lib/helpers";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import InfoDisc from "@/components/atoms/InfoDisc/InfoDisc";
import Button from "@/components/atoms/Button/Button";
import RequestQuote from "@/components/molecules/modals/RequestQuote/RequestQuote";
import { useRequestQuote } from "@/features/quotes/hooks/useRequestQuote";
import { useDeleteProduct } from "../../hooks/useDeleteProduct";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";

interface ProductInfoProps {
  productInfo: ProductType;
}

const ProductInfo = ({ productInfo }: ProductInfoProps) => {
  const {
    quote,
    showQuote,
    setShowQuote,
    handleChange,
    handleSubmit,
    isPending,
  } = useRequestQuote(productInfo?.id || "");
  const { handleDelete, isDeleting, isOpen, setIsOpen, onCancel } =
    useDeleteProduct();

  const { user } = useSelector((state: RootState) => state.auth);

  const isProductOwner = user?.id === productInfo?.userId;

  const formattedQuantity = `${productInfo?.quantity && numberWithCommas(Number(productInfo?.quantity))}${productInfo?.quantityUnit?.abbreviation}`;

  const formattedMor = `${productInfo?.minOrder && numberWithCommas(Number(productInfo?.minOrder))}${productInfo?.minOrderUnit?.abbreviation}`;

  return (
    <div className="max-w-xl md:min-w-[450px] min-w-[300px] w-full space-y-6">
      <div className="space-y-1">
        <h4 className="font-medium sm:text-3xl text-2xl">
          {productInfo?.name}
        </h4>
        <p className="sm:text-lg font-medium text-gray-700">
          {productInfo?.currency?.symbol || "₦"}
          {productInfo?.price &&
            numberWithCommas(Number(productInfo?.price))}{" "}
          per MOR
        </p>
        <div className="flex items-center gap-1 text-gray-500 max-sm:text-sm">
          <Star className="w-4 h-4 text-yellow-500" />
          <p>4</p>
          <p>{`(15)`}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <p>
            {productInfo?.minLeadTime}
            {productInfo?.minLeadTimePeriod?.name}
          </p>{" "}
          -{" "}
          <p>
            {productInfo?.maxLeadTime}
            {productInfo?.maxLeadTimePeriod?.name}
          </p>
        </div>
        <InfoDisc title="MOR:" value={formattedMor} horizontal />
        <InfoDisc
          title="Country:"
          value={productInfo?.country?.name}
          horizontal
        />
        <InfoDisc
          title="Category:"
          value={productInfo?.category?.name}
          horizontal
        />
        <InfoDisc title="Available Qty:" value={formattedQuantity} horizontal />
      </div>
      <div className="space-y-1">
        <h6 className="sm:text-lg font-medium">Product details</h6>
        <p className="text-gray-700 max-sm:text-sm">
          {productInfo?.description}
        </p>
      </div>
      <div className="rounded-md border border-gray-200 p-4 space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="sm:text-lg font-medium">Kenyan highlands.co</p>
          <StatusBubble status="verified" />
        </div>
        <div className="flex gap-2 items-center">
          <MapPin className="w-5 h-5" />
          <p className="text-sm text-gray-400">{productInfo?.country?.name}</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <InfoDisc title="Avg. Resp time" value="2  hrs" />
          <InfoDisc title="Joined" value="2024" />
          <InfoDisc title="Ratings" value="4.5" rating />
        </div>
      </div>
      {isProductOwner ? (
        <div className="flex items-center flex-wrap gap-4">
          <Button
            width="flex-1 w-full"
            href={`/dashboard/products/info/${productInfo?.id}/edit`}
          >
            Edit product
          </Button>
          <Button
            onClick={() => setIsOpen(true)}
            loading={isDeleting}
            width="flex-1 w-full"
            bgColor="bg-white border border-gray-300 text-gray-600"
            bgHoverColor="hover:bg-gray-50"
          >
            Delete product
          </Button>
        </div>
      ) : (
        <Button onClick={() => setShowQuote(true)}>Request a quote</Button>
      )}
      <RequestQuote
        showQuoteForm={showQuote}
        setShowQuoteForm={setShowQuote}
        quote={quote}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isPending={isPending}
      />
      <ConfirmAction
        isPending={isDeleting}
        open={isOpen}
        setOpen={setIsOpen}
        onCancel={onCancel}
        onConfirm={() => handleDelete(productInfo?.id)}
        title="Delete product"
        description="You’re about to delete this product. Please confirm to proceed."
      />
    </div>
  );
};

export default ProductInfo;
