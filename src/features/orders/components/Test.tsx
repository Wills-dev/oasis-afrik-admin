import { useState } from "react";
import { motion } from "framer-motion";
import { OrderStatus } from "../types";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
  emailVerified: boolean;
  isCompanyVerified: boolean;
  companyName: string | null;
  avatar: string | null;
  createdAt: string;
  updatedAt: string;
}

interface Product {
  id: string;
  productId: string;
  name: string;
  description: string;
  price: string;
  minOrder: string;
  quantity: string;
  minLeadTime: number;
  maxLeadTime: number;
  mainImage: string;
  images: string[];
  status: string;
  userId: string;
}

interface QuoteNote {
  id: string;
  quoteId: string;
  authorId: string;
  message: string;
  quantity: string | null;
  quantityUnitId: string | null;
  amount: string | null;
  address: string | null;
  createdAt: string;
  updatedAt: string;
}

interface Quote {
  id: string;
  productId: string;
  buyerId: string;
  sellerId: string;
  amount: string;
  currency: string;
  currencyId: string | null;
  quantity: string;
  quantityUnitId: string;
  address: string;
  minLeadTime: number;
  minLeadTimePeriodId: string;
  maxLeadTime: number;
  maxLeadTimePeriodId: string;
  status: number;
  createdAt: string;
  updatedAt: string;
  notes: QuoteNote[];
}

interface Order {
  id: string;
  quoteId: string;
  productId: string;
  buyerId: string;
  sellerId: string;
  amount: string;
  currency: string;
  currencyId: string | null;
  amountChargedNgn: string;
  quantity: string;
  quantityUnitId: string;
  address: string;
  status: OrderStatus;
  paystackReference: string;
  paidAt: string | null;
  createdAt: string;
  updatedAt: string;
  buyer: User;
  seller: User;
  product: Product;
  quote: Quote;
}

interface OrderInfoProps {
  order: Order;
  onUpdateStatus?: (orderId: string, newStatus: OrderStatus) => Promise<void>;
}

