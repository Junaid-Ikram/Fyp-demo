"use client";
import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
// import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
export default function CalenderComponent() {
  const [date, setDate] = useState(null);

  return (
    <>
      <div
        className="card flex justify-content-center"
        style={{
          paddingTop: "5px",
          paddingLeft: "10px",
        }}
      >
        <Calendar
          value={date}
          onChange={(e) => setDate(e.value)}
          style={{
            border: "1px solid #ced4da",
            height: "40px",
            width: "50rem",
          }}
        />
      </div>
    </>
  );
}
