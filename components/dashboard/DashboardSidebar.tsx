"use client";

import {
  Bell,
  FileText,
  Home,
  Lightbulb,
  LogOut,
  MessageCircle,
  MessageSquareText,
  Newspaper,
  ScrollText,
  Server,
  Settings,
  Users,
  Map,
  MapPin,
  ChevronRight,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import { Collapsible, CollapsibleTrigger } from "../ui/collapsible";

// Menu items.
const overviewItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Pelanggan",
    icon: Users,
    submenu: [
      { title: "Semua Pelanggan", url: "/dashboard/customers" },
      { title: "Tambah Pelanggan", url: "/dashboard/customers/add" },
      { title: "Anomali Login", url: "/dashboard/customers/login-anomaly" },
      { title: "Devices", url: "/dashboard/customers/devices" },
      { title: "Paket Internet", url: "/dashboard/customers/internet-package" },
      { title: "Speed on Demand", url: "/dashboard/customers/speed-on-demand" },
    ],
  },
  {
    title: "Wilayah",
    url: "/dashboard/region",
    icon: MapPin,
  },
  {
    title: "Tagihan",
    icon: Newspaper,
    submenu: [
      { title: "Tagihan", url: "/dashboard/billing" },
      { title: "Account Officer", url: "/dashboard/account-officer" },
    ],
  },
  {
    title: "Payment Gateway",
    url: "/dashboard/payment-gateway",
    icon: ScrollText,
  },
  {
    title: "Tiket",
    url: "/dashboard/tickets",
    icon: MessageSquareText,
  },
  {
    title: "Inventory",
    url: "/dashboard/inventory",
    icon: Lightbulb,
  },
  {
    title: "Keuangan",
    url: "/dashboard/financial",
    icon: ScrollText,
  },
  {
    title: "Pemetaan",
    url: "/dashboard/mapping",
    icon: Map,
  },
  {
    title: "Reseller & Biller",
    url: "/dashboard/reseller-biller",
    icon: Users,
  },
  {
    title: "Servers",
    icon: Server,
    submenu: [
      { title: "NAS", url: "/dashboard/servers/nas" },
      { title: "Port Forwarding", url: "/dashboard/servers/port-forwarding" },
      { title: "Mikrotik", url: "/dashboard/servers/mikrotik" },
    ],
  },
  {
    title: "Pusat Notifikasi",
    url: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Whatsapp",
    url: "/dashboard/whatsapp",
    icon: MessageCircle,
  },
  {
    title: "Laporan",
    url: "/dashboard/reports",
    icon: FileText,
  },
];

const settingsItems = [
  {
    title: "Pengaturan",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  const { signOut } = useClerk();

  return (
    <Sidebar className="p-2 border-none bg-muted w-70">
      <SidebarContent className="bg-muted">
        <ScrollArea className="h-screen bg-background rounded-2xl border border-border overflow-hidden">
          <div className="flex items-center justify-center gap-3 py-3 pt-4">
            <div className="text-primary text-3xl font-semibold tracking-wide">
              <p>Integra</p>
            </div>
          </div>
          {/* Overview */}
          <SidebarGroup className="pt-1 p-0">
            <SidebarGroupLabel className="ps-6 font-semibold text-sm">
              MENU
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {overviewItems.map((item) => {
                  const active = pathname === item.url;

                  if (item.submenu) {
                    return (
                      <Collapsible
                        key={item.title}
                        className="group/collapsible"
                      >
                        <SidebarMenuItem className="p-0 ">
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton className="flex h-10 items-center gap-4 px-6 cursor-pointer">
                              <item.icon className="size-5" />
                              <span className="text-base">{item.title}</span>

                              {/* Arrow indicator */}
                              <ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>

                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {item.submenu.map((sub) => {
                                const subActive = pathname === sub.url;
                                return (
                                  <SidebarMenuSubItem
                                    key={sub.title}
                                    className="ms-1 h-9 hover:bg-accent rounded-e-md flex"
                                  >
                                    <div className="w-px  bg-border"></div>
                                    <Link
                                      href={sub.url}
                                      className={`flex items-center gap-3 pl-6 pr-4 rounded-md transition-colors ${
                                        subActive
                                          ? "text-primary font-semibold"
                                          : "text-muted-foreground"
                                      }`}
                                    >
                                      <span>{sub.title}</span>
                                    </Link>
                                  </SidebarMenuSubItem>
                                );
                              })}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </Collapsible>
                    );
                  }

                  return (
                    <SidebarMenuItem
                      key={item.title}
                      className="relative p-0 rounded-none"
                    >
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.url}
                          className="flex h-10 items-center gap-x-4 px-6"
                        >
                          <div
                            className={`${
                              active ? "block" : "hidden"
                            } absolute left-0 top-0 h-full bg-primary w-2 rounded-e-4xl`}
                          />
                          <item.icon className="size-5" />
                          <span className="text-base">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* SETTINGS pinned to bottom */}
          <SidebarGroup className="mt-auto p-0 pt-6  pb-6">
            <SidebarGroupLabel className="ps-6 font-semibold text-sm">
              GENERAL
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {settingsItems.map((item) => {
                  const active = pathname === item.url;

                  return (
                    <SidebarMenuItem
                      key={item.title}
                      className="relative p-0 rounded-none"
                    >
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.url}
                          className="flex h-10 items-center gap-x-4 px-6"
                        >
                          <div
                            className={`${
                              active ? "block" : "hidden"
                            } absolute left-0 top-0 h-full bg-primary w-2 rounded-e-4xl`}
                          />
                          <item.icon className="size-5" />
                          <span className="text-base">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
                <SidebarMenuItem className="relative p-0 rounded-none">
                  <SidebarMenuButton asChild>
                    <div
                      onClick={() => signOut({ redirectUrl: "/" })}
                      className="flex h-10 items-center gap-x-4 px-6"
                    >
                      <LogOut className="size-5" />
                      <span className="text-base">Log Out</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
}
