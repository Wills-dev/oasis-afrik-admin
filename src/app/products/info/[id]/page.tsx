import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import ProductInfoWrapper from "@/features/products/components/ProductInfoWrapper/ProductInfoWrapper";

const ProductInfoPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  return (
    <DashboardLayout title="Product Info">
      <ProductInfoWrapper id={id} />
    </DashboardLayout>
  );
};

export default ProductInfoPage;
