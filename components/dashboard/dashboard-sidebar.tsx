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
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BookCheck,
  CreditCard,
  HeartPlus,
  Hotel,
  LayoutDashboard,
  LogOut,
  MessageCircleCheck,
  UserRoundCog,
} from "lucide-react";
import Link from "next/link";

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
        href: "/admin/dashboard",
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

const userRole = "user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/"}>
                {/* <Image src={Logo} alt="Logo" width={32} height={32} /> */}
                <Hotel />
                <span>HotelMania</span>
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

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Tooltip>
              <TooltipTrigger asChild>
                <SidebarMenuButton>
                  <LogOut />
                  <span className="group-data-collapsed/sidebar:hidden">
                    Logout
                  </span>
                </SidebarMenuButton>
              </TooltipTrigger>
              <TooltipContent side="right">Logout</TooltipContent>
            </Tooltip>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      {/* Collapsed rail */}
      <SidebarRail />
    </Sidebar>
  );
}
