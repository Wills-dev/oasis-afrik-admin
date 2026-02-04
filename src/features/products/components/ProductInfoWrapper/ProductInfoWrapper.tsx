import BackButton from "@/components/atoms/BackButton/BackButton";
import ProductImageWrapper from "../ProductImageWrapper/ProductImageWrapper";
import ProductInfo from "../ProductInfo/ProductInfo";
import ProductInfoLoader from "@/components/atoms/skeletonLoader/ProductInfoLoader";

import { useGetProductInfo } from "../../hooks/useGetProductInfo";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const ProductInfoWrapper = ({ productId }: { productId: string }) => {
  const { isLoading } = useSelector((state: RootState) => state.auth);
  const { data, isPending, currentImage, setCurrentImage } =
    useGetProductInfo(productId);

  const loading = isLoading || isPending;

  return (
    <div className="space-y-6">
      <BackButton />

      <div className="flex flex-wrap gap-4">
        {loading ? (
          <ProductInfoLoader />
        ) : (
          <>
            <ProductImageWrapper
              currentImage={currentImage}
              setCurrentImage={setCurrentImage}
              productImages={data?.images || []}
              productName={data?.name}
            />
            <ProductInfo productInfo={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductInfoWrapper;
