import InfoCardWrapper from "@/components/atoms/InfoCardWrapper/InfoCardWrapper";
import { Product } from "../../types";
import { numberWithCommas } from "@/lib/helpers";

const ProductPricing = ({ data }: { data: Product }) => {
  return (
    <InfoCardWrapper title="Pricing & Availability" className="bg-green-50">
      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm text-slate-600 mb-1">Unit Price</p>
          <p className="text-3xl font-bold text-green-600">
            {data?.currency?.symbol}
            {data?.price && numberWithCommas(Number(data?.price))}
          </p>
          <p className="text-sm text-slate-500 mt-1">
            per {data?.minOrderUnit.name}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
          <div>
            <p className="text-sm text-slate-600 mb-1">Currency</p>
            <p className="font-semibold text-slate-900">
              {data?.currency.name} ({data?.currency.symbol})
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-1">Rate to NGN</p>
            <p className="font-semibold text-slate-900">
              ₦
              {data?.currency.rateToNgn &&
                numberWithCommas(Number(data?.currency.rateToNgn))}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
          <div>
            <p className="text-sm text-slate-600 mb-1">Minimum Order</p>
            <p className="font-bold text-slate-900">
              {data?.minOrder && numberWithCommas(Number(data?.minOrder))}{" "}
              {data?.minOrderUnit.abbreviation}
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-1">Available Quantity</p>
            <p className="font-bold text-slate-900">
              {data?.quantity && numberWithCommas(Number(data?.quantity))}{" "}
              {data?.quantityUnit.abbreviation}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <p className="text-sm text-slate-600 mb-1">Lead Time</p>
          <p className="font-bold text-slate-900">
            {data?.minLeadTime} {data?.minLeadTimePeriod.name}s-
            {data?.maxLeadTime} {data?.maxLeadTimePeriod.name}s
          </p>
        </div>
      </div>
    </InfoCardWrapper>
  );
};

export default ProductPricing;
