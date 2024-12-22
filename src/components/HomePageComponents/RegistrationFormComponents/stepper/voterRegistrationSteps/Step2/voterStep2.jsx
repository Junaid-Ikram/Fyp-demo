import FileUploadComponent from "../../../form/fileUpload/fileUpload";
import "primereact/resources/themes/lara-light-purple/theme.css";
export default function VoterStep2() {
  return (
    <>
      <div style={{ overflowY: "scroll", height: "300px" }}>
        {" "}
        <h1 style={{ marginBottom: "10px", borderBottom: "1px solid black" }}>
          CNIC VERIFICATION
        </h1>
        <FileUploadComponent />
      </div>
    </>
  );
}
