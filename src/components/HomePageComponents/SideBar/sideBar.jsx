"use client";
import { useState } from "react";
import { LayoutDashboard } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../SideBar/ui/sidebar";
import candidate from "../SideBar/iconSvgs/candidate";
import voting from "./iconSvgs/voting";
import Link from "next/link";
import { NavUser } from "./sideBarComponents/nav-user";

const items = [
  {
    title: "Admin Dashboard",
    url: "/home/adminDashboard",
    icon: candidate,
  },
  {
    title: "Sub Admin Dashboard",
    url: "/home/subAdminDashboard",
    icon: candidate,
  },
  {
    title: "Vote Details",
    url: "/home/votingDashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Vote Registration",
    url: "/home/voterRegistration",
    icon: voting,
  },
  {
    title: "Candidate Registration",
    url: "/home/candidateRegistration",
    icon: candidate,
  },
  {
    title: "Party Registration",
    url: "/home/partyRegistration",
    icon: candidate,
  },
  {
    title: "Party Candidate Registration",
    url: "/home/partyCandidateRegistration",
    icon: candidate,
  },
];

const data = {
  user: {
    name: "E-Voting",
    email: "evoting@blockchain.com",
  },
};

export function AppSidebar() {
  const PageUser = "subadmin"; // Change this to "party", "partyCandidate", "voter","subadmin" or "admin" to test
  const [activeItem, setActiveItem] = useState(null);

  const handleSetActive = (title) => {
    setActiveItem(title);
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {PageUser === "admin"
                ? items
                    .filter(
                      (item) =>
                        item.title === "Admin Dashboard" ||
                        item.title === "Party Registration"
                    )
                    .map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={activeItem === item.title}
                          onClick={() => handleSetActive(item.title)}
                        >
                          <Link href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
                : PageUser === "party"
                ? items
                    .filter(
                      (item) =>
                        item.title === "Vote Details" ||
                        item.title === "Vote Registration" ||
                        item.title === "Party Candidate Registration"
                    )
                    .map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={activeItem === item.title}
                          onClick={() => handleSetActive(item.title)}
                        >
                          <Link href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
                : PageUser === "partyCandidate"
                ? items
                    .filter(
                      (item) =>
                        item.title === "Vote Details" ||
                        item.title === "Vote Registration"
                    )
                    .map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={activeItem === item.title}
                          onClick={() => handleSetActive(item.title)}
                        >
                          <Link href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
                : PageUser === "voter"
                ? items
                    .filter(
                      (item) =>
                        item.title === "Vote Details" ||
                        item.title === "Vote Registration" ||
                        item.title === "Candidate Registration"
                    )
                    .map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={activeItem === item.title}
                          onClick={() => handleSetActive(item.title)}
                        >
                          <Link href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
                : PageUser === "subadmin"
                ? items
                    .filter((item) => item.title === "Sub Admin Dashboard")
                    .map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={activeItem === item.title}
                          onClick={() => handleSetActive(item.title)}
                        >
                          <Link href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
                : null}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} pageuser={PageUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
