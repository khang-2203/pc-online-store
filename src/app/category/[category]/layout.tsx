import { Button } from "@/components/ui/button";
import React from "react";

export default function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: string };
}) {
  return (
    <div className="border shadow-md p-4 ml-35 mr-35 m-4 bg-white hover:shadow-lg transition-all duration-300">
      <div className="p-2 rounded flex flex-wrap gap-2 items-center ">
        <span className="font-semibold">Bộ lọc:</span>
        <Button className="bg-white border px-4 py-2 rounded text-black hover:bg-* cursor-pointer">
          Thương hiệu
        </Button>
        <Button className="bg-white border px-4 py-2 rounded text-black hover:bg-* cursor-pointer">
          Giá
        </Button>
        <Button className="bg-white border px-4 py-2 rounded text-black hover:bg-* cursor-pointer">
          Hãng
        </Button>
      </div>

      <div>{children}</div>
    </div>
  );
}
