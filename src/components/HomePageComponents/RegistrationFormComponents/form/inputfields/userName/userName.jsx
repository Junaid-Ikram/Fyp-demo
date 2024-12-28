"use client";
import { useState } from "react";
import styles from "../InputFields.module.css";

export default function UserName({ name, setUserNameValidity }) {
  const [userNameinputValue, setuserNameinputValue] = useState("");
  const [userNameinputIsTouched, setUserNameinputIsTouched] = useState(false);
  const [userNameinputIsInvalid, setUserNameinputIsInvalid] = useState(false);
  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");

  function handleChange(e) {
    let value = e.target.value;
    let newErrorMessage = "";
    if (/^[a-z]/.test(value)) {
      newErrorMessage = "The first letter should be capitalized.";
    } else if (/[^a-zA-Z]/.test(value)) {
      newErrorMessage = "Number/Signs or spaces not allowed";
    }

    setUserNameErrorMessage(newErrorMessage);
    value = value.replace(/[^a-zA-Z]/g, "");
    setuserNameinputValue(value);
    if (value.trim() === "") {
      setUserNameinputIsInvalid(true);
      setUserNameValidity(false); // Invalid if empty
    } else {
      setUserNameinputIsInvalid(false);
      setUserNameValidity(true); // Valid if not empty
    }
  }

  function handleBlur() {
    setUserNameinputIsTouched(true);
    if (userNameinputValue.trim() === "") {
      setUserNameinputIsInvalid(true);
      setUserNameErrorMessage("Please Enter a valid Input");
      setUserNameValidity(false);
    }
  }

  return (
    <>
      <div
        className={`${styles.userInputContainer} ${
          userNameinputIsInvalid || userNameErrorMessage ? styles.invalid : ""
        }`}
      >
        <input
          className={styles.userInput}
          type="text"
          id="input"
          required
          value={userNameinputValue}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="input" className={styles.label}>
          {name}
        </label>
        <div className={styles.tooltipContent}>
          <span className={styles.tooltipText}>{name}</span>
          <div className={styles.tooltipArrow}></div>
        </div>
        {userNameinputIsTouched &&
          (userNameinputIsInvalid || userNameErrorMessage) && (
            <span className={styles.userErrorText}>
              {userNameErrorMessage || "Please Enter a valid Input"}
            </span>
          )}
      </div>
    </>
  );
}
