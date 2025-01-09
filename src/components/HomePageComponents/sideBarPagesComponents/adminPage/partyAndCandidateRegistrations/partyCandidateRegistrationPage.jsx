"use client";
import { useState } from "react";
import FileUploadComponent from "@/components/HomePageComponents/RegistrationFormComponents/form/fileUpload/fileUpload";
import CnicComponent from "@/components/HomePageComponents/RegistrationFormComponents/form/inputfields/cnic/cnic";
import UserName from "@/components/HomePageComponents/RegistrationFormComponents/form/inputfields/userName/userName";
import "./partyRegistrationPage.css";
import WalletAddress from "@/components/HomePageComponents/RegistrationFormComponents/form/inputfields/walletAddress/walletAddress";
export default function PartyCandidateRegistrationPage() {
  const [isCandidateNameValid, setCandidateNameValid] = useState(false);
  const [isCandidateSeatTypeValid, setCandidateSeatTypeValid] = useState(false);
  const [isCnicValid, setCnicValid] = useState(false);
  const [isWalletAddressValid, setWalletAddressValidity] = useState(false);
  const [isCandidateConstituencyValid, setCandidateConstituencyValid] =
    useState(false);
  const [isCandidatePartyNameValid, setCandidatePartyNameValid] =
    useState(false);
  const [isCandidateProfileImage, setCandidateProfileImageUploaded] =
    useState(false);
  const [isPartyFlagUploaded, setPartyFlagUploaded] = useState(false);
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
              Enter Candidate Details:
            </h1>
            <div>
              <UserName
                name="Candidate Name"
                setUserNameValidity={setCandidateNameValid}
              />
              <UserName
                name="Seat Type"
                setUserNameValidity={setCandidateSeatTypeValid}
              />
              <UserName
                name="Candidate Constituency"
                setUserNameValidity={setCandidateConstituencyValid}
              />
              <WalletAddress
                name="Enter Wallet Address"
                setWalletAddressValidity={setWalletAddressValidity}
              />
              <UserName
                name="Candidate Party Name"
                setUserNameValidity={setCandidatePartyNameValid}
              />
            </div>
          </div>
          <div>
            <h1 style={{ marginLeft: "10px", marginBottom: "20px" }}>
              Candidate CNIC:
            </h1>
            <div>
              <CnicComponent setCnicValid={setCnicValid} />
            </div>
          </div>

          <div>
            <h1 style={{ marginLeft: "10px", marginBottom: "20px" }}>
              Candidate Profile Picture:
            </h1>
            <div>
              <FileUploadComponent
                fileUploaded={setPartyFlagUploaded}
                fileInputId=" CandidateProfilePicture"
                headings=" Upload Candidate Profile Picture for Verification by Clicking Button"
              />
            </div>
          </div>
          <div>
            <h1
              style={{
                marginTop: "30px",
                marginLeft: "10px",
                marginBottom: "20px",
              }}
            >
              Party Sign:
            </h1>
            <div>
              <FileUploadComponent
                fileUploaded={setPartyFlagUploaded}
                fileInputId="partyFlag"
                headings=" Upload Party Sign image for Verification by Clicking Button"
              />
            </div>
          </div>
        </div>{" "}
        <button className="partyRegisterbutton registerParty">
          Register Candidate
        </button>
      </div>
    </>
  );
}
