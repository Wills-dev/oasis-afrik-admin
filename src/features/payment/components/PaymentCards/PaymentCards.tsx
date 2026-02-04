import DashboardCard from "@/components/molecules/DashboardCard/DashboardCard";

const PaymentCards = () => {
  return (
    <div className="flex gap-2 flex-wrap">
      <DashboardCard
        title="Total revenue"
        value={`10`}
        icon="/assets/icons/solar_box.svg"
        percentage={6.3}
        percentageState="positive"
      />
      <DashboardCard
        title="Completed payment"
        value={`1`}
        icon="/assets/icons/keyboard.svg"
        percentage={4.4}
        percentageState="negative"
      />
      <DashboardCard
        title="Pending payment"
        value={`9`}
        icon="/assets/icons/send-sqaure-2.svg"
        percentage={1.2}
        percentageState="positive"
      />
    </div>
  );
};

export default PaymentCards;
