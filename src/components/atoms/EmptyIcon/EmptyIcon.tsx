import {
  Search,
  FileQuestion,
  Filter,
  Package,
  Users,
  ShoppingCart,
  CreditCard,
  ReceiptText,
} from "lucide-react";

const EmptyIcon = ({
  type,
}: {
  type:
    | "search"
    | "filter"
    | "transactions"
    | "users"
    | "products"
    | "orders"
    | "cards"
    | "general";
}) => {
  const iconClass = "w-20 h-20 md:w-24 md:h-24 text-muted-foreground/30";

  const icons: Record<string, React.ReactNode> = {
    search: <Search className={iconClass} />,
    filter: <Filter className={iconClass} />,
    transactions: <CreditCard className={iconClass} />,
    users: <Users className={iconClass} />,
    products: <Package className={iconClass} />,
    orders: <ShoppingCart className={iconClass} />,
    cards: <ReceiptText className={iconClass} />,
    general: <FileQuestion className={iconClass} />,
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 blur-3xl rounded-full" />
      <div className="relative p-8 rounded-full bg-muted/30">
        {icons[type] || icons.general}
      </div>
    </div>
  );
};

export default EmptyIcon;
