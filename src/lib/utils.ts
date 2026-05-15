import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Install clsx + tailwind-merge for clean class merging
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
