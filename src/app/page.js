import BackgroundGradient from "@/components/MainBackgroundGradient/backgroundGradient";
import BackgroundSparkle from "@/components/MainPageComponents/backgroundSparkles/backgroundSparkle";
import WalletButtonDummy from "@/components/MainPageComponents/WalletButtonDummy/walletButtonDummy";

export default function Home() {
  return (
    <>
      {/* <div className="relative h-screen">
        <div className="absolute inset-0 z-[-1]">
          <div className="relative h-full w-full [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_at_center,#FFF991,transparent)] [&>div]:opacity-60 [&>div]:mix-blend-multiply">
            <div></div>
          </div>
        </div> */}
      <BackgroundGradient>
        <BackgroundSparkle />
        <h1 className="headingText">Blockchain E-voting System</h1>
        <WalletButtonDummy />
      </BackgroundGradient>

      {/* </div> */}
    </>
  );
}
