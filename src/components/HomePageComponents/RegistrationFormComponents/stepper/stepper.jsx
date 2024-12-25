"use client";
import { useState } from "react";
import "./newStepperComponent.css";
import "primeicons/primeicons.css";

export default function StepperComponent({
  VoterStep1,
  VoterStep2,
  VoterStep3,
}) {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, label: "Step 1", content: VoterStep1 },
    { id: 2, label: "Step 2", content: VoterStep2 },
    { id: 3, label: "Step 3", content: VoterStep3 },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

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
        <div className={`step-indicator ${indicator}`}>{step.id}</div>
        <div className={`step-label ${label}`}>{step.label}</div>
        {step.id < steps.length && (
          <div className={`connector-line ${connector}`}></div>
        )}
      </div>
    );
  };

  return (
    <div className="stepper-container">
      <div className="stepper">{steps.map(renderStep)}</div>

      <div className="step-content">
        {steps.find((step) => step.id === currentStep)?.content}
      </div>

      <div
        className={`navigation-buttons ${currentStep === 1 ? "single" : ""}`}
      >
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

        <button
          onClick={handleNext}
          className="button next"
          style={{ fontSize: "17px" }}
        >
          Next
          <i
            className="pi pi-chevron-right"
            style={{ paddingLeft: "10px" }}
          ></i>
        </button>
      </div>
    </div>
  );
}
