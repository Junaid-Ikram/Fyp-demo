"use client";

import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";
import "./barChart.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../../../../SideBar/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../../../../../SideBar/ui/chart";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  pmln: {
    label: "PMLN",
    color: "hsl(var(--chart-1))",
  },
  pti: {
    label: "PTI",
    color: "hsl(var(--chart-2))",
  },
  ppp: {
    label: "PPP",
    color: "hsl(var(--chart-3))",
  },
  other: {
    label: "OTHER",
    color: "hsl(var(--chart-4))",
  },
};

const chartData = [
  { candidates: "pmln", votes: 175 },
  { candidates: "pti", votes: 200 },
  { candidates: "ppp", votes: 275 },
  { candidates: "other", votes: 100 },
].map((item) => ({
  ...item,
  fill: chartConfig[item.candidates]?.color || "hsl(var(--chart-default))",
}));

export function BarCharts({ title, description }) {
  return (
    <div className="barChartContainer">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="candidates"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => chartConfig[value]?.label}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey="votes"
                strokeWidth={2}
                radius={8}
                activeIndex={2}
                activeBar={({ ...props }) => {
                  return (
                    <Rectangle
                      {...props}
                      fillOpacity={0.8}
                      stroke={props.payload.fill}
                      strokeDasharray={4}
                      strokeDashoffset={4}
                    />
                  );
                }}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
