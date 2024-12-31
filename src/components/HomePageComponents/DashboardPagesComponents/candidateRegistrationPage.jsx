"use client";
import { useState } from "react";
import "../DashboardPagesComponents/dashboardPagesComponents.css";
import StepperComponent from "../RegistrationFormComponents/stepper/stepper";
import UserRegisteredPannel from "./userRegisteredPannelComponent/userRegisteredPannel";
export default function CandidateRegistrationPage() {
  const [
    isCandidateRegistrationFormVisible,
    setCandidateRegistrationFormVisibility,
  ] = useState(true);
  return (
    <>
      {isCandidateRegistrationFormVisible ? (
        <div className="dashboard-pages-components-container">
          <StepperComponent
            voterRegistrationType="candidateRegistration"
            setCandidateRegistrationFormVisibility={
              setCandidateRegistrationFormVisibility
            }
          />
        </div>
      ) : (
        <UserRegisteredPannel registrationTitle="Candidate" />
      )}
    </>
  );
}
