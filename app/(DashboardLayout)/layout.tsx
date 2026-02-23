import { AppSidebar } from "@/components/dashboard/dashboard-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="m-2 p-2 border-2 w-full rounded-2xl">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
