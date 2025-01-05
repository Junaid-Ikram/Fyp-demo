import React from "react";
import Image from "next/image";
import styles from "./DashboardCandidatesLists.module.css";
import avatar from "../../../../../../../../assets/images/avatar.jpg";

const CandidatesLists = () => {
  const candidates = [
    {
      id: "#12598",
      profileImage: avatar,
      name: "Sardar Mehtab",
      party: "PML-N",
      votes: 5000,
      totalVotes: 10000,
      constituency: "NA-40",
    },
    {
      id: "#20587",
      profileImage: avatar,
      name: "Ahmed Ali",
      party: "PPP",
      votes: 3000,
      totalVotes: 10000,
      constituency: "NA-40",
    },
    {
      id: "#10020",
      profileImage: avatar,
      name: "Imran Khan",
      party: "PTI",
      votes: 2000,
      totalVotes: 10000,
      constituency: "NA-40",
    },
  ];

  const partyClasses = {
    "PML-N": "pml-n",
    PPP: "ppp",
    PTI: "pti",
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Candidate Vote Stats</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile</th>
            <th>Candidate Details</th>
            <th>Votes</th>
            <th>Total Votes</th>
            <th>Constituency</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index} className={styles.row}>
              <td className={styles.id}>{candidate.id}</td>
              <td>
                <div className={styles.profileImageWrapper}>
                  <Image
                    src={candidate.profileImage}
                    alt={candidate.name}
                    width={50} // Adjust size as needed
                    height={50} // Adjust size as needed
                    className={styles.profileImage}
                  />
                </div>
              </td>
              <td>
                <div className={styles.name}>{candidate.name}</div>
                <span
                  className={`${styles.partyBadge} ${
                    styles[partyClasses[candidate.party]]
                  }`}
                >
                  {candidate.party}
                </span>
              </td>
              <td>
                <div className={styles.votes}>
                  {candidate.votes.toLocaleString()}
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progress}
                    style={{
                      width: `${
                        (candidate.votes / candidate.totalVotes) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <small className={styles.percentage}>
                  {((candidate.votes / candidate.totalVotes) * 100).toFixed(1)}{" "}
                  % of total
                </small>
              </td>
              <td className={styles.totalVotes}>
                {candidate.totalVotes.toLocaleString()}
              </td>
              <td>
                <span className={styles.constituencyBadge}>
                  {candidate.constituency}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidatesLists;
