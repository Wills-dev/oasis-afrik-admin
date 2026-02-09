import BackButton from "@/components/atoms/BackButton/BackButton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

interface Crumb {
  label: string;
  href?: string;
}

interface AppBreadcrumbProps {
  items: Crumb[];
}

const AppBreadcrumb = ({ items }: AppBreadcrumbProps) => {
  return (
    <div className="flex justify-between flex-wrap gap-10">
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <Fragment key={index}>
                {item.href && !isLast ? (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href={item.href}
                        className="hover:text-purple-600 capitalize"
                      >
                        {item.label}
                      </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />
                  </>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  </BreadcrumbItem>
                )}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <BackButton />
    </div>
  );
};

export default AppBreadcrumb;
