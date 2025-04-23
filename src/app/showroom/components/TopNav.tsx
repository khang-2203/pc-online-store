import { Phone, MonitorCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TopNav() {
  return (
    <div className="w-full bg-white shadow px-6 py-4">
      <div className="flex items-center justify-center gap-20">
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            className="text-red-600 text-xl font-bold flex items-center cursor-pointer hover:bg-* hover:text-*"
          >
            <Link href="/">
              <MonitorCog style={{ width: "36px", height: "36px" }} />
              <span className="">XGEAR</span>
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-10 font-medium text-black">
          <Link href="/showroom">Hệ thống Showroom</Link>
          <Link href="#">Trả góp</Link>
          <Link href="#">Bảo hành</Link>
          <Link href="#">Liên hệ</Link>
        </div>

        <div>
          <button className="flex items-center gap-2 border border-red-500 text-red-500 font-semibold px-6 py-2 rounded-full hover:bg-red-50 transition cursor-pointer">
            <Phone size={18} />
            <span>Hotline: 1900 5303</span>
          </button>
        </div>
      </div>
    </div>
  );
}
