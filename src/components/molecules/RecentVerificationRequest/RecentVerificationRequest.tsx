"use client";

import Link from "next/link";

import ChartLoader from "@/components/atoms/skeleton/ChartLoader";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCreatedAt } from "@/lib/helpers";

const RecentVerificationRequest = ({
  recentVerifications,
  isLoading,
}: {
  isLoading: boolean;
  recentVerifications: { id: string; companyName: string; date: string }[];
}) => {
  return (
    <>
      {isLoading ? (
        <ChartLoader maxWidth="max-w-[480px]" />
      ) : (
        <Card className="max-w-[480px] sm:min-w-[300px] flex-1 w-full shadow-none">
          <CardHeader>
            <CardTitle>Recent verification request</CardTitle>
          </CardHeader>
          <CardContent className="w-full px-0">
            {recentVerifications?.slice(0, 5)?.map((company) => (
              <Link
                href={`/verifications/info/${company?.id}`}
                className="flex items-center justify-between px-4 py-2 gap-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer"
                key={company?.id}
              >
                <div className="flex items-center gap-4 w-full justify-between">
                  <p className="font-semibold text-gray-600 capitalize whitespace-nowrap truncate flex-1">
                    {company?.companyName}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {company?.date && formatCreatedAt(company?.date)}
                  </p>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default RecentVerificationRequest;
