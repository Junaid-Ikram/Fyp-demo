"use client";
import { useState } from "react";
import styles from "../InputFields.module.css";
export default function UserName(props) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <div className={styles.userInputContainer}>
        <input
          className={styles.userInput}
          type="text"
          id="input"
          required
          value={inputValue}
          onChange={handleChange}
        />
        <label htmlFor="input" className={styles.label}>
          {props.name}
        </label>
        <div className={styles.tooltipContent}>
          <span className={styles.tooltipText}>{props.name}</span>
          <div className={styles.tooltipArrow}></div>
        </div>
      </div>
    </>
  );
}
