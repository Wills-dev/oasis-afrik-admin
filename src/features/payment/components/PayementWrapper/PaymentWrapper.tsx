import DashboardTitle from "@/components/molecules/DashboardTitle/DashboardTitle";
import PaymentCards from "../PaymentCards/PaymentCards";
import PaymentTableWrapper from "../PaymentTableWrapper/PaymentTableWrapper";

const PaymentWrapper = () => {
  return (
    <div className="space-y-6">
      <div className="flex sm:items-center justify-between gap-6  max-sm:flex-col">
        <DashboardTitle
          title="Payments"
          description="See all payments from orders here"
        />
      </div>
      <div className="pt-10">
        <PaymentCards />
      </div>
      <PaymentTableWrapper />
    </div>
  );
};

export default PaymentWrapper;
