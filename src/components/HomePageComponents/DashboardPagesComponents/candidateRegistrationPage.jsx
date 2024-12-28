import "../DashboardPagesComponents/dashboardPagesComponents.css";
import StepperComponent from "../RegistrationFormComponents/stepper/stepper";

export default function CandidateRegistrationPage() {
  return (
    <>
      <div className="dashboard-pages-components-container">
        <StepperComponent voterRegistrationType="candidateRegistration" />
      </div>
    </>
  );
}
