"use client";
import { useState, useEffect } from "react";
import {
  connectWallet,
  checkAccount,
} from "./walletConnection/walletConnection";
import disconnectWallet from "./walletDisConnection/walletDisConnection";
import ButtonSVG from "./buttonSVG";
import "./walletButton.css";

export default function WalletButton() {
  const [walletaccount, setWalletAccount] = useState("");
  useEffect(() => {
    checkAccount(setWalletAccount);
    const handleAccountsChanged = (walletaccount) => {
      setWalletAccount(walletaccount[0] || "");
    };

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      }
    };
  }, []);

  return (
    <>
      {walletaccount ? (
        <button onClick={() => disconnectWallet(setWalletAccount)}>
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <ButtonSVG />
            </div>
          </div>
          <span>Disconnect</span>
        </button>
      ) : (
        <button
          className="walletButton"
          onClick={() => connectWallet(setWalletAccount)}
        >
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <ButtonSVG />
            </div>
          </div>
          <span>Connect Wallet</span>
        </button>
      )}
    </>
  );
}
