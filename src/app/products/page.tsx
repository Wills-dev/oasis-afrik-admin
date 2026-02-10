import { Suspense } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import ProductWrapper from "@/features/products/components/ProductWrapper/ProductWrapper";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";

const ProductPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <DashboardLayout title="All products">
        <ProductWrapper />
      </DashboardLayout>
    </Suspense>
  );
};

export default ProductPage;
