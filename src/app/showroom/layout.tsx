import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ShowroomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <aside className="w-[250px] bg-red-500 text-white p-4">
        <Button className="w-full hover:bg-* hover:text-*" variant="ghost">
          <Link href="/">
            <h2 className="text-xl font-bold mb-4 ">Showroom</h2>
          </Link>
        </Button>
        <ul className="space-y-2">
          <li>
            <a href="/showroom">Trang chính</a>
          </li>
          <li>
            <a href="/showroom/diadiem">Địa điểm</a>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
