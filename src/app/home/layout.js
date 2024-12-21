import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/HomePageComponents/SideBar/ui/sidebar";
import { AppSidebar } from "@/components/HomePageComponents/SideBar/sideBar";
import "./sidebarStyling.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <SidebarProvider
          style={{
            "--sidebar-width": "13rem",
          }}
        >
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
