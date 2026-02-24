import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function CurrentDate() {
  const now = new Date();
  const formattedDate = format(now, "EEEE, dd MMMM yyyy");
  return formattedDate;
}
