"use client";
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";
// import "primereact/resources/themes/lara-light-purple/theme.css";
export default function PhoneNumber() {
  const [value, setValue] = useState();

  return (
    <div
      className="card flex justify-content-center"
      style={{
        paddingTop: "15px",
        paddingLeft: "10px",
      }}
    >
      <InputMask
        value={value}
        onChange={(e) => setValue(e.target.value)}
        mask="9999-9999999"
        placeholder="9999-9999999"
        tooltip="Enter you Number"
        style={{ height: "40px", width: "50rem" }}
      />
    </div>
  );
}
