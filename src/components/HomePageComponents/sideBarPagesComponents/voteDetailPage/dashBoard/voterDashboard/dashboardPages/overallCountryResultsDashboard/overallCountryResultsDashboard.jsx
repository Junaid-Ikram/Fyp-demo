"use client";
import React, { useState } from "react";
import TotalVotersCount from "../personalConstituencyResultsDashboard/totalVotersCount/totalVotersCount";
import styles from "./OverallCountryResultsDashboard.module.css";
import { FaVoteYea } from "react-icons/fa";
import VoterDashboardTabBar from "../../voterDashboardComponents/tabBar/voterDashboardTabBar";
import PersonalConstituencyResultsDashboard from "../personalConstituencyResultsDashboard/personalConstituencyResultsDashboard";
import NationalAssemblyResults from "./assemblyTavs/nationalAssemblyResults";
import ProvincialAssemblyResults from "./assemblyTavs/provincialassemblyResults";
export default function OverallCountryResultsDashboard({ year }) {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className={styles.votingYearContainer}>
        <FaVoteYea className={styles.votingYearIcon} />
        <p className={styles.votingYearMessage}> Pakistan Elections {year}</p>
      </div>
      <div className={styles.totalCountsContainer}>
        <TotalVotersCount
          heading="Total MNA seats"
          count="10000"
          subheading="Total MNA seats all over Pakistan"
        />
        <TotalVotersCount
          heading="Total MPA seats"
          count="8000"
          subheading="Total MPA seats all over Pakistan"
        />
        <TotalVotersCount
          heading="Voter Turnout"
          count="42.3%"
          subheading="Total Registered Voters this year in Pakistan"
        />
        <TotalVotersCount
          heading="Voting Results"
          count="80.3%"
          subheading="Total Results of Elections Announced"
        />
      </div>
      <div>
        <VoterDashboardTabBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          firstTabName="National Assembly"
          secondTabName="Provincial Assembly"
        />
        {activeTab === 1 && <NationalAssemblyResults />}
        {activeTab === 2 && <ProvincialAssemblyResults />}
      </div>
    </>
  );
}
