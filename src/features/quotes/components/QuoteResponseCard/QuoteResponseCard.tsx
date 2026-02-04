import InfoDisc from "@/components/atoms/InfoDisc/InfoDisc";

import { QuoteNote } from "../../types";
import { convertDateFormat, numberWithCommas } from "@/lib/helpers";
import { getCurrencySign } from "@/lib/helpers/getCurrencySign";

const QuoteResponseCard = ({
  responseInfo,
  currency,
  buyerId,
}: {
  responseInfo: QuoteNote;
  currency: string;
  buyerId: string;
}) => {
  const quantity = `${responseInfo?.quantity ? numberWithCommas(Number(responseInfo?.quantity)) : responseInfo?.effectiveQuantity && numberWithCommas(Number(responseInfo?.effectiveQuantity))}`;

  const quantityUnit = `${responseInfo?.quantityUnit?.abbreviation ? responseInfo?.quantityUnit?.abbreviation : responseInfo?.effectiveQuantityUnit?.abbreviation && responseInfo?.effectiveQuantityUnit?.abbreviation}`;

  const amount = responseInfo?.amount
    ? numberWithCommas(Number(responseInfo?.amount))
    : responseInfo?.effectiveAmount &&
      numberWithCommas(Number(responseInfo?.effectiveAmount));

  const isUserBuyer = buyerId === responseInfo?.authorId;

  return (
    <div className="p-2.5 rounded-[10px] bg-gray-100 hover:bg-[#00993314] transition-all duration-300">
      <h6 className="sm:text-lg font-medium">
        {isUserBuyer ? "Buyer's note" : "Seller's note"}
      </h6>
      <p className="sm:text-sm text-xs text-gray-600">
        {responseInfo?.message}
      </p>
      <InfoDisc
        title={
          responseInfo?.quantity ? "Proposed quantity:" : "Requested quantity:"
        }
        value={`${quantity}${quantityUnit}`}
        horizontal
      />
      <InfoDisc
        title="Offered amount:"
        value={`${currency && getCurrencySign(currency)}${amount}`}
        horizontal
      />
      <InfoDisc
        title="From"
        value={`${responseInfo?.author?.firstName} ${responseInfo?.author?.lastName}`}
        horizontal
      />
      <InfoDisc
        title="Delivery address:"
        value={responseInfo?.address || responseInfo?.effectiveAddress || ""}
      />
      {/* <InfoDisc
        title="Proposed delivery duration:"
        value={responseInfo?.address || responseInfo?.effectiveAddress || ""}
      /> */}
      <InfoDisc
        title="Date:"
        value={
          responseInfo?.createdAt && convertDateFormat(responseInfo?.createdAt)
        }
        horizontal
      />
    </div>
  );
};

export default QuoteResponseCard;
