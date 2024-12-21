"use client";
import { useState } from "react";
import { LayoutDashboard, FileUser, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import candidate from "../SideBar/iconSvgs/candidate";
import voting from "./iconSvgs/voting";
import Link from "next/link";

const items = [
  {
    title: "Vote Details",
    url: "/home/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Voter Registration",
    url: "/home/registration",
    icon: FileUser,
  },
  {
    title: "Candidate Registration",
    url: "#",
    icon: candidate,
  },
  {
    title: "Voter",
    url: "#",
    icon: voting,
  },
  {
    title: "Dummy",
    url: "/home/dummy",
    icon: Settings,
  },
];

export function AppSidebar() {
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
              {items.map((item) => (
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
    </Sidebar>
  );
}
