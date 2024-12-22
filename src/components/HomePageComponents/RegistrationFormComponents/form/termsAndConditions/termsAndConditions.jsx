"use client";
import React, { useState } from "react";
import { BlockUI } from "primereact/blockui";
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";
import styles from "./TermsAndConditionsComponent.module.css"; // Import the CSS module

export default function TermsAndConditionsComponent() {
  const [blocked, setBlocked] = useState(false);
  const buttonText = blocked ? "I Decline" : "I Accept";

  return (
    <div className={styles.termsCard}>
      <BlockUI
        blocked={blocked}
        template={<i className="pi pi-lock" style={{ fontSize: "3rem" }}></i>}
      >
        <Panel header="Prime React News" className={styles.customPanelHeader}>
          <p
            className={styles.customPanelContent + " m-0"}
            style={{ overflowY: "scroll", height: "150px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </Panel>
      </BlockUI>
      <div className={styles.mt20 + " " + styles.flexColumnCenter}>
        <h3 className={styles.customHeading}>Accept Terms?</h3>
        <Button
          label={buttonText}
          className={styles.customButton}
          onClick={() => setBlocked((oldState) => !oldState)}
        ></Button>
      </div>
    </div>
  );
}
