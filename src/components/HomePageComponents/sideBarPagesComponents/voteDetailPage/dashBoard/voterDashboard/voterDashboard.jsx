import { useState } from "react";
import VoterDashboardTabBar from "./voterDashboardComponents/tabBar/voterDashboardTabBar";
import styles from "./VoterDashboard.module.css";
import PersonalConstituencyResultsDashboard from "./dashboardPages/personalConstituencyResultsDashboard/personalConstituencyResultsDashboard";
import OverallCountryResultsDashboard from "./dashboardPages/overallCountryResultsDashboard/overallCountryResultsDashboard";
export default function VoterDashboard() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className={styles.voterdashBoardContainer}>
      <VoterDashboardTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 1 && <PersonalConstituencyResultsDashboard />}
      {activeTab === 2 && <OverallCountryResultsDashboard />}
    </div>
  );
}
