import "../DashboardPagesComponents/dashboardPagesComponents.css";
import StepperComponent from "../RegistrationFormComponents/stepper/stepper";
import VoterStep1 from "../RegistrationFormComponents/stepper/voterRegistrationSteps/Step1/voterStep1";
import VoterStep2 from "../RegistrationFormComponents/stepper/voterRegistrationSteps/Step2/voterStep2";
import VoterStep3 from "../RegistrationFormComponents/stepper/voterRegistrationSteps/Step3/voterStep3";
export default function VoterRegistrationPage() {
  return (
    <>
      <div className="dashboard-pages-components-container">
        <StepperComponent
          VoterStep1={<VoterStep1 />}
          VoterStep2={<VoterStep2 />}
          VoterStep3={<VoterStep3 />}
        />
      </div>
    </>
  );
}
