export type Payment = {
  orderId: string;
  productName: string;
  productId: string;
  paymentType: "debit" | "credit";
  status: "pending" | "completed" | "declined";
  transactionType: "transfer" | "card";
  amount: string;
  createdAt: string;
};
