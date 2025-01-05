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
    title: "Vote Details",
    url: "/home/votingDashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Voter Registration",
    url: "/home/voterRegistration",
    icon: voting,
  },
  {
    title: "Candidate Registration",
    url: "/home/candidateRegistration",
    icon: candidate,
  },
  {
    title: "Admin Registration",
    url: "/home/adminRegistration",
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
  const adminPage = "dmin";
  const [activeItem, setActiveItem] = useState(null);

  const handleSetActive = (title) => {
    setActiveItem(title);
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Registration Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminPage === "Admin"
                ? items
                    .filter((item) => item.title === "Admin Registration")
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
                : items
                    .filter((item) => item.title !== "Admin Registration")
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
                    ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
