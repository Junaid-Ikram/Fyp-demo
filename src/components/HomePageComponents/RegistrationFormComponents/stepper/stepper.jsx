"use client";
import { useState } from "react";
import "./newStepperComponent.css";
import "primeicons/primeicons.css";
import VoterStep1 from "./voterRegistrationSteps/Step1/voterStep1";
import VoterStep2 from "./voterRegistrationSteps/Step2/voterStep2";
import VoterStep3 from "./voterRegistrationSteps/Step3/voterStep3";
import Toast from "../form/toast/toast";

export default function StepperComponent(props) {
  const { voterRegistrationType } = props;
  const [currentStep, setCurrentStep] = useState(1);
  const [isStep1Invalid, setIsStep1Invalid] = useState(true); // should be true
  const [isStep2Invalid, setIsStep2Invalid] = useState(true); // should be true
  const [showToast, setShowToast] = useState(false);

  const steps = [
    {
      id: 1,
      label: "Step 1",
      content: (
        <VoterStep1
          registrationType={voterRegistrationType}
          setIsStep1Invalid={setIsStep1Invalid}
        />
      ),
    },
    {
      id: 2,
      label: "Step 2",
      content: (
        <VoterStep2
          registrationType={voterRegistrationType}
          setIsStep2Invalid={setIsStep2Invalid}
        />
      ),
    },
    {
      id: 3,
      label: "Step 3",
      content: <VoterStep3 registrationType={voterRegistrationType} />,
    },
  ];

  function handleNext(stepId) {
    if (stepId === 1 && isStep1Invalid) {
      setShowToast(true);
      return;
    }
    if (stepId === 2 && isStep2Invalid) {
      setShowToast(true);
      return;
    }
    if (stepId < steps.length) {
      setShowToast(false);
      setCurrentStep(stepId + 1);
    }
  }

  function handleBack() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  const getStepClass = (stepId) => {
    const isActive = stepId === currentStep;
    const isCompleted = stepId < currentStep;
    return {
      indicator: isActive ? "active" : "inactive",
      label: isCompleted || isActive ? "active" : "inactive",
      connector: stepId < currentStep ? "active" : "inactive",
    };
  };

  const renderStep = (step) => {
    const { indicator, label, connector } = getStepClass(step.id);
    return (
      <div key={step.id} className="step">
        {" "}
        <div className={`step-indicator ${indicator}`}>{step.id}</div>
        <div className={`step-label ${label}`}>{step.label}</div>
        {step.id < steps.length && (
          <div className={`connector-line ${connector}`}></div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="stepper-container">
        <div className="stepper">{steps.map(renderStep)}</div>

        <div className="step-content">
          {steps.find((step) => step.id === currentStep)?.content}
        </div>

        <div className="navigation-buttons">
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="button back"
              style={{ fontSize: "17px" }}
            >
              <i
                className="pi pi-chevron-left"
                style={{ paddingRight: "10px" }}
              ></i>
              Back
            </button>
          )}
          {currentStep === 1 && (
            <button
              onClick={() => handleNext(currentStep)}
              className="button next"
              style={{
                fontSize: "17px",
                marginLeft: "auto",
                display: "block",
              }}
            >
              Next
              <i
                className="pi pi-chevron-right"
                style={{ paddingLeft: "10px" }}
              ></i>
            </button>
          )}

          {currentStep === 2 && (
            <button
              onClick={() => {
                handleNext(currentStep);
                // setShowToast(true);
              }}
              className="button next"
              style={{ fontSize: "17px" }}
            >
              Next
              <i
                className="pi pi-chevron-right"
                style={{ paddingLeft: "10px" }}
              ></i>
            </button>
          )}

          {currentStep === 3 && (
            <button
              onClick={() => handleNext(currentStep)}
              className="button next"
              style={{ fontSize: "17px" }}
            >
              Register
              <i
                className="pi pi-check"
                style={{ paddingLeft: "10px", fontWeight: "bold" }}
              ></i>
            </button>
          )}
        </div>
      </div>
      {showToast && currentStep === 1 ? (
        <Toast
          message="Please enter all fields"
          type="Error"
          onClose={() => setShowToast(false)}
        />
      ) : null}
      {showToast && currentStep === 2 ? (
        <Toast
          message="Please Upload all images and Verify Fingerprint"
          type="Verification Error"
          onClose={() => setShowToast(false)}
        />
      ) : null}
    </>
  );
}
