import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Hotel,
  MessageSquare,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "대시보드",
    icon: LayoutDashboard,
    url: "/admin/dashboard",
  },
  {
    title: "행사 관리",
    icon: Calendar,
    url: "/admin/events",
  },
  {
    title: "참가자 관리",
    icon: Users,
    url: "/admin/participants",
  },
  {
    title: "숙박 및 룸핑",
    icon: Hotel,
    url: "/admin/rooming",
  },
  {
    title: "문자·알림 발송",
    icon: MessageSquare,
    url: "/admin/messages",
  },
  {
    title: "설문·초청장",
    icon: FileText,
    url: "/admin/forms",
  },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-card">
      <nav className="flex flex-col gap-1 p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.url}
            to={item.url}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
