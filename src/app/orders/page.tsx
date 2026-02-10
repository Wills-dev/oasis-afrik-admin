import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import OrdersWrapper from "@/features/orders/components/OrdersWrapper/OrdersWrapper";

const AllOrdersPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <DashboardLayout title="All Orders">
        <OrdersWrapper />
      </DashboardLayout>
    </Suspense>
  );
};

export default AllOrdersPage;
