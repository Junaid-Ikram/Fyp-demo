"use client";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
// import "primereact/resources/themes/lara-light-purple/theme.css";
export default function UserName(props) {
  const [value, setValue] = useState(null);

  return (
    <div
      className="card flex justify-content-center"
      style={{
        paddingTop: "25px",
        paddingLeft: "10px",
      }}
    >
      <FloatLabel>
        <InputText
          id={props.name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            height: "40px",
            width: "50rem",
            border: "2px solid #ced4da",
          }}
          tooltip={`Enter your ${props.name}`}
        />
        <label htmlFor={props.name}>{props.name}</label>
      </FloatLabel>
    </div>
  );
}
