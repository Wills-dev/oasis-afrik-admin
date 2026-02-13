import InfoCardWrapper from "@/components/atoms/InfoCardWrapper/InfoCardWrapper";

const ProductInfo = ({
  description,
  categoryName,
  countryOfOrigin,
}: {
  description: string;
  categoryName: string;
  countryOfOrigin: string;
}) => {
  return (
    <InfoCardWrapper title="Product Details">
      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm font-medium text-slate-600 mb-2">Description</p>
          <p className="text-slate-700 leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
          <div>
            <p className="text-sm text-slate-600 mb-1">Category</p>
            <p className="font-semibold text-slate-900">{categoryName}</p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-1">Origin Country</p>
            <p className="font-semibold text-slate-900">{countryOfOrigin}</p>
          </div>
        </div>
      </div>
    </InfoCardWrapper>
  );
};

export default ProductInfo;
