"use client";
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
// import "primereact/resources/themes/mdc-light-deeppurple/theme.css";
import "primeicons/primeicons.css";

export default function RadioComponent() {
  const [gender, setGender] = useState(null);

  return (
    <div
      className="card flex justify-content-center"
      style={{
        paddingTop: "15px",
        paddingLeft: "10px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
        <div className="flex align-items-center">
          <RadioButton
            inputId="gender1"
            name="gender"
            value="Male"
            onChange={(e) => setGender(e.value)}
            checked={gender === "Male"}
          />
          <label
            htmlFor="gender1"
            className="ml-2"
            style={{ marginLeft: "10px" }}
          >
            Male
          </label>
        </div>
        <div className="flex align-items-center">
          <RadioButton
            inputId="gender2"
            name="gender"
            value="Female"
            onChange={(e) => setGender(e.value)}
            checked={gender === "Female"}
          />
          <label
            htmlFor="gender2"
            className="ml-2"
            style={{ marginLeft: "10px" }}
          >
            Female
          </label>
        </div>
        <div className="flex align-items-center">
          <RadioButton
            inputId="gender3"
            name="gender"
            value="Other"
            onChange={(e) => setGender(e.value)}
            checked={gender === "Other"}
          />
          <label
            htmlFor="gender3"
            className="ml-2"
            style={{ marginLeft: "10px" }}
          >
            Other
          </label>
        </div>
      </div>
    </div>
  );
}
