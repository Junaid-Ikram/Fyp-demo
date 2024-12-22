"use client";
import styles from "./FingerprintVerification.module.css";
import { Fingerprint } from "lucide-react";
import FingerprintVerificationModal from "./fingerprintVerificationModal/fingerprintVerificationModal";
import { useState } from "react";
export default function FingerprintVerification() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className={styles.fingerprintVerificationbuttoncontainer}>
      <div className={styles.fingerprintVerificationbuttoncard}>
        <h1 className={styles.fingerprintVerificationbuttontitle}>
          Fingerprint Verification
        </h1>
        <p className={styles.fingerprintVerificationbuttonsubtitle}>
          Verify your identity using your fingerprint
        </p>
        <button
          className={styles.fingerprintVerificationbutton}
          onClick={openModal}
        >
          <span className={styles.fingerprintVerificationicon}>
            <Fingerprint />
          </span>{" "}
          Verify Fingerprint
        </button>
      </div>
      <FingerprintVerificationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
