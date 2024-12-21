import DashboardPage from "@/components/HomePageComponents/DashboardPagesComponents/DashboardPage";
import DummyPage from "@/components/HomePageComponents/DashboardPagesComponents/DummyPage";
import VotingRegistrationPage from "@/components/HomePageComponents/DashboardPagesComponents/VotingRegistrationPage";
import BackgroundGradient from "@/components/MainBackgroundGradient/backgroundGradient";

export default async function dashboardPages({ params }) {
  const { dashboardPages } = await params;
  return (
    <>
      <BackgroundGradient>
        {" "}
        {dashboardPages === "dashboard" && <DashboardPage />}
        {dashboardPages === "registration" && <VotingRegistrationPage />}
        {dashboardPages === "dummy" && <DummyPage />}
      </BackgroundGradient>
    </>
  );
}
