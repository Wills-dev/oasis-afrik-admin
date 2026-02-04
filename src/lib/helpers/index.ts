import {
  differenceInHours,
  differenceInMinutes,
  differenceInDays,
  differenceInWeeks,
} from "date-fns";

export const getCurrencySign = (currency: string): string => {
  switch (currency?.toUpperCase()) {
    case "NGN":
      return "₦";
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    default:
      return "₦";
  }
};

export const convertDateFormat = (oldDate: string | Date) => {
  const date = new Date(oldDate).toString().split(" ");
  const newFormat = ` ${date[2]}  ${date[1]}, ${date[3]}`;
  return newFormat;
};

export const formatCreatedAt = (date: string): string => {
  const createdAt = date;
  const now = new Date();

  const hoursDiff = differenceInHours(now, createdAt);
  const minutesDiff = differenceInMinutes(now, createdAt);
  const daysDiff = differenceInDays(now, createdAt);
  const weeksDiff = differenceInWeeks(now, createdAt);

  if (hoursDiff < 1) {
    if (minutesDiff < 1) {
      return "Just now";
    } else if (minutesDiff < 2 && minutesDiff >= 1) {
      return `${minutesDiff}m ago`;
    } else {
      return `${minutesDiff}m ago`;
    }
  } else if (hoursDiff < 24) {
    return `${hoursDiff}h ago`;
  } else if (daysDiff <= 7) {
    return `${daysDiff}d ago`;
  } else {
    return `${weeksDiff}w ago`;
  }
};

export function numberWithCommas(x: number) {
  const newNum = Number(x.toFixed(2));
  return newNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
