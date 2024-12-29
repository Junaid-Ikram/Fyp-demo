"use client";
import React, { useState, useEffect } from "react";
import styles from "./DropDown.module.css";
// icons
import { IoChevronDown } from "react-icons/io5";
import { IoMdFootball } from "react-icons/io";
import { MdOutlineSportsTennis, MdOutlineSportsCricket } from "react-icons/md";
import { GiTennisRacket } from "react-icons/gi";

export default function DropDown() {
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState("Select Your Voting Sign");

  const optionArray = [
    {
      icon: <IoMdFootball />,
      title: "Football",
    },
    {
      icon: <MdOutlineSportsCricket />,
      title: "Cricket",
    },
    {
      icon: <MdOutlineSportsTennis />,
      title: "Tennis",
    },
    {
      icon: <GiTennisRacket />,
      title: "Badminton",
    },
  ];

  const handleOutsideClick = (event) => {
    if (!event.target.closest(`.${styles.dropdown}`)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <button
      className={`${styles.dropdown} ${styles.button}`}
      onClick={() => setIsActive(!isActive)}
    >
      {content}
      <IoChevronDown
        className={`${isActive ? styles.iconActive : styles.iconInactive}`}
      />
      <div
        className={`${
          isActive ? styles.dropdownMenuActive : styles.dropdownMenuInactive
        } ${styles.dropdownMenu}`}
      >
        {optionArray.map((option, index) => (
          <p
            className={styles.option}
            key={index}
            onClick={() => setContent(option.title)}
          >
            {option.icon}
            {option.title}
          </p>
        ))}
      </div>
    </button>
  );
}
