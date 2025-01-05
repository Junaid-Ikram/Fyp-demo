import DashboardPage from "@/components/HomePageComponents/sideBarPagesComponents/voteDetailPage/voteDetailsPage";
import CandidateRegistrationPage from "@/components/HomePageComponents/sideBarPagesComponents/candidateRegistrationPage";
import VoterRegistrationPage from "@/components/HomePageComponents/sideBarPagesComponents/voterRegistrationPage";
import BackgroundGradient from "@/components/MainBackgroundGradient/backgroundGradient";
import AdminRegistrationPage from "@/components/HomePageComponents/sideBarPagesComponents/adminRegistrationPage";
export default async function dashboardPages({ params }) {
  const { dashboardPages } = await params;
  return (
    <>
      <BackgroundGradient>
        {" "}
        {dashboardPages === "votingDashboard" && <DashboardPage />}
        {dashboardPages === "voterRegistration" && <VoterRegistrationPage />}
        {dashboardPages === "candidateRegistration" && (
          <CandidateRegistrationPage />
        )}
        {dashboardPages === "adminRegistration" && <AdminRegistrationPage />}
      </BackgroundGradient>
    </>
  );
}
