import { Badge } from "../reui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SidebarMenuButton, SidebarTrigger } from "../ui/sidebar";
import { ThemeToggle } from "../theme/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown, LogOut } from "lucide-react";

const DashboardNavbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <h2>Dashboard</h2>
      </div>
      <div className="flex items-center gap-8">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              <div className="flex items-center gap-1.5">
                <Avatar>
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"
                    alt="Alex Johnson"
                  />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold">Alex Johnson</span>
                    <Badge variant="default" size="xs">
                      Admin
                    </Badge>
                  </div>
                  <span className="text-muted-foreground text-xs">
                    Founder & CEO
                  </span>
                </div>
              </div>
              <ChevronDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuItem>
              <LogOut />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DashboardNavbar;
