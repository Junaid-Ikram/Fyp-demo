"use client";
import "../DashboardPagesComponents/dashboardPagesComponents.css";
import StepperComponent from "../RegistrationFormComponents/stepper/stepper";

export default function VoterRegistrationPage() {
  return (
    <>
      <div className="dashboard-pages-components-container">
        <StepperComponent voterRegistrationType="normalVoterRegistration" />
      </div>
    </>
  );
}
