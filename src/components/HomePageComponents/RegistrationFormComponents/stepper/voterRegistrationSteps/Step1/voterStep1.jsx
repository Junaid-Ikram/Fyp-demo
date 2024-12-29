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
import DropDown from "../../../form/dropdown/dropDown";
export default function VoterStep1({ registrationType, setIsStep1Invalid }) {
  const [isFirstNameValid, setFirstNameValid] = useState(false);
  const [isLastNameValid, setLastNameValid] = useState(false);
  const [isCnicValid, setCnicValid] = useState(false);
  const [isPhoneNumberValid, setPhoneNumberValid] = useState(false);
  const [isGenderSelected, setGenderSelected] = useState(false);
  const [isDateSelected, setDateSelected] = useState(false);
  useEffect(() => {
    if (registrationType === "candidateRegistration") {
      if (
        isFirstNameValid &&
        isLastNameValid &&
        isCnicValid &&
        isPhoneNumberValid &&
        isGenderSelected &&
        isDateSelected
      ) {
        setIsStep1Invalid(false);
      } else {
        setIsStep1Invalid(true); //should be true
      }
    } else {
      if (
        isFirstNameValid &&
        isLastNameValid &&
        isCnicValid &&
        isPhoneNumberValid &&
        isGenderSelected &&
        isDateSelected
      ) {
        setIsStep1Invalid(false);
      } else {
        setIsStep1Invalid(true); //should be true
      }
    }
  }, [
    isFirstNameValid,
    isLastNameValid,
    isCnicValid,
    isPhoneNumberValid,
    isGenderSelected,
    isDateSelected,
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
            <UserName
              name="First Name"
              setUserNameValidity={setFirstNameValid}
            />
            <UserName name="Last Name" setUserNameValidity={setLastNameValid} />
          </div>
        </div>
        <div>
          <h1 className={voterStyles.otherSubheadings}>Enter Your CNIC:</h1>
          <div>
            {" "}
            <CnicComponent setCnicValid={setCnicValid} />
          </div>
        </div>
        <div>
          <h1 className={voterStyles.otherSubheadings}>
            Enter Your Phone Number:
          </h1>
          <div>
            {" "}
            <PhoneNumber setPhoneNumberValid={setPhoneNumberValid} />
          </div>
        </div>
        <div>
          <h1 className={voterStyles.otherSubheadings}>
            Enter Your Date of Birth:
          </h1>
          <div>
            {" "}
            <CalenderComponent setDateSelected={setDateSelected} />
          </div>
        </div>
        <div>
          <h1 className={voterStyles.otherSubheadings}>Select Your address:</h1>
          <div>
            {" "}
            <AddressComponent selections="Address" />
          </div>
        </div>
        {registrationType === "candidateRegistration" ? (
          <>
            <div>
              <h1 className={voterStyles.otherSubheadings}>
                Select Your Constituency:
              </h1>
              <div>
                {" "}
                <AddressComponent selections="Constituency" />
              </div>
            </div>
          </>
        ) : null}
        {registrationType === "candidateRegistration" ? (
          <>
            <div>
              <h1 className={voterStyles.otherSubheadings}>
                Select Your Sign:
              </h1>
              <div style={{ marginLeft: "10px", marginTop: "20px" }}>
                {" "}
                <DropDown />
              </div>
            </div>
          </>
        ) : null}

        <div>
          <h1 className={voterStyles.otherSubheadings}>Select Your Gender:</h1>
          <div>
            {" "}
            <RadioComponent setGenderSelected={setGenderSelected} />
          </div>
        </div>
      </div>
    </>
  );
}
