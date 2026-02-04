import DashboardCard from "@/components/molecules/DashboardCard/DashboardCard";
import React from "react";

const OrderCards = () => {
  return (
    <div className="flex gap-2 flex-wrap">
      <DashboardCard
        title="All Orders"
        value={`10`}
        icon="/assets/icons/solar_box.svg"
        percentage={6.3}
        percentageState="positive"
      />
      <DashboardCard
        title="Pending Orders"
        value={`1`}
        icon="/assets/icons/keyboard.svg"
        percentage={4.4}
        percentageState="negative"
      />
      <DashboardCard
        title="Processing Orders"
        value={`9`}
        icon="/assets/icons/send-sqaure-2.svg"
        percentage={1.2}
        percentageState="positive"
      />
      <DashboardCard
        title="Completed Orders"
        value={`5`}
        icon="/assets/icons/keyboard.svg"
        percentage={4}
        percentageState="negative"
      />
    </div>
  );
};

export default OrderCards;
