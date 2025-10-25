import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { AccountSidebar } from "./AccountSidebar";

interface AccountLayoutProps {
  children: ReactNode;
}

export function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-background">
      <Header />
      <div className="flex w-full pt-16">
        <Sidebar />
        <AccountSidebar />
        <main className="ml-[460px] flex-1 p-6 bg-muted/30">
          {children}
        </main>
      </div>
    </div>
  );
}
