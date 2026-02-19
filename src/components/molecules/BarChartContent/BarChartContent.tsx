"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  count: {
    label: "Users",
    color: "#009933",
  },
} satisfies ChartConfig;

const BarChartContent = ({
  userGrowth,
}: {
  userGrowth: { period: string; count: number }[];
}) => {
  return (
    <div className="flex-1 w-full border border-gray-200 rounded-md min-w-[280px]">
      <Card className="shadow-none border-0">
        <CardHeader className="flex item-center justify-between">
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={userGrowth}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="period"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 11)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar dataKey="count" fill="#009933" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default BarChartContent;
