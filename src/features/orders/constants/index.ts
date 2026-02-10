import { OrderStatus } from "../types";

export const orderSteps: {
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
