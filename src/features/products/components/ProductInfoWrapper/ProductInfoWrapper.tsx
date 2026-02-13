"use client";

import { formatDate } from "@/lib/helpers/dateFormats";
import { useGetProductInfo } from "../../hooks/useGetProductInfo";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import InfoSkeleton from "@/components/atoms/skeleton/InfoSkeleton";
import ProductMainImage from "../ProductMainImage/ProductMainImage";
import ProductThumbnailImages from "../ProductThumbnailImages/ProductThumbnailImages";
import SellerInfo from "../SellerInfo/SellerInfo";
import ProductPricing from "../ProductPricing/ProductPricing";
import ProductInfo from "../ProductInfo/ProductInfo";
import ProductActionPanel from "../ProductActionPanel/ProductActionPanel";
import InfoCardWrapper from "@/components/atoms/InfoCardWrapper/InfoCardWrapper";

const ProductInfoWrapper = ({ id }: { id: string }) => {
  const {
    data,
    isLoading,
    currentImage,
    setCurrentImage,
    showImageModal,
    setShowImageModal,
  } = useGetProductInfo(id);

  const productBreadcrumb = [
    { label: `All products`, href: `/products` },
    { label: "Product Info" },
  ];

  return (
    <div className="space-y-6">
      <PageTitle title="Product Info" description={`ID: #${id}`} />
      <AppBreadcrumb items={productBreadcrumb} />
      {isLoading ? (
        <InfoSkeleton />
      ) : (
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ProductMainImage
              currentImage={currentImage}
              name={data?.name}
              showImageModal={showImageModal}
              setShowImageModal={setShowImageModal}
            />
            <ProductThumbnailImages
              images={data?.images}
              currentImage={currentImage}
              setCurrentImage={setCurrentImage}
            />
            <SellerInfo user={data?.user} />
          </div>

          <div className="space-y-6">
            <ProductPricing data={data} />
            <ProductInfo
              categoryName={data?.category.name}
              countryOfOrigin={data?.country.name}
              description={data?.description}
            />

            <InfoCardWrapper title="Timeline">
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Created</span>
                  <span className="font-semibold text-slate-900">
                    {data?.createdAt && formatDate(data?.createdAt)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                  <span className="text-sm text-slate-600">Last Updated</span>
                  <span className="font-semibold text-slate-900">
                    {formatDate(data?.updatedAt)}
                  </span>
                </div>
              </div>
            </InfoCardWrapper>
            <ProductActionPanel productId={id} status={data?.status} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfoWrapper;
