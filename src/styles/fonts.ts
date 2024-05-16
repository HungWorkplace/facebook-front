import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
