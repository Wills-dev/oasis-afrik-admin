import CurrenciesWrapper from "@/components/molecules/CurrenciesWrapper/CurrenciesWrapper";
import ConfigurationLayout from "@/components/templates/ConfigurationLayout/ConfigurationLayout";

const page = () => {
  return (
    <ConfigurationLayout title="Currency Configuration">
      <CurrenciesWrapper />
    </ConfigurationLayout>
  );
};

export default page;
