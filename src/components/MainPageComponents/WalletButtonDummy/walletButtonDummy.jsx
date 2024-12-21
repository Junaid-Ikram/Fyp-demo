import DummyButtonSVG from "./walletButtonDummySVG";
import "./walletButtonDummy.css";
import Link from "next/link";

export default function WalletButtonDummy() {
  return (
    <>
      <Link href="/home" className="WalletButtonDummyLink">
        <button className="WalletButtonDummy">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <DummyButtonSVG />
            </div>
          </div>
          <span>Connect Wallet</span>
        </button>
      </Link>
    </>
  );
}
