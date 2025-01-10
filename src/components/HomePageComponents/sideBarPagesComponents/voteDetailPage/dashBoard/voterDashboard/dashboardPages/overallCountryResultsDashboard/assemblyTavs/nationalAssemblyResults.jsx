import { BarCharts } from "../../../voterDashboardComponents/charts/barChart/barChart";
import { PieChartLabel } from "../../../voterDashboardComponents/charts/pieChartLabel/pieChartLabel";

export default function NationalAssemblyResults() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BarCharts
          title="Party-Wise Seat Distribution"
          description="National Assembly Seats win by parties in Pakistan"
        />
        <PieChartLabel
          title="Vote Share Analysis"
          description="Overall Percentage of Seats win by parties in Pakistan"
        />
      </div>
    </>
  );
}
