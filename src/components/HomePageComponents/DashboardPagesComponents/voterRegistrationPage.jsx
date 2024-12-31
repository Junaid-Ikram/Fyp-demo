"use client";
import { useState } from "react";
import "../DashboardPagesComponents/dashboardPagesComponents.css";
import StepperComponent from "../RegistrationFormComponents/stepper/stepper";
import UserRegisteredPannel from "./userRegisteredPannelComponent/userRegisteredPannel";
export default function VoterRegistrationPage() {
  const [isVoterRegistrationFormVisible, setVoterRegistrationFormVisibility] =
    useState(true);
  return (
    <>
      {isVoterRegistrationFormVisible ? (
        <div className="dashboard-pages-components-container">
          <StepperComponent
            voterRegistrationType="normalVoterRegistration"
            setVoterRegistrationFormVisibility={
              setVoterRegistrationFormVisibility
            }
          />
        </div>
      ) : (
        <UserRegisteredPannel registrationTitle="Voter" />
      )}
    </>
  );
}
