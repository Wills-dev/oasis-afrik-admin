"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
export const description = "A mixed bar chart";
const chartData = [
  { currency: "NGN", revenue: 275, fill: "#79def2" },
  { currency: "USD", revenue: 200, fill: "#4cdaf7" },
  { currency: "GBP", revenue: 187, fill: "#20a0b9" },
  { currency: "EUR", revenue: 173, fill: "#09778d" },
  { currency: "YEN", revenue: 90, fill: "#08424e" },
];
const chartConfig = {
  revenue: {
    label: "Revenue",
  },
  NGN: {
    label: "NGN",
    color: "#79def2",
  },
  USD: {
    label: "USD",
    color: "#4cdaf7",
  },
  GBP: {
    label: "GBP",
    color: "#20a0b9",
  },
  EUR: {
    label: "EUR",
    color: "#09778d",
  },
  YEN: {
    label: "YEN",
    color: "#08424e",
  },
} satisfies ChartConfig;

const HorizontalBarChartContent = () => {
  return (
    <div className="flex-1 w-full border border-gray-200 rounded-md min-w-[280px]">
      <Card className="shadow-none border-0">
        <CardHeader>
          <CardTitle>Revenue by currencies</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                left: 0,
              }}
            >
              <YAxis
                dataKey="currency"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label
                }
              />
              <XAxis dataKey="revenue" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="revenue" layout="vertical" radius={5} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default HorizontalBarChartContent;
