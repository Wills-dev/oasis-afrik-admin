import CardLoader from "@/components/atoms/skeletonLoader/CardLoader";
import DashboardCard from "@/components/molecules/DashboardCard/DashboardCard";

import { numberWithCommas } from "@/lib/helpers";

const ProductCards = ({
  statistics,
  isLoading,
}: {
  statistics: {
    approved: number;
    pendingProducts: number;
    totalProducts: number;
    unavailableProducts: number;
  };
  isLoading: boolean;
}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {isLoading ? (
        <>
          <CardLoader />
          <CardLoader />
          <CardLoader />
        </>
      ) : (
        <>
          <DashboardCard
            title="Product uploaded"
            value={
              statistics?.totalProducts
                ? numberWithCommas(statistics?.totalProducts)
                : "0"
            }
            icon="/assets/icons/solar_box.svg"
            percentage={6.3}
            percentageState="positive"
          />
          <DashboardCard
            title="Pending Products"
            value={
              statistics?.pendingProducts
                ? numberWithCommas(statistics?.pendingProducts)
                : "0"
            }
            icon="/assets/icons/keyboard.svg"
            percentage={4.4}
            percentageState="negative"
          />
          <DashboardCard
            title="Approved"
            value={
              statistics?.approved
                ? numberWithCommas(statistics?.approved)
                : "0"
            }
            icon="/assets/icons/send-sqaure-2.svg"
            percentage={1.2}
            percentageState="positive"
          />
          <DashboardCard
            title="Unavailable Products"
            value={
              statistics?.unavailableProducts
                ? numberWithCommas(statistics?.unavailableProducts)
                : "0"
            }
            icon="/assets/icons/keyboard.svg"
            percentage={4}
            percentageState="negative"
          />
        </>
      )}
    </div>
  );
};

export default ProductCards;
