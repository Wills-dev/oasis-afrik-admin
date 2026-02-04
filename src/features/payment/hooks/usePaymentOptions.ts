export const usePaymentOptions = (orderId: string) => {
  const paymentGateways = [
    {
      id: "stripe",
      name: "Strip",
      icon: "/assets/images/payment-partners/stripe.svg",
      description: "Visa, Mastercard, Amex",
      onClick: () => {
        console.log("Processing Stripe payment for order:", orderId);
      },
    },
    {
      id: "paystack",
      name: "Paystack",
      icon: "/assets/images/payment-partners/paystack.svg",
      description: "Pay with your Paystack account",
      onClick: () => {
        console.log("Processing PayPal payment for order:", orderId);
      },
    },
  ];

  const isLoading = false;

  return { isLoading, paymentGateways };
};
