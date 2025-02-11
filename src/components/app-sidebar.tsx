"use client";

import * as React from "react";
import {
  CoffeeIcon,
  HomeIcon,
  ImagesIcon,
  InfoIcon,
  ShoppingCart,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: HomeIcon,
    },
    {
      title: "Menu",
      url: "/menu",
      icon: CoffeeIcon,
    },
    {
      title: "About",
      url: "/about",
      icon: InfoIcon,
    },
    {
      title: "Gallery",
      url: "/gallery",
      icon: ImagesIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <CoffeeIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Coffive</span>
                  <span className="truncate text-xs">PT. FIVELICIOUS</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="flex justify-center">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <ShoppingCart />
      </SidebarFooter>
    </Sidebar>
  );
}
