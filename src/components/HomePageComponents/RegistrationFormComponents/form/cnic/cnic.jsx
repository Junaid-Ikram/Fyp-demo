"use client";
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";
// import "primereact/resources/themes/lara-light-purple/theme.css";
export default function CnicComponent() {
  const [value, setValue] = useState();

  return (
    <div
      className="card flex justify-content-center"
      style={{
        paddingTop: "5px",
        paddingLeft: "10px",
      }}
    >
      <InputMask
        value={value}
        onChange={(e) => setValue(e.target.value)}
        mask="99999-9999999-9"
        placeholder="99999-9999999-9"
        style={{ height: "40px", width: "50rem", border: "2px solid #ced4da" }}
      />
    </div>
  );
}
