import BlockchainStatus from "./electionStatsComponents/blockChainStatus/blockChainStatus";
import VotingStatusCards from "./electionStatsComponents/statusCards/votingStatusCards";

export default function ElectionsStats() {
  return (
    <div>
      <BlockchainStatus />
      <VotingStatusCards />
    </div>
  );
}
