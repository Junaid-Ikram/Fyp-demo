"use client";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import "./pieChart.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../../../SideBar/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
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
  aml: {
    label: "AML",
    color: "hsl(var(--chart-4))",
  },
};

const chartData = [
  { candidates: "pmln", votes: 275 },
  { candidates: "pti", votes: 200 },
  { candidates: "ppp", votes: 150 },
  { candidates: "aml", votes: 100 },
].map((item) => ({
  ...item,
  fill: chartConfig[item.candidates]?.color || "hsl(var(--chart-default))",
}));

export function DashboardPieChart({ cardTtile }) {
  const totalVotes = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.votes, 0);
  }, []);

  return (
    <div className="pieChartContainer">
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>{cardTtile} Votes Count</CardTitle>
          <CardDescription>
            Total Votes of Candidates and Counting
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[350px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="votes"
                nameKey="candidates"
                innerRadius={65}
                outerRadius={100}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-xl font-bold"
                          >
                            {totalVotes.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Votes
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
              <ChartLegend
                content={<ChartLegendContent nameKey="candidates" />}
                className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
        {/* <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter> */}
      </Card>
    </div>
  );
}
