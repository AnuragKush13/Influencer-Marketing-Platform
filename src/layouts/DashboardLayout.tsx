import HomeDashboard from "@/components/HomeDashboard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen w-full bg-[var(--background)] text-[var(--foreground)]">
  <Sidebar />
  <div className="flex flex-col flex-1 overflow-hidden">
    <main className="p-6 shadow-sm flex-1 overflow-auto">
      {children}
      <HomeDashboard/>
    </main>
  </div>
</div>
  );
};

export default DashboardLayout;



