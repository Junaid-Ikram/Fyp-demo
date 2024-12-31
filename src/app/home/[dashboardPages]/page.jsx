import DashboardPage from "@/components/HomePageComponents/DashboardPagesComponents/voteDetailPage/voteDetailsPage";
import CandidateRegistrationPage from "@/components/HomePageComponents/DashboardPagesComponents/candidateRegistrationPage";
import VoterRegistrationPage from "@/components/HomePageComponents/DashboardPagesComponents/voterRegistrationPage";
import BackgroundGradient from "@/components/MainBackgroundGradient/backgroundGradient";
import AdminRegistrationPage from "@/components/HomePageComponents/DashboardPagesComponents/adminRegistrationPage";
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
