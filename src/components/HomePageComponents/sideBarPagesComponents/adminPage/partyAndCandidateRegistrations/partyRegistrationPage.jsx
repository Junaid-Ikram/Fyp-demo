"use client";
import { useState } from "react";
import FileUploadComponent from "@/components/HomePageComponents/RegistrationFormComponents/form/fileUpload/fileUpload";
import CnicComponent from "@/components/HomePageComponents/RegistrationFormComponents/form/inputfields/cnic/cnic";
import UserName from "@/components/HomePageComponents/RegistrationFormComponents/form/inputfields/userName/userName";
import "./partyRegistrationPage.css";
import WalletAddress from "@/components/HomePageComponents/RegistrationFormComponents/form/inputfields/walletAddress/walletAddress";
import FingerprintVerification from "@/components/HomePageComponents/RegistrationFormComponents/form/fingerPrint/fingerPrint";
import PartyAndCandidateToast from "./partyAndCandidateToast/partyAndCandidateToast";

export default function PartyRegistrationPage() {
  const [isPartyNameValid, setPartyNameValid] = useState(false);
  const [isPartyLeaderNameValid, setPartyLeaderNameValid] = useState(false);
  const [isCnicValid, setCnicValid] = useState(false);
  const [isPartyFlagUploaded, setPartyFlagUploaded] = useState(false);
  const [isWalletAddressValid, setWalletAddressValidity] = useState(false);

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleRegisterParty = () => {
    if (
      isPartyNameValid &&
      isPartyLeaderNameValid &&
      isCnicValid &&
      isPartyFlagUploaded &&
      isWalletAddressValid
    ) {
      // Show success toast
      setToastMessage("Party successfully registered!");
      setToastType("success");
      setShowToast(true);

      // Reset form fields
      setPartyNameValid(false);
      setPartyLeaderNameValid(false);
      setCnicValid(false);
      setPartyFlagUploaded(false);
      setWalletAddressValidity(false);

      // Optionally reload the page to reset
      // window.location.reload();
    } else {
      // Show error toast
      setToastMessage("Please fill all the required fields correctly.");
      setToastType("error");
      setShowToast(true);
    }
  };

  return (
    <>
      <div className="partyRegistration-container">
        <h1 className="partyRegistrationHeader">Party Registration</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            height: "500px",
            overflowY: "scroll",
          }}
        >
          <div>
            <h1 style={{ marginLeft: "10px", marginBottom: "20px" }}>
              Party and Party Leader Name with wallet Address:
            </h1>
            <div>
              <UserName
                name="Party Name"
                setUserNameValidity={setPartyNameValid}
              />
              <UserName
                name="Party Leader Name"
                setUserNameValidity={setPartyLeaderNameValid}
              />
              <WalletAddress
                name="Enter Wallet Address"
                setWalletAddressValidity={setWalletAddressValidity}
              />
            </div>
          </div>
          <div>
            <h1 style={{ marginLeft: "10px", marginBottom: "20px" }}>
              Party Leader CNIC:
            </h1>
            <div>
              <CnicComponent setCnicValid={setCnicValid} />
            </div>
          </div>
          <div>
            <h1 style={{ marginLeft: "10px", marginBottom: "20px" }}>
              Party Flag Name and Sign:
            </h1>
            <div>
              <UserName
                name="Party Sign Name"
                setUserNameValidity={setPartyLeaderNameValid}
              />
              <FileUploadComponent
                fileUploaded={setPartyFlagUploaded}
                fileInputId="partyFlag"
                headings=" Upload Party Sign image for Verification by Clicking Button"
              />
            </div>
          </div>
          <div style={{ marginTop: "40px", marginLeft: "-25px" }}>
            <FingerprintVerification />
          </div>
          <div>
            <h1
              style={{
                marginTop: "20px",
                marginLeft: "10px",
                marginBottom: "20px",
              }}
            >
              Party Leader Profile Image:
            </h1>
            <div>
              <FileUploadComponent
                fileUploaded={setPartyFlagUploaded}
                fileInputId="partyLeaderImage"
                headings=" Upload Party Leader image for Verification by Clicking Button"
              />
            </div>
          </div>
        </div>
        <button
          className="partyRegisterbutton registerParty"
          onClick={handleRegisterParty}
        >
          Register Party
        </button>
      </div>

      {showToast && (
        <PartyAndCandidateToast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}
