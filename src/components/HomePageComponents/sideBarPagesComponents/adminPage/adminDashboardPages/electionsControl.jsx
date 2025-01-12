import ElectionControlCenter from "./electionControlComponents/electionControlCenter/electionControlCenter";
import RegistrationControlCenter from "./electionControlComponents/voterAndCandidateRegistrationControlCnter/voterAndCandidateRegistrationControlCnter";

export default function ElectionsControl() {
  return (
    <div>
      <ElectionControlCenter />
      <RegistrationControlCenter />
    </div>
  );
}
