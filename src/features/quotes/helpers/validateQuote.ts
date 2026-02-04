import { QuotePayloadType } from "../types";

export const validateQuote = (quote: QuotePayloadType) => {
  const required = [
    ["amount", "Amount is required"],
    ["currency", "Currency is required"],
    ["quantity", "Quantity is required"],
    ["quantityUnitId", "Quantity unit is required"],
    ["address", "Delivery address is required"],
  ] as const;

  for (const [key, message] of required) {
    if (!quote[key]) {
      return message;
    }
  }

  if (quote.minLeadTime) {
    if (!quote.minLeadTimePeriodId) {
      return "Please select a period for minimum lead time";
    }
    if (!quote.maxLeadTime) {
      return "Maximum lead time is required when minimum lead time is provided";
    }
    if (!quote.maxLeadTimePeriodId) {
      return "Please select a period for maximum lead time";
    }
  }

  if (quote.maxLeadTime && !quote.maxLeadTimePeriodId) {
    return "Please select a period for maximum lead time";
  }

  return null;
};
