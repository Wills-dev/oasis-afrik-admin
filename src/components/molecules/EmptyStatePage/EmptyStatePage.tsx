import EmptyIcon from "@/components/atoms/EmptyIcon/EmptyIcon";
import EmptyStateContent from "@/components/atoms/EmptyStateContent/EmptyStateContent";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const EmptyStatePage = ({
  type,
  title,
  description,
}: {
  type:
    | "search"
    | "filter"
    | "transactions"
    | "users"
    | "products"
    | "orders"
    | "cards"
    | "general";
  title: string;
  description: string;
}) => {
  return (
    <div className="min-h-[70vh] bg-background dark:bg-gray-800 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <Card className="border-border/50 dark:bg-gray-900 shadow-lg">
          <CardContent className="pt-12 pb-12 px-6 md:px-12">
            <div className="space-y-8 md:space-y-10">
              <div className="flex justify-center">
                <EmptyIcon type={type} />
              </div>

              <EmptyStateContent title={title} description={description} />
            </div>
          </CardContent>
        </Card>
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Need help?{" "}
            <Link
              href="/dashboard/support"
              className="text-primary hover:underline font-medium"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyStatePage;
