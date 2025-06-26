"use client";

import { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  Headset,
  MonitorCog,
  MapPin,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "../../category/CategoryMenu";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import LoginButton from "@/components/auth/LoginButton";
import { useRouter } from "next/navigation";

const SidebarHeader = () => {
  const [isCategoryActive, setIsCategoryActive] = useState(false);
  const { cartItems, getTotalQuantity } = useCart();
  const quantity = getTotalQuantity();
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  useEffect(() => {
    console.log("Giỏ hàng đã thay đổi:", cartItems);
  }, [cartItems]);

  const handleSearch = () => {
    if (!keyword.trim()) return;
    router.push(`/search?q=${encodeURIComponent(keyword)}`);
  };

  return (
    <div className="sticky top-0 left-0 w-full z-50">
      <header className="fixed top-0 left-0 w-full bg-red-600 shadow-md h-14 flex items-center px-4">
        <Button
          asChild
          variant="ghost"
          className="text-white text-xl font-bold flex items-center cursor-pointer hover:bg-* hover:text-*"
        >
          <Link href="/">
            <MonitorCog style={{ width: "36px", height: "36px" }} />
            <span className="ml-2">XGEAR</span>
          </Link>
        </Button>

        <Button
          className="ml-2 bg-red-700 text-white text-base px-3 py-1.5 rounded items-center hover:bg-red-800 transition cursor-pointer hidden md:flex"
          onClick={() => setIsCategoryActive(true)}
        >
          <Menu style={{ width: "24px", height: "24px" }} />
          <span className="font-semibold">Danh Mục</span>
        </Button>

        <div className="flex-grow mx-2 bg-white flex items-center px-3 py-1.5 rounded-md">
          <Search
            className="w-5 h-5 text-gray-500 cursor-pointer"
            onClick={handleSearch}
          />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Bạn cần tìm gì?"
            className="w-full ml-2 text-sm outline-none"
          />
        </div>

        <div className="text-white text-xs mx-1 items-center space-x-2 hidden md:flex">
          <Headset style={{ width: "24px", height: "24px" }} />
          <div>
            <span className="font-bold block">Hotline</span>
            <span>1900.1812</span>
          </div>
        </div>

        <Button
          variant="ghost"
          className="text-white text-xs mx-1 items-center cursor-pointer hover:bg-* hover:text-* hidden md:flex"
        >
          <Link href={"/showroom"} className="flex items-center">
            <MapPin style={{ width: "24px", height: "24px" }} />
            Showroom
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="text-white text-xs mx-1 hidden md:flex items-center cursor-pointer hover:bg-* hover:text-*"
        >
          <ClipboardList style={{ width: "24px", height: "24px" }} />
          Tra Cứu Đơn hàng
        </Button>
        <Button
          asChild
          variant="ghost"
          className="relative text-white text-xs mx-1 cursor-pointer hover:bg-white/10 hover:text-white "
        >
          <Link href="/cart" className="flex items-center">
            <ShoppingCart style={{ width: "24px", height: "24px" }} />
            <span className="absolute -top-0.5 -right-0.5 bg-yellow-500 text-black text-xs font-bold px-1.5 rounded-full">
              {quantity}
            </span>
          </Link>
        </Button>
        <LoginButton />
      </header>

      <Sidebar
        isOpen={isCategoryActive}
        onClose={() => setIsCategoryActive(false)}
      />

      {isCategoryActive && (
        <div
          className="fixed inset-0 bg-opacity-50 z-10"
          onClick={() => setIsCategoryActive(false)}
        />
      )}
    </div>
  );
};

export default SidebarHeader;
