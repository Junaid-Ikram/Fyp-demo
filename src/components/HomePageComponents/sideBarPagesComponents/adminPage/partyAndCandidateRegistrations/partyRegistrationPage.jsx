"use client";
import { useState } from "react";
import FileUploadComponent from "@/components/HomePageComponents/RegistrationFormComponents/form/fileUpload/fileUpload";
import CnicComponent from "@/components/HomePageComponents/RegistrationFormComponents/form/inputfields/cnic/cnic";
import UserName from "@/components/HomePageComponents/RegistrationFormComponents/form/inputfields/userName/userName";
import "./partyRegistrationPage.css";
import WalletAddress from "@/components/HomePageComponents/RegistrationFormComponents/form/inputfields/walletAddress/walletAddress";
export default function PartyRegistrationPage() {
  const [isPartyNameValid, setPartyNameValid] = useState(false);
  const [isPartyLeaderNameValid, setPartyLeaderNameValid] = useState(false);
  const [isCnicValid, setCnicValid] = useState(false);
  const [isPartyFlagUploaded, setPartyFlagUploaded] = useState(false);
  const [isWalletAddressValid, setWalletAddressValidity] = useState(false);
  return (
    <>
      <div className="partyRegistration-container">
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
        </div>{" "}
        <button className="partyRegisterbutton registerParty">
          Register Party
        </button>
      </div>
    </>
  );
}
