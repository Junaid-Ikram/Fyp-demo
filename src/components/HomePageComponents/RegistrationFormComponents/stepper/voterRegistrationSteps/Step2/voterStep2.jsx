import FileUploadComponent from "../../../form/fileUpload/fileUpload";
import "primereact/resources/themes/lara-light-purple/theme.css";
import FingerprintVerification from "../../../form/fingerPrint/fingerPrint";
export default function VoterStep2() {
  return (
    <>
      <div style={{ overflowY: "scroll", height: "300px" }}>
        {" "}
        <div>
          <h1 style={{ marginBottom: "10px", borderBottom: "1px solid black" }}>
            CNIC VERIFICATION
          </h1>
          <FileUploadComponent />
        </div>
        <div>
          <h1
            style={{
              marginBottom: "10px",
              borderBottom: "1px solid black",
              marginTop: "53px",
            }}
          >
            Fingerprint Verification
          </h1>
          <FingerprintVerification />
        </div>
      </div>
    </>
  );
}
