import Link from "next/link";

import { Quote } from "../../types";
import { formatCreatedAt, numberWithCommas } from "@/lib/helpers";

import InfoDisc from "@/components/atoms/InfoDisc/InfoDisc";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

const QuoteCard = ({ quote, tab }: { quote: Quote; tab: string }) => {
  const userName =
    tab === "incoming"
      ? `${quote?.buyer?.firstName} ${quote?.buyer?.lastName}`
      : `${quote?.seller?.firstName} ${quote?.seller?.lastName}`;
  const quantity = `${quote?.quantity ? numberWithCommas(Number(quote?.quantity)) : 0} ${quote?.quantityUnit?.abbreviation}`;

  return (
    <Link
      href={`/dashboard/quotes/info/${quote?.id}`}
      className="w-full p-4 rounded-[20px] border border-gray-200 space-y-2 block hover:bg-gray-100 transition-all duration-300"
    >
      <div className="flex md:items-center justify-between max-md:flex-col gap-2">
        <div className="flex items-center gap-2">
          <h6 className="sm:text-lg font-medium truncate whitespace-nowrap">
            {quote?.product?.name}
          </h6>
          <p className="sm:text-sm text-xs text-gray-400  whitespace-nowrap">
            {quote?.updatedAt && formatCreatedAt(quote?.updatedAt)}
          </p>
        </div>
        <div className="">
          <StatusBubble status={quote?.statusLabel} />
        </div>
      </div>
      <p className="text-gray-600 sm:text-sm text-xs whitespace-nowrap truncate">
        {quote?.notes[0]?.message}
      </p>
      <div className="flex flex-wrap gap-2">
        <InfoDisc
          title={tab === "incoming" ? "From:" : "To:"}
          value={userName || ""}
          horizontal
        />
        <InfoDisc title="Quantity:" value={quantity} horizontal />
      </div>
    </Link>
  );
};

export default QuoteCard;
