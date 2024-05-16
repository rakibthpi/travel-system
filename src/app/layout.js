import { Inter } from "next/font/google";
import "./globals.css";
import LayoutProvider from "@/components/layoutProvider/LayoutProvider";
import Toast from "@/utils/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toast></Toast>
        <LayoutProvider>
          {children}
        </LayoutProvider>  
      </body>
    </html>
  );
}
