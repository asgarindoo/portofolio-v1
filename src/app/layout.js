import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "asgarindoo",
  description: "asgarindoo's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body {...{ inter }}>{children}</body>
    </html>
  );
}
