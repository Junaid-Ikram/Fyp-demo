import "./dashboardPagesComponents.css";
import StepperComponent from "../RegistrationFormComponents/stepper/stepper";
export default function AdminRegistrationPage() {
  return (
    <>
      <div className="dashboard-pages-components-container">
        <StepperComponent voterRegistrationType="adminVoterRegistration" />
      </div>
    </>
  );
}