const OrderInfo: React.FC<OrderInfoProps> = ({ order, onUpdateStatus }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const orderSteps: {
    status: OrderStatus;
    label: string;
    description: string;
  }[] = [
    {
      status: "PENDING_PAYMENT",
      label: "Payment Pending",
      description: "Awaiting payment confirmation",
    },
    {
      status: "PAID",
      label: "Payment Received",
      description: "Payment successfully processed",
    },
    {
      status: "PROCESSING",
      label: "Processing",
      description: "Order is being prepared",
    },
    {
      status: "SHIPPED",
      label: "Shipped",
      description: "Order is on the way",
    },
    {
      status: "DELIVERED",
      label: "Delivered",
      description: "Order has been delivered",
    },
    {
      status: "RECEIVED",
      label: "Received",
      description: "Order has been received by buyer",
    },
  ];

  const getCurrentStepIndex = () => {
    if (order.status === "CANCELLED") return -1;
    return orderSteps.findIndex((step) => step.status === order.status);
  };

  const currentStepIndex = getCurrentStepIndex();

  const formatCurrency = (amount: string, currency: string) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: currency || "NGN",
    }).format(parseFloat(amount));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatQuantity = (quantity: string) => {
    return new Intl.NumberFormat("en-NG").format(parseFloat(quantity));
  };

  const handleUpdateStatus = async (newStatus: OrderStatus) => {
    if (!onUpdateStatus) return;
    setIsUpdating(true);
    try {
      await onUpdateStatus(order.id, newStatus);
    } catch (error) {
      console.error("Failed to update status:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">
                Order ID
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                {order.id.substring(0, 8).toUpperCase()}
              </h1>
              <p className="text-slate-600">
                Placed on {formatDate(order.createdAt)}
              </p>
            </div>
            {order.status === "CANCELLED" ? (
              <div className="px-5 py-2.5 rounded-full bg-red-100 border-2 border-red-200">
                <span className="font-bold text-red-700">CANCELLED</span>
              </div>
            ) : null}
          </div>

          {/* Order Progress Stepper */}
          {order.status !== "CANCELLED" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 lg:p-8"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-6">
                Order Progress
              </h2>

              <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-5 left-0 right-0 h-1 bg-slate-200">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{
                      width: `${(currentStepIndex / (orderSteps.length - 1)) * 100}%`,
                    }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                  />
                </div>

                {/* Steps */}
                <div className="relative grid grid-cols-5 gap-4">
                  {orderSteps.map((step, index) => {
                    const isCompleted = index < currentStepIndex;
                    const isCurrent = index === currentStepIndex;
                    const isPending = index > currentStepIndex;

                    return (
                      <motion.div
                        key={step.status}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                        className="flex flex-col items-center text-center"
                      >
                        {/* Step Circle */}
                        <div
                          className={`
                            w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-3 relative z-10
                            transition-all duration-300
                            ${isCompleted ? "bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg" : ""}
                            ${isCurrent ? "bg-white border-4 border-emerald-500 text-emerald-600 shadow-lg scale-110" : ""}
                            ${isPending ? "bg-slate-200 text-slate-400 border-2 border-slate-300" : ""}
                          `}
                        >
                          {isCompleted ? "✓" : index + 1}
                        </div>

                        {/* Step Label */}
                        <div className="space-y-1">
                          <p
                            className={`
                              text-xs font-bold leading-tight
                              ${isCompleted || isCurrent ? "text-slate-900" : "text-slate-400"}
                            `}
                          >
                            {step.label}
                          </p>
                          <p className="text-xs text-slate-500 hidden lg:block">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <div className="border-b border-slate-200 px-6 py-4 bg-slate-50">
                <h2 className="text-xl font-bold text-slate-900">
                  Product Details
                </h2>
              </div>

              <div className="p-6">
                <div className="flex gap-6 mb-6">
                  <div
                    className="w-32 h-32 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer hover:ring-2 hover:ring-emerald-500 transition-all"
                    onClick={() => setSelectedImage(order.product.mainImage)}
                  >
                    <img
                      src={order.product.mainImage}
                      alt={order.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {order.product.name}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3">
                      {order.product.description}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <DataField
                    label="Quantity"
                    value={`${formatQuantity(order.quantity)} units`}
                  />
                  <DataField
                    label="Unit Price"
                    value={formatCurrency(order.product.price, order.currency)}
                  />
                  <DataField
                    label="Total Amount"
                    value={formatCurrency(order.amount, order.currency)}
                    large
                  />
                  <DataField
                    label="Lead Time"
                    value={`${order.product.minLeadTime}-${order.product.maxLeadTime} days`}
                  />
                </div>
              </div>
            </motion.div>

            {/* Buyer & Seller Information */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <div className="border-b border-slate-200 px-6 py-4 bg-slate-50">
                  <h3 className="font-bold text-slate-900">
                    Buyer Information
                  </h3>
                </div>
                <div className="p-6 space-y-3">
                  <DataField
                    label="Name"
                    value={`${order.buyer.firstName} ${order.buyer.lastName}`}
                  />
                  <DataField label="Email" value={order.buyer.email} />
                  <DataField
                    label="Verified"
                    value={order.buyer.emailVerified ? "Yes" : "No"}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <div className="border-b border-slate-200 px-6 py-4 bg-slate-50">
                  <h3 className="font-bold text-slate-900">
                    Seller Information
                  </h3>
                </div>
                <div className="p-6 space-y-3">
                  <DataField
                    label="Name"
                    value={`${order.seller.firstName} ${order.seller.lastName}`}
                  />
                  <DataField label="Email" value={order.seller.email} />
                  <DataField
                    label="Verified"
                    value={order.seller.isCompanyVerified ? "Yes" : "No"}
                  />
                </div>
              </motion.div>
            </div>

            {/* Delivery Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <div className="border-b border-slate-200 px-6 py-4 bg-slate-50">
                <h2 className="text-xl font-bold text-slate-900">
                  Delivery Information
                </h2>
              </div>
              <div className="p-6">
                <DataField label="Delivery Address" value={order.address} />
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <DataField
                    label="Expected Delivery"
                    value={`${order.quote.minLeadTime}-${order.quote.maxLeadTime} days from payment`}
                  />
                </div>
              </div>
            </motion.div>

            {/* Quote Notes */}
            {order.quote.notes && order.quote.notes.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <div className="border-b border-slate-200 px-6 py-4 bg-slate-50">
                  <h2 className="text-xl font-bold text-slate-900">
                    Order Notes
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  {order.quote.notes.map((note) => (
                    <div
                      key={note.id}
                      className="border-l-4 border-emerald-500 pl-4 py-2"
                    >
                      <p className="text-slate-700">{note.message}</p>
                      <p className="text-xs text-slate-500 mt-1">
                        {formatDate(note.createdAt)}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <div className="border-b border-slate-200 px-6 py-4 bg-emerald-50">
                <h3 className="font-bold text-slate-900">Payment Summary</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-semibold text-slate-900">
                    {formatCurrency(order.amount, order.currency)}
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-slate-600">Amount Charged</span>
                  <span className="font-semibold text-slate-900">
                    {formatCurrency(order.amountChargedNgn, "NGN")}
                  </span>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-slate-900">Total</span>
                    <span className="font-bold text-2xl text-emerald-600">
                      {formatCurrency(order.amountChargedNgn, "NGN")}
                    </span>
                  </div>
                </div>

                {order.paidAt && (
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-500 mb-1">Paid on</p>
                    <p className="text-sm font-semibold text-slate-900">
                      {formatDate(order.paidAt)}
                    </p>
                  </div>
                )}

                {order.paystackReference && (
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-500 mb-1">
                      Payment Reference
                    </p>
                    <p className="text-sm font-mono text-slate-900 break-all">
                      {order.paystackReference}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Order Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <div className="border-b border-slate-200 px-6 py-4 bg-slate-50">
                <h3 className="font-bold text-slate-900">Order Timeline</h3>
              </div>
              <div className="p-6 space-y-4">
                <TimelineItem
                  label="Order Created"
                  date={formatDate(order.createdAt)}
                  active
                />
                {order.paidAt && (
                  <TimelineItem
                    label="Payment Confirmed"
                    date={formatDate(order.paidAt)}
                    active
                  />
                )}
                <TimelineItem
                  label="Last Updated"
                  date={formatDate(order.updatedAt)}
                  active
                />
              </div>
            </motion.div>

            {/* Quick Actions - Only show for certain statuses */}
            {order.status !== "DELIVERED" &&
              order.status !== "CANCELLED" &&
              onUpdateStatus && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
                >
                  <div className="border-b border-slate-200 px-6 py-4 bg-slate-50">
                    <h3 className="font-bold text-slate-900">Quick Actions</h3>
                  </div>
                  <div className="p-6 space-y-3">
                    {currentStepIndex < orderSteps.length - 1 && (
                      <button
                        onClick={() =>
                          handleUpdateStatus(
                            orderSteps[currentStepIndex + 1].status,
                          )
                        }
                        disabled={isUpdating}
                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-4 rounded-xl font-semibold
                        hover:from-emerald-700 hover:to-teal-700 transition-all duration-200
                        disabled:from-slate-400 disabled:to-slate-500 disabled:cursor-not-allowed"
                      >
                        {isUpdating
                          ? "Updating..."
                          : `Mark as ${orderSteps[currentStepIndex + 1].label}`}
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-slate-300 text-sm font-medium"
            >
              Close ✕
            </button>
            <img
              src={selectedImage}
              alt="Product preview"
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

// Helper Components
const DataField = ({
  label,
  value,
  large = false,
}: {
  label: string;
  value: string;
  large?: boolean;
}) => (
  <div>
    <p className="text-xs font-medium text-slate-500 mb-1">{label}</p>
    <p className={`font-semibold text-slate-900 ${large ? "text-lg" : ""}`}>
      {value}
    </p>
  </div>
);

const TimelineItem = ({
  label,
  date,
  active = false,
}: {
  label: string;
  date: string;
  active?: boolean;
}) => (
  <div className="flex gap-3">
    <div
      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${active ? "bg-emerald-500" : "bg-slate-300"}`}
    />
    <div>
      <p
        className={`font-semibold text-sm ${active ? "text-slate-900" : "text-slate-500"}`}
      >
        {label}
      </p>
      <p className="text-xs text-slate-600">{date}</p>
    </div>
  </div>
);

export default OrderInfo;
