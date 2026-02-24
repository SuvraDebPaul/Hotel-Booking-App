import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BookCheck,
  ChevronUp,
  CreditCard,
  HeartPlus,
  Hotel,
  LayoutDashboard,
  LogOut,
  MessageCircleCheck,
  User2,
  UserRoundCog,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../reui/badge";

const menuItems = [
  {
    title: "USER DASHBOARD",
    items: [
      {
        icon: <LayoutDashboard />,
        label: "Dashboard",
        href: "/dashboard",
        visible: ["user"],
      },
      {
        icon: <BookCheck />,
        label: "My Bookings",
        href: "/dashboard/bookings",
        visible: ["user"],
      },
      {
        icon: <HeartPlus />,
        label: "Saved Properties",
        href: "/dashboard/wishlist",
        visible: ["user"],
      },
      {
        icon: <MessageCircleCheck />,
        label: "My Reviews",
        href: "/dashboard/reviews",
        visible: ["user"],
      },
    ],
  },
  {
    title: "USER TRANSACTION",
    items: [
      {
        icon: <CreditCard />,
        label: "Payment History",
        href: "/dashboard/transections",
        visible: ["user"],
      },
    ],
  },
  {
    title: "USER PROFILE",
    items: [
      {
        icon: <UserRoundCog />,
        label: "Settings",
        href: "/dashboard/profile",
        visible: ["user"],
      },
    ],
  },

  // HOST DASHBOARD
  {
    title: "HOST DASHBOARD",
    items: [
      {
        icon: <LayoutDashboard />,
        label: "Dashboard",
        href: "/dashboard",
        visible: ["host"],
      },
    ],
  },
  {
    title: "POPERTY MANAGEMENT",
    items: [
      {
        icon: <Hotel />,
        label: "All Properties",
        href: "/host/properties",
        visible: ["host"],
      },
      {
        icon: <Hotel />,
        label: "Add New Property",
        href: "/host/properties/new",
        visible: ["host"],
      },
      {
        icon: <BookCheck />,
        label: "Rooms & Amenties",
        href: "/host/bookings/requests",
        visible: ["host"],
      },
      {
        icon: <BookCheck />,
        label: "Photos & Gallery",
        href: "/host/bookings/confirmed",
        visible: ["host"],
      },
    ],
  },
  {
    title: "RESERVATIONS & CALENDER",
    items: [
      {
        icon: <Hotel />,
        label: "Booking Requests",
        href: "/host/properties",
        visible: ["host"],
      },
      {
        icon: <Hotel />,
        label: "Confirmed Reservations",
        href: "/host/properties/new",
        visible: ["host"],
      },
      {
        icon: <BookCheck />,
        label: "Availability Calendar",
        href: "/host/bookings/requests",
        visible: ["host"],
      },
      {
        icon: <BookCheck />,
        label: "Reservations Statement",
        href: "/host/bookings/confirmed",
        visible: ["host"],
      },
    ],
  },
  {
    title: "TRANSECTIONS",
    items: [
      {
        icon: <Hotel />,
        label: "Overview",
        href: "/host/properties",
        visible: ["host"],
      },
      {
        icon: <Hotel />,
        label: "History",
        href: "/host/properties/new",
        visible: ["host"],
      },
      {
        icon: <BookCheck />,
        label: "Commissioning",
        href: "/host/bookings/requests",
        visible: ["host"],
      },
    ],
  },
  {
    title: "HOST PROFILE",
    items: [
      {
        icon: <UserRoundCog />,
        label: "Settings",
        href: "/dashboard/profile",
        visible: ["host"],
      },
    ],
  },

  // ADMIN DASHBOARD
  {
    title: "ADMIN DASHBOARD",
    items: [
      {
        icon: <LayoutDashboard />,
        label: "Dashboard",
        href: "/dashboard",
        visible: ["admin"],
      },
      {
        icon: <UserRoundCog />,
        label: "User Management",
        href: "/admin/users",
        visible: ["admin"],
      },
      {
        icon: <Hotel />,
        label: "Property Approval",
        href: "/admin/properties/approval",
        visible: ["admin"],
      },
      {
        icon: <BookCheck />,
        label: "Booking Management",
        href: "/admin/bookings",
        visible: ["admin"],
      },
      {
        icon: <MessageCircleCheck />,
        label: "Content Management",
        href: "/admin/content",
        visible: ["admin"],
      },
      {
        icon: <CreditCard />,
        label: "Deals Management",
        href: "/admin/deals",
        visible: ["admin"],
      },
      {
        icon: <UserRoundCog />,
        label: "Profile",
        href: "/admin/profile",
        visible: ["admin"],
      },
    ],
  },
];

const userRole = "admin";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="border-0!">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/"} className="mt-2">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <span className="text-xl font-bold uppercase">HotelMania</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {menuItems.map((menuItem) => {
          const visibleItems = menuItem.items.filter((item) =>
            item.visible.includes(userRole),
          );
          if (!visibleItems.length) return null;

          return (
            <SidebarGroup key={menuItem.title}>
              <SidebarGroupLabel>{menuItem.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {visibleItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton asChild>
                            <Link href={item.href} className="space-x-2">
                              {item.icon}
                              <span className="group-data-collapsed/sidebar:hidden">
                                {item.label}
                              </span>
                            </Link>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        {/* Tooltip only visible when collapsed */}
                        <TooltipContent side="right">
                          {item.label}
                        </TooltipContent>
                      </Tooltip>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>

      <SidebarSeparator />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
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
                        <span className="text-sm font-semibold">
                          Alex Johnson
                        </span>
                        <Badge variant="default" size="xs">
                          Admin
                        </Badge>
                      </div>
                      <span className="text-muted-foreground text-xs">
                        Founder & CEO
                      </span>
                    </div>
                  </div>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <LogOut />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <Tooltip>
              <TooltipTrigger asChild>
                <SidebarMenuButton>
                  <LogOut />
                  <span className="group-data-collapsed/sidebar:hidden">
                    Logout
                  </span>
                </SidebarMenuButton>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="group-data-[collapsed=true]/sidebar:block hidden"
              >
                Logout
              </TooltipContent>
            </Tooltip> */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      {/* Collapsed rail */}
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
