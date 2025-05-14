"use client";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { CartProvider } from "@/context/CartContext";
import Sidebar from "@/app/blog/Sidebar/Sidebar";
import SidebarHeader from "./blog/Sidebar/SidebarHeader";
import Footer from "./blog/Footer";
import ChatBox from "./chatbox/ChatBox";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();

  const isShowroomPage = pathname.startsWith("/showroom");

  return (
    <html lang="vi">
      <body className="bg-gray-100 text-gray-900">
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <ChatBox />
            <div>
              {!isShowroomPage && <SidebarHeader />}
              <div>
                {!isShowroomPage && <Sidebar />}
                {children}
              </div>
            </div>
          </CartProvider>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
