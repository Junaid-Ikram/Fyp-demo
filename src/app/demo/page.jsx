"use client";
import React, { useEffect, useState } from "react";
import "./cascadeSelect.css";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    durations: {
      hours: 24,
      minutes: 60,
      seconds: 60,
    },
  });

  const targetDate = "2024-12-31T23:59:59";
  const size = 100;

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          durations: {
            hours: 24,
            minutes: 60,
            seconds: 60,
          },
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  const CircleTimer = ({ value, type, maxValue }) => {
    const strokeWidth = 7;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const progress = (value / maxValue) * 100;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="circle-timer" style={{ width: size, height: size }}>
        {/* Background Circle */}
        <svg className="background-circle" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#e5e5e5"
            strokeWidth={strokeWidth}
          />
        </svg>

        {/* Progress Circle */}
        <svg className="progress-circle" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#17b4d3"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 1s linear",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>

        {/* Time Display */}
        <div className="time-display">
          <div className="time-value">{value}</div>
          <div className="time-label">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="timer-container">
      <CircleTimer
        value={timeLeft.hours}
        type="Hours"
        maxValue={timeLeft.durations.hours}
      />
      <CircleTimer
        value={timeLeft.minutes}
        type="Minutes"
        maxValue={timeLeft.durations.minutes}
      />
      <CircleTimer
        value={timeLeft.seconds}
        type="Seconds"
        maxValue={timeLeft.durations.seconds}
      />
    </div>
  );
};

export default Timer;
