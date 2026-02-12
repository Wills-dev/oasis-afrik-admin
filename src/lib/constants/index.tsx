import {
  Layers,
  LayoutGrid,
  Lock,
  Newspaper,
  Package,
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
    title: "Admin Management",
    links: [
      {
        name: "all news",
        link: "/insights",
        icon: <Newspaper className="w-4 h-4" />,
      },
      {
        name: "configuration",
        link: "/configuration/categories",
        icon: <Layers className="w-4 h-4" />,
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
        link: "/profile",
        icon: <UserCircle className="w-4 h-4" />,
      },
      {
        name: "security",
        link: "/security",
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

export const configurationLinks = [
  {
    name: "categories",
    link: "/configuration/categories",
  },
  {
    name: "countries",
    link: "/configuration/countries",
  },
  { name: "currencies", link: "/configuration/currencies" },
  {
    name: "period",
    link: "/configuration/period",
  },
  {
    name: "units",
    link: "/configuration/units",
  },
];
