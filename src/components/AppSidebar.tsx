
import { Home, Heart, BookOpen, Settings, Trophy, BarChart3 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Favorites",
    url: "/favorites",
    icon: Heart,
  },
  {
    title: "Word Lists",
    url: "/word-lists",
    icon: BookOpen,
  },
  {
    title: "Progress",
    url: "/progress",
    icon: BarChart3,
  },
  {
    title: "Achievements",
    url: "/achievements",
    icon: Trophy,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sidebar className="border-r border-purple-100">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            L
          </div>
          <div>
            <h2 className="font-bold text-gray-800">LingoBox</h2>
            <p className="text-xs text-gray-500">Learn • Play • Grow</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-purple-700 font-semibold">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.url)}
                    isActive={location.pathname === item.url}
                    className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 data-[active=true]:bg-gradient-to-r data-[active=true]:from-purple-100 data-[active=true]:to-blue-100 data-[active=true]:text-purple-700"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                    {item.title === "Favorites" && (
                      <Badge variant="secondary" className="ml-auto bg-red-100 text-red-700">
                        3
                      </Badge>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-6">
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-4 text-center">
          <div className="text-2xl mb-2">🔥</div>
          <div className="text-sm font-semibold text-purple-700">25 Day Streak!</div>
          <div className="text-xs text-purple-600">Keep it up!</div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
