"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Orders",
    color: "#0099331F",
  },
} satisfies ChartConfig;

const AreaChartContent = ({
  orderOverview,
}: {
  orderOverview: { period: string; count: number }[];
}) => {
  return (
    <div className="flex-1 w-full border border-gray-200 rounded-md min-w-[280px]">
      <Card className="shadow-none border-0">
        <CardHeader className="flex item-center justify-between flex-wrap">
          <CardTitle>Orders overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={orderOverview}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="period"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 11)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="count"
                type="natural"
                fill="#0099331F"
                fillOpacity={0.4}
                stroke="#0099331F"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default AreaChartContent;
