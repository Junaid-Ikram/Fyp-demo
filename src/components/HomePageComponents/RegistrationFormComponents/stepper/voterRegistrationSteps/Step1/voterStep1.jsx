import UserName from "../../../form/userName/userName";
import CnicComponent from "../../../form/cnic/cnic";
import CalenderComponent from "../../../form/calender/calender";
import AddressComponent from "../../../form/address/address";
import PhoneNumber from "../../../form/phoneNumber/phoneNumber";
import RadioComponent from "../../../form/radio/radio";
import "primereact/resources/themes/lara-light-purple/theme.css";
export default function VoterStep1() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          height: "400px",
          overflowY: "scroll",
        }}
      >
        <div>
          <h1
            style={{
              marginLeft: "10px",
              marginBottom: "2px",
            }}
          >
            Enter Your Full Name (As per CNIC):
          </h1>
          <div>
            <UserName name="First Name" />
            <UserName name="Last Name" />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h1 style={{ marginLeft: "10px", marginBottom: "2px" }}>
            Enter Your CNIC:
          </h1>
          <div>
            {" "}
            <CnicComponent />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h1 style={{ marginLeft: "10px", marginBottom: "2px" }}>
            Enter Your Date of Birth:
          </h1>
          <div>
            {" "}
            <CalenderComponent />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h1 style={{ marginLeft: "10px", marginBottom: "2px" }}>
            Select Your address:
          </h1>
          <div>
            {" "}
            <AddressComponent />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h1 style={{ marginLeft: "10px", marginBottom: "2px" }}>
            Enter Your Phone Number:
          </h1>
          <div>
            {" "}
            <PhoneNumber />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h1 style={{ marginLeft: "10px", marginBottom: "2px" }}>
            Select Your Gender:
          </h1>
          <div>
            {" "}
            <RadioComponent />
          </div>
        </div>
      </div>
    </>
  );
}
