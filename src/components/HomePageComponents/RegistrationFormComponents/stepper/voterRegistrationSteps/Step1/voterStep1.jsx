"use cleint";
import { useEffect, useState } from "react";
import UserName from "../../../form/inputfields/userName/userName";
import CnicComponent from "../../../form/inputfields/cnic/cnic";
import CalenderComponent from "../../../form/calender/calender";
import AddressComponent from "../../../form/address/address";
import PhoneNumber from "../../../form/inputfields/phoneNumber/phoneNumber";
import RadioComponent from "../../../form/radio/radio";
import "primereact/resources/themes/lara-light-purple/theme.css";
import voterStyles from "./VoterStep1.module.css";
import styles from "../StepperStepsScrollbar.module.css";
export default function VoterStep1({ registrationType, setIsStep1Invalid }) {
  const [isFirstNameValid, setFirstNameValid] = useState(false);
  const [isLastNameValid, setLastNameValid] = useState(false);
  const [isCnicValid, setCnicValid] = useState(false);
  const [isPhoneNumberValid, setPhoneNumberValid] = useState(false);
  useEffect(() => {
    if (
      isFirstNameValid &&
      isLastNameValid &&
      isCnicValid &&
      isPhoneNumberValid
    ) {
      setIsStep1Invalid(false);
    } else {
      setIsStep1Invalid(true);
    }
  }, [
    isFirstNameValid,
    isLastNameValid,
    isCnicValid,
    isPhoneNumberValid,
    setIsStep1Invalid,
  ]);

  return (
    <>
      <div
        className={`${styles.stepperScrollBar} ${voterStyles.voterRegistrationStep1}`}
      >
        <div>
          <h1 className={voterStyles.subheadings}>
            Enter Your Full Name (As per CNIC):
          </h1>
          <div>
            {/* {registrationType === "normalVoterRegistration" ? (
              <UserName name="Father Name" />
            ) : null} */}
            <UserName
              name="First Name"
              setUserNameValidity={setFirstNameValid}
            />
            <UserName name="Last Name" setUserNameValidity={setLastNameValid} />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h1 className={voterStyles.subheadings}>Enter Your CNIC:</h1>
          <div>
            {" "}
            <CnicComponent setCnicValid={setCnicValid} />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h1 className={voterStyles.subheadings}>Enter Your Date of Birth:</h1>
          <div>
            {" "}
            <CalenderComponent />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h1 className={voterStyles.subheadings}>Select Your address:</h1>
          <div>
            {" "}
            <AddressComponent />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h1 className={voterStyles.subheadings}>Enter Your Phone Number:</h1>
          <div>
            {" "}
            <PhoneNumber setPhoneNumberValid={setPhoneNumberValid} />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h1 className={voterStyles.subheadings}>Select Your Gender:</h1>
          <div>
            {" "}
            <RadioComponent />
          </div>
        </div>
      </div>
    </>
  );
}
