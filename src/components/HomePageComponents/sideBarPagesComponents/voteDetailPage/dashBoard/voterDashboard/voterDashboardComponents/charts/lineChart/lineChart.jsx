"use client";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import "./lineChart.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../../../SideBar/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../../../../../SideBar/ui/chart";

const chartData = [
  { month: "January", pmln: 200, pti: 150, ppp: 100, aml: 50 },
  { month: "February", pmln: 220, pti: 160, ppp: 120, aml: 60 },
  { month: "March", pmln: 240, pti: 170, ppp: 130, aml: 70 },
  { month: "April", pmln: 260, pti: 180, ppp: 140, aml: 80 },
  { month: "May", pmln: 275, pti: 200, ppp: 150, aml: 100 },
].map((data) => ({
  ...data,
  totalVotes: data.pmln + data.pti + data.ppp + data.aml,
}));

const chartConfig = {
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

export function DashboardLineChart() {
  return (
    <div className="lineChartContainer">
      {" "}
      <Card className="w-[750px] h-[369px] overflow-hidden p-4">
        <CardHeader>
          <CardTitle>MNA Votes Count</CardTitle>
          <CardDescription>
            Total Votes of Candidates and Counting
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="w-full h-[250px]">
            <LineChart
              width={700}
              height={250}
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="totalVotes"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="pmln"
                type="monotone"
                stroke="var(--color-pmln)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="pti"
                type="monotone"
                stroke="var(--color-pti)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="ppp"
                type="monotone"
                stroke="var(--color-ppp)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="aml"
                type="monotone"
                stroke="var(--color-aml)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        {/* <CardFooter>
     <div className="flex w-full items-start gap-2 text-sm">
       <div className="grid gap-2">
         <div className="flex items-center gap-2 font-medium leading-none">
           Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
         </div>
         <div className="flex items-center gap-2 leading-none text-muted-foreground">
           Showing total votes trend over time
         </div>
       </div>
     </div>
   </CardFooter> */}
      </Card>
    </div>
  );
}
