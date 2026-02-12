import { Suspense } from "react";

import DashboardLayout from "../DashboardLayout/DashboardLayout";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import Container from "@/components/atoms/Container/Container";
import ConfigurationLink from "@/components/atoms/ConfigurationLink/ConfigurationLink";

import { configurationLinks } from "@/lib/constants";

const ConfigurationLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Suspense fallback={<MainLoader />}>
      <DashboardLayout title="Configuration">
        <div className=" h-10 w-full border-b border-[#EDEDED] dark:border-gray-700 top-14 right-0 fixed bg-white/65 dark:bg-gray-900/65 backdrop-blur-2xl z-20">
          <Container>
            <div className="flex items-center lg:justify-end flex-1 w-full no-scrollbar overflow-x-auto h-10 gap-4">
              {configurationLinks?.map((service) => (
                <ConfigurationLink
                  key={service?.name}
                  name={service?.name}
                  link={service?.link}
                />
              ))}
            </div>
          </Container>
        </div>
        {/* <div className="h-24 w-full" /> */}
        <div className="py-6">
          <h2 className="sm:text-3xl text-2xl font-semibold dark:text-gray-300 capitalize">
            {title}
          </h2>
        </div>
        {children}
      </DashboardLayout>
    </Suspense>
  );
};

export default ConfigurationLayout;
