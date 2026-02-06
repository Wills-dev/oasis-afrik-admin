import {
  Calendar,
  Coins,
  Globe,
  Layers,
  LayoutGrid,
  Lock,
  Newspaper,
  Package,
  Ruler,
  ShieldCheck,
  ShoppingCart,
  UserCircle,
  UserCog,
  Users,
} from "lucide-react";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "overview",
        link: "/overview",
        icon: <LayoutGrid className="w-4 h-4" />,
      },
      {
        name: "orders",
        link: "/orders",
        icon: <ShoppingCart className="w-4 h-4" />,
      },
      {
        name: "products",
        link: "/products",
        icon: <Package className="w-4 h-4" />,
      },
      {
        name: "users",
        link: "/users",
        icon: <Users className="w-4 h-4" />,
      },
      {
        name: "verifications",
        link: "/verifications",
        icon: <ShieldCheck className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Configuration",
    links: [
      {
        name: "currencies",
        link: "/config/currencies",
        icon: <Coins className="w-4 h-4" />,
      },
      {
        name: "units",
        link: "/config/units",
        icon: <Ruler className="w-4 h-4" />,
      },
      {
        name: "periods",
        link: "/config/periods",
        icon: <Calendar className="w-4 h-4" />,
      },
      {
        name: "categories",
        link: "/config/categories",
        icon: <Layers className="w-4 h-4" />,
      },
      {
        name: "countries",
        link: "/config/countries",
        icon: <Globe className="w-4 h-4" />,
      },
    ],
  },

  {
    title: "Admin Management",
    links: [
      {
        name: "all news",
        link: "/insights",
        icon: <Newspaper className="w-4 h-4" />,
      },
      {
        name: "manage admins",
        link: "/admins",
        icon: <UserCog className="w-4 h-4" />,
      },
    ],
  },

  {
    title: "Settings",
    links: [
      {
        name: "profile",
        link: "/settings/profile",
        icon: <UserCircle className="w-4 h-4" />,
      },
      {
        name: "security",
        link: "/settings/security",
        icon: <Lock className="w-4 h-4" />,
      },
    ],
  },
];

export const timePeriods = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];
