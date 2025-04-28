"use client";

import { Button } from "@/components/ui/button";
import {
  LaptopMinimal,
  Newspaper,
  Settings,
  CreditCard,
  HandCoins,
  ShieldUser,
} from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-6 h-6 flex flex-row justify-center items-center pt-20 z-50">
      <Link href="/info/build-pc" passHref>
        <Button
          variant="ghost"
          className="text-black text-sm hover:text-red-500 transition cursor-pointer border-r rounded-none px-4 hover:bg-*"
        >
          <LaptopMinimal className="mr-2" />
          Xây dựng cấu hình
        </Button>
      </Link>

      <Link href="/news" passHref>
        <Button
          variant="ghost"
          className="text-black text-sm hover:text-red-500 transition cursor-pointer border-r rounded-none px-4 hover:bg-*"
        >
          <Newspaper className="mr-2" />
          Tin tức công nghệ
        </Button>
      </Link>

      <Link href="/info/repair" passHref>
        <Button
          variant="ghost"
          className="text-black text-sm hover:text-red-500 transition cursor-pointer border-r rounded-none px-4 hover:bg-*"
        >
          <Settings className="mr-2" />
          Dịch vụ sửa chữa máy tính
        </Button>
      </Link>

      <Link href="/info/warranty-check" passHref>
        <Button
          variant="ghost"
          className="text-black text-sm hover:text-red-500 transition cursor-pointer border-r rounded-none px-4 hover:bg-*"
        >
          <CreditCard className="mr-2" />
          Tra cứu bảo hành
        </Button>
      </Link>

      <Link href="/info/trade-in" passHref>
        <Button
          variant="ghost"
          className="text-black text-sm hover:text-red-500 transition cursor-pointer border-r rounded-none px-4 hover:bg-*"
        >
          <HandCoins className="mr-2" />
          Thu cũ đổi mới
        </Button>
      </Link>

      <Link href="/info/installment-terms" passHref>
        <Button
          variant="ghost"
          className="text-black text-sm hover:text-red-500 transition cursor-pointer rounded-none px-4 hover:bg-*"
        >
          <ShieldUser className="mr-2" />
          Điều khoản trả góp
        </Button>
      </Link>
    </header>
  );
};

export default Header;
