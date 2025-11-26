import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

type Props = {
  children: ReactNode;
};
export default function DashboardLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex min-h-screen w-full flex-col p-2 ps-6 bg-muted">
        <DashboardNavbar />
        <div className="pt-2">{children}</div>
      </main>
    </SidebarProvider>
  );
}
