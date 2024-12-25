"use client";
import React, { useState } from "react";
import styles from "../InputFields.module.css";

export default function PhoneNumber() {
  const [phoneNumberValue, setPhoneNumberValue] = useState("");

  const handlePhoneNumberValueChange = (event) => {
    let value = event.target.value.replace(/\D/g, "");
    if (value.length > 4) {
      value = value.slice(0, 4) + "-" + value.slice(4);
    }
    setPhoneNumberValue(value.slice(0, 12));
  };

  return (
    <div className={styles.userInputContainer}>
      <input
        className={styles.userInput}
        type="text"
        id="phoneNumberInput"
        required
        placeholder="9999-9999999"
        value={phoneNumberValue}
        onChange={handlePhoneNumberValueChange}
        pattern="\d{4}-\d{7}"
        title="Please enter a valid CNIC in the format 99999-9999999-9"
      />
      <div className={styles.tooltipContent}>
        <span className={styles.tooltipText}>Enter Number</span>
        <div className={styles.tooltipArrow}></div>
      </div>
    </div>
  );
}
