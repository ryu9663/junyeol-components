import { DateValue } from "@/components/atoms";

export const convertDateToString = (date: DateValue) => {
  if (!date) return "";
  if (Array.isArray(date)) {
    return `${date[0]?.toLocaleDateString()} ~ ${date[1]?.toLocaleDateString()}`;
  }
  return date.toLocaleDateString();
};
