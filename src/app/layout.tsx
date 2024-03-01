import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import StoreProvider from "@/provider/store/StoreProvider.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BestiesPlay",
  description: "This is an web for playing the your childhood games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
    <html lang="en" >
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
    </StoreProvider>
  );
}
