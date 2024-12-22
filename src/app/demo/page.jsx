import TermsAndConditionsComponent from "@/components/HomePageComponents/RegistrationFormComponents/form/termsAndConditions/termsAndConditions";

import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-purple/theme.css";
export default function demoPage() {
  return (
    <>
      <div style={{ paddingTop: "5px", paddingLeft: "10px", width: "50rem" }}>
        {" "}
        <TermsAndConditionsComponent />
      </div>
    </>
  );
}
