"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#000000",
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

const HorizontalBarChartContent = ({
  currencyBalances,
}: {
  currencyBalances: { currency: string; amount: number }[];
}) => {
  const addColorToData = currencyBalances.map((item) => ({
    ...item,
    fill:
      chartConfig[item.currency as keyof typeof chartConfig]?.color ||
      "#79def2",
  }));

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
              data={addColorToData}
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
              <XAxis dataKey="amount" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="amount" layout="vertical" radius={5} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default HorizontalBarChartContent;
