import DashboardNavbar from "@/components/dashboard/dashboard-navbar";
import { AppSidebar } from "@/components/dashboard/dashboard-sidebar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider
        style={
          {
            "--sidebar-width": "14rem",
            "--sidebar-width-mobile": "16rem",
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <main className="w-full">
          <nav className="m-4 ml-0">
            <DashboardNavbar />
          </nav>
          <section className="m-2 ml-0 mb-0 p-2 h-full rounded-t-2xl  bg-sidebar-background">
            {children}
          </section>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}
