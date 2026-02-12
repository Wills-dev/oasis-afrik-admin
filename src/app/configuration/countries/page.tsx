import CountryWrapper from "@/components/organisms/CountryWrapper/CountryWrapper";
import ConfigurationLayout from "@/components/templates/ConfigurationLayout/ConfigurationLayout";

const page = () => {
  return (
    <ConfigurationLayout title="Country Configuration">
      <CountryWrapper />
    </ConfigurationLayout>
  );
};

export default page;
