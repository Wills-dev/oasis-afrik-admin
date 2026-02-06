"use client";

import Link from "next/link";

import ChartLoader from "@/components/atoms/skeleton/ChartLoader";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCreatedAt } from "@/lib/helpers";

const RecentVerificationRequest = () => {
  const isLoading = false;
  const data = [
    {
      companyName: "Kekez LTD",
      createdAt: "2026-02-06T02:05:22.504Z",
      id: "1",
    },
    {
      companyName: "Walletwise LTD",
      createdAt: "2026-02-04T02:05:22.504Z",
      id: "2",
    },
    {
      companyName: "Tofa LTD",
      createdAt: "2026-02-04T02:10:22.504Z",
      id: "3",
    },
    {
      companyName: "Agrohive LTD",
      createdAt: "2026-02-04T02:17:22.504Z",
      id: "4",
    },
    {
      companyName: "Kelly X global LTD",
      createdAt: "2026-02-03T02:05:22.504Z",
      id: "5",
    },
  ];

  return (
    <>
      {isLoading ? (
        <ChartLoader />
      ) : (
        <Card className="max-w-[480px] sm:min-w-[300px] flex-1 w-full shadow-none">
          <CardHeader>
            <CardTitle>Recent verification request</CardTitle>
          </CardHeader>
          <CardContent className="w-full px-0">
            {data?.slice(0, 5)?.map((company) => (
              <Link
                href={`/verifications/info/${company?.id}`}
                className="flex items-center justify-between px-4 py-2 gap-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer"
                key={company?.id}
              >
                <div className="flex items-center gap-4 w-full justify-between">
                  <p className="font-semibold capitalize whitespace-nowrap truncate flex-1">
                    {company?.companyName}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {company?.createdAt && formatCreatedAt(company?.createdAt)}
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
