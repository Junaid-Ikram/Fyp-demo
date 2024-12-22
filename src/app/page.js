import BackgroundGradient from "@/components/MainBackgroundGradient/backgroundGradient";
import BackgroundSparkle from "@/components/MainPageComponents/backgroundSparkles/backgroundSparkle";
import WalletButtonDummy from "@/components/MainPageComponents/WalletButtonDummy/walletButtonDummy";

export default function Home() {
  return (
    <>
      <BackgroundGradient>
        <BackgroundSparkle />
        <h1 className="headingText">Blockchain E-voting System</h1>
        <WalletButtonDummy />
      </BackgroundGradient>
    </>
  );
}
