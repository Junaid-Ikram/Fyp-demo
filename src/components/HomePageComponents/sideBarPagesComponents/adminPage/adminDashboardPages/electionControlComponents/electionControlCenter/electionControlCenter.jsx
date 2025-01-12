import { useState, useEffect } from "react";
import styles from "./ElectionControlCenter.module.css";
import { LuAlarmClock } from "react-icons/lu";

const ElectionControlCenter = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [status, setStatus] = useState("Election is not started.");
  const [electionYear, setElectionYear] = useState("");
  const [isElectionStarted, setIsElectionStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); // in seconds
  const [timerInterval, setTimerInterval] = useState(null); // to store the interval ID
  const [isPaused, setIsPaused] = useState(false); // Track if the election is paused
  const [isElectionEnded, setIsElectionEnded] = useState(false); // Track if the election has ended

  const handleDateChange = (setter) => (e) => {
    let input = e.target.value;

    if (input === "") {
      setter("");
      return;
    }

    input = input.replace(/\D/g, "");

    let formattedDate =
      input.slice(0, 2) +
      (input.length >= 2 ? "/" : "") +
      input.slice(2, 4) +
      (input.length >= 4 ? "/" : "") +
      input.slice(4, 8) +
      (input.length >= 8 ? " " : "") +
      input.slice(8, 10) +
      (input.length >= 10 ? ":" : "") +
      input.slice(10, 12) +
      (input.length >= 12 ? " " : "") +
      input.slice(12, 14);

    setter(formattedDate.slice(0, 16));
  };

  const validateDates = () => {
    const start = new Date(startTime);
    const end = new Date(endTime);

    if (!startTime || !endTime) {
      alert("Please enter both start and end times.");
      return false;
    }

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      alert("Invalid date format. Use DD/MM/YYYY HH:MM AM/PM.");
      return false;
    }

    if (start >= end) {
      alert("Start time must be before the end time.");
      return false;
    }

    return true;
  };

  const handleSetVotingTime = () => {
    if (!validateDates()) return;
    alert("Voting time has been set.");
  };

  const handleStart = () => {
    if (!validateDates()) return;

    if (isElectionStarted && !isPaused) return;

    setIsElectionStarted(true);
    setStatus("Election is running.");
    const end = new Date(endTime);
    const totalDuration = (end - new Date(startTime)) / 1000;

    if (isPaused) {
      setIsPaused(false);
      setStatus("Election is resumed.");
      const intervalId = setInterval(() => {
        setElapsedTime((prev) => {
          if (prev >= totalDuration) {
            clearInterval(intervalId);
            setStatus("Election has ended.");
            setIsElectionEnded(true); // Set election ended
            return totalDuration;
          }
          return prev + 1;
        });
      }, 1000);
      setTimerInterval(intervalId);
    } else {
      setElapsedTime(0);
      const intervalId = setInterval(() => {
        setElapsedTime((prev) => {
          if (prev >= totalDuration) {
            clearInterval(intervalId);
            setStatus("Election has ended.");
            setIsElectionEnded(true); // Set election ended
            return totalDuration;
          }
          return prev + 1;
        });
      }, 1000);
      setTimerInterval(intervalId);
    }
  };

  const handlePause = () => {
    setIsPaused(true);
    setStatus("Election is paused.");
    clearInterval(timerInterval);
  };

  const handleStop = () => {
    setIsElectionStarted(false);
    setStatus(""); // Clear the status
    setIsElectionEnded(true); // Mark election as ended
    setElapsedTime(0); // Clear elapsed time
    setElectionYear(""); // Clear election year
    setStartTime(""); // Clear start time
    setEndTime(""); // Clear end time
    clearInterval(timerInterval); // Clear the interval
  };

  const calculateRemainingTime = () => {
    const end = new Date(endTime);
    const totalDuration = (end - new Date(startTime)) / 1000;
    const remainingTime = totalDuration - elapsedTime;
    return remainingTime > 0 ? remainingTime : 0;
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleYearChange = (e) => {
    const input = e.target.value;
    const currentYear = new Date().getFullYear();

    if (input.length === 4 && !isNaN(input)) {
      const year = parseInt(input);
      if (year >= currentYear) {
        setElectionYear(input);
      } else {
        alert("Election year must be the current year or in the future.");
      }
    } else {
      setElectionYear(input);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.icon}>
          <LuAlarmClock />
        </span>{" "}
        Election Control Center
      </h1>

      <div className={styles.controlPanel}>
        {/* Election Year */}
        <div className={styles.inputGroup}>
          <label htmlFor="electionYear" className={styles.label}>
            Election Year
          </label>
          <input
            type="text"
            id="electionYear"
            className={styles.input}
            placeholder="Enter election year (e.g., 2025)"
            value={electionYear}
            onChange={handleYearChange}
            maxLength={4} // Limit to 4 digits
          />
        </div>

        {/* Time Range */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Voting Time Range</label>
          <div className={styles.timeInputs}>
            <input
              type="text"
              className={styles.input}
              placeholder="Start Time (DD/MM/YYYY HH:MM AM/PM)"
              value={startTime}
              onChange={handleDateChange(setStartTime)}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="End Time (DD/MM/YYYY HH:MM AM/PM)"
              value={endTime}
              onChange={handleDateChange(setEndTime)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className={styles.statusControl}>
          <button
            className={`${styles.button} ${styles.setTime}`}
            onClick={handleSetVotingTime}
            disabled={!startTime || !endTime || isElectionEnded}
          >
            Set Voting Time
          </button>
          <button
            className={`${styles.button} ${styles.start}`}
            onClick={handleStart}
            disabled={!startTime || !endTime || isElectionEnded}
          >
            Start Election
          </button>
          <button
            className={`${styles.button} ${styles.pause}`}
            onClick={handlePause}
            disabled={!isElectionStarted || isPaused || isElectionEnded}
          >
            Pause Election
          </button>
          <button
            className={`${styles.button} ${styles.stop}`}
            onClick={handleStop}
            disabled={!isElectionStarted || isElectionEnded}
          >
            Stop Election
          </button>
        </div>

        {/* Status */}
        <div className={styles.status}>
          <h3>Status</h3>
          <p>{status}</p>
          <p>
            <strong>Election Year:</strong> {electionYear || "Not set"}
          </p>
          <p>
            <strong>Start Time:</strong> {startTime || "Not set"}
          </p>
          <p>
            <strong>End Time:</strong> {endTime || "Not set"}
          </p>
          <p>
            <strong>Remaining Time:</strong>{" "}
            {formatTime(calculateRemainingTime())}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElectionControlCenter;
