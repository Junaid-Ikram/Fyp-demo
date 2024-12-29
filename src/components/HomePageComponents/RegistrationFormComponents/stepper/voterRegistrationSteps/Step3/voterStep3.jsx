import "primereact/resources/themes/lara-light-purple/theme.css";
import TermsAndConditionsComponent from "../../../form/termsAndConditions/termsAndConditions";
export default function VoterStep3({ registrationType }) {
  return (
    <>
      <div>
        <TermsAndConditionsComponent registrationType={registrationType} />
      </div>
    </>
  );
}
