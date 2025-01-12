"use client";
import { useState, useEffect } from "react";
import styles from "./VoterAndCandidateRegistrationControlCnter.module.css";
import { LuAlarmClock } from "react-icons/lu";

export default function RegistrationControlCenter() {
  const [voterStartTime, setVoterStartTime] = useState("");
  const [voterEndTime, setVoterEndTime] = useState("");
  const [candidateStartTime, setCandidateStartTime] = useState("");
  const [candidateEndTime, setCandidateEndTime] = useState("");

  const [voterStatus, setVoterStatus] = useState(
    "Registration is not started."
  );
  const [candidateStatus, setCandidateStatus] = useState(
    "Registration is not started."
  );

  const [isVoterRegistrationStarted, setIsVoterRegistrationStarted] =
    useState(false);
  const [isCandidateRegistrationStarted, setIsCandidateRegistrationStarted] =
    useState(false);
  const [elapsedVoterTime, setElapsedVoterTime] = useState(0);
  const [elapsedCandidateTime, setElapsedCandidateTime] = useState(0);
  const [voterTimerInterval, setVoterTimerInterval] = useState(null);
  const [candidateTimerInterval, setCandidateTimerInterval] = useState(null);
  const [isRegistrationEnded, setIsRegistrationEnded] = useState(false);

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

  const validateDates = (startTime, endTime) => {
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

  const handleSetVoterRegistrationTime = () => {
    if (!validateDates(voterStartTime, voterEndTime)) return;
    setVoterStatus("Voter Registration time has been set.");
    // Clear input fields after setting time
    setVoterStartTime("");
    setVoterEndTime("");
  };

  const handleSetCandidateRegistrationTime = () => {
    if (!validateDates(candidateStartTime, candidateEndTime)) return;
    setCandidateStatus("Candidate Registration time has been set.");
    // Clear input fields after setting time
    setCandidateStartTime("");
    setCandidateEndTime("");
  };

  const handleStartVoterRegistration = () => {
    if (!validateDates(voterStartTime, voterEndTime)) return;

    setIsVoterRegistrationStarted(true);
    setVoterStatus("Voter Registration is running.");
    const end = new Date(voterEndTime);
    const totalDuration = (end - new Date(voterStartTime)) / 1000;

    setElapsedVoterTime(0);
    const intervalId = setInterval(() => {
      setElapsedVoterTime((prev) => {
        if (prev >= totalDuration) {
          clearInterval(intervalId);
          setVoterStatus("Voter Registration has ended.");
          setIsRegistrationEnded(true);
          return totalDuration;
        }
        return prev + 1;
      });
    }, 1000);
    setVoterTimerInterval(intervalId);
  };

  const handleStartCandidateRegistration = () => {
    if (!validateDates(candidateStartTime, candidateEndTime)) return;

    setIsCandidateRegistrationStarted(true);
    setCandidateStatus("Candidate Registration is running.");
    const end = new Date(candidateEndTime);
    const totalDuration = (end - new Date(candidateStartTime)) / 1000;

    setElapsedCandidateTime(0);
    const intervalId = setInterval(() => {
      setElapsedCandidateTime((prev) => {
        if (prev >= totalDuration) {
          clearInterval(intervalId);
          setCandidateStatus("Candidate Registration has ended.");
          setIsRegistrationEnded(true);
          return totalDuration;
        }
        return prev + 1;
      });
    }, 1000);
    setCandidateTimerInterval(intervalId);
  };

  const calculateRemainingVoterTime = () => {
    const end = new Date(voterEndTime);
    const totalDuration = (end - new Date(voterStartTime)) / 1000;
    const remainingTime = totalDuration - elapsedVoterTime;
    return remainingTime > 0 ? remainingTime : 0;
  };

  const calculateRemainingCandidateTime = () => {
    const end = new Date(candidateEndTime);
    const totalDuration = (end - new Date(candidateStartTime)) / 1000;
    const remainingTime = totalDuration - elapsedCandidateTime;
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

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.icon}>
          <LuAlarmClock />
        </span>{" "}
        Registration Control Center
      </h1>

      <div className={styles.controlPanel}>
        {/* Voter Registration Time Range */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Voter Registration Time Range</label>
          <div className={styles.timeInputs}>
            <input
              type="text"
              className={styles.input}
              placeholder="Start Time (DD/MM/YYYY HH:MM AM/PM)"
              value={voterStartTime}
              onChange={handleDateChange(setVoterStartTime)}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="End Time (DD/MM/YYYY HH:MM AM/PM)"
              value={voterEndTime}
              onChange={handleDateChange(setVoterEndTime)}
            />
          </div>
          {/* Voter Buttons */}
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.button} ${styles.setTime}`}
              onClick={handleSetVoterRegistrationTime}
              disabled={!voterStartTime || !voterEndTime || isRegistrationEnded}
            >
              Set Voter Registration Time
            </button>
            <button
              className={`${styles.button} ${styles.start}`}
              onClick={handleStartVoterRegistration}
              disabled={!voterStartTime || !voterEndTime || isRegistrationEnded}
            >
              Start Voter Registration
            </button>
          </div>
        </div>

        {/* Candidate Registration Time Range */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Candidate Registration Time Range
          </label>
          <div className={styles.timeInputs}>
            <input
              type="text"
              className={styles.input}
              placeholder="Start Time (DD/MM/YYYY HH:MM AM/PM)"
              value={candidateStartTime}
              onChange={handleDateChange(setCandidateStartTime)}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="End Time (DD/MM/YYYY HH:MM AM/PM)"
              value={candidateEndTime}
              onChange={handleDateChange(setCandidateEndTime)}
            />
          </div>
          {/* Candidate Buttons */}
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.button} ${styles.setTime}`}
              onClick={handleSetCandidateRegistrationTime}
              disabled={
                !candidateStartTime || !candidateEndTime || isRegistrationEnded
              }
            >
              Set Candidate Registration Time
            </button>
            <button
              className={`${styles.button} ${styles.start}`}
              onClick={handleStartCandidateRegistration}
              disabled={
                !candidateStartTime || !candidateEndTime || isRegistrationEnded
              }
            >
              Start Candidate Registration
            </button>
          </div>
        </div>

        {/* Status Sections */}
        <div className={styles.statusContainer}>
          <div className={styles.status}>
            <h3>Voter Registration Status</h3>
            <p>{voterStatus}</p>
            <p>
              <strong>Start Time:</strong> {voterStartTime || "Not set"}
            </p>
            <p>
              <strong>End Time:</strong> {voterEndTime || "Not set"}
            </p>
            <p>
              <strong>Remaining Time:</strong>{" "}
              {formatTime(calculateRemainingVoterTime())}
            </p>
          </div>
          <div className={styles.status}>
            <h3>Candidate Registration Status</h3>
            <p>{candidateStatus}</p>
            <p>
              <strong>Start Time:</strong> {candidateStartTime || "Not set"}
            </p>
            <p>
              <strong>End Time:</strong> {candidateEndTime || "Not set"}
            </p>
            <p>
              <strong>Remaining Time:</strong>{" "}
              {formatTime(calculateRemainingCandidateTime())}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
