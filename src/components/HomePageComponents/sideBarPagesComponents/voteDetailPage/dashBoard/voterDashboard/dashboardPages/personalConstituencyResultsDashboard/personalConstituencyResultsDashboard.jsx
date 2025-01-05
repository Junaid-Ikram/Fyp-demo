import styles from "./PersonalConstituencyResultsDashboard.module.css";
import TotalVotersCount from "./totalVotersCount/totalVotersCount";
import { DashboardPieChart } from "../../voterDashboardComponents/charts/pieChart/pieChart";
import { DashboardLineChart } from "../../voterDashboardComponents/charts/lineChart/lineChart";
import CandidatesLists from "../../voterDashboardComponents/lists/dashboardCandidatesLists";
export default function PersonalConstituencyResultsDashboard() {
  return (
    <>
      <div className={styles.totalCountsContainer}>
        <TotalVotersCount
          heading="NA-40 Total Voters"
          count="10000"
          subheading=" Total Registered Voters in your Constituency"
        />
        <TotalVotersCount
          heading="NA-40 Total Male Voters"
          count="8000"
          subheading="Registered Male Voters in your Constituency"
        />
        <TotalVotersCount
          heading="NA-40 Total Female Voters"
          count="2000 "
          subheading="Registered Female Voters in your Constituency"
        />
      </div>
      <div className={styles.totalCountsContainer}>
        {" "}
        <DashboardPieChart />
        <DashboardLineChart />
      </div>
      <div className={styles.totalCountsContainer}>
        <DashboardLineChart />
        <DashboardPieChart />
      </div>
      <div className={styles.totalCountsContainer}>
        <CandidatesLists />
      </div>
    </>
  );
}
