"use client";
import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import styles from "./Calender.module.css";

export default function CalenderComponent({ setDateSelected }) {
  const [date, setDate] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const currentDate = new Date();

  const handleDateChange = (e) => {
    setDate(e.value);
    if (e.value) {
      setDateSelected(true);
    }
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <div
        className={styles.calendarContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Calendar
          value={date}
          onChange={handleDateChange}
          maxDate={currentDate}
          className={styles.calendarInput}
        />
        {showTooltip && (
          <div className={styles.calendarTooltipContent}>
            <span className={styles.calendarTooltipText}>
              Enter your Date of Birth
            </span>
            <div className={styles.calendarTooltipArrow}></div>
          </div>
        )}
      </div>
    </>
  );
}
