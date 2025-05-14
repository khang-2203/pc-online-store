import Article from "@/app/blog/Content/MainBanner";
import AdSection from "@/app/blog/Content/AdSections/AdSection";
import AdSectionBonus from "./blog/Content/AdSections/AdSectionBonus";
import FlashSale from "@/app/blog/Content/Flashsale/Flashsale";
import ProductsPage from "@/app/products/page";
import type { Metadata } from "next";
import ChatBox from "./chatbox/ChatBox";

export const metadata: Metadata = {
  title:
    "Xgear-Máy tính cao cấp, Laptop, thiết bị chơi game, làm việc hàng đầu Việt Nam",
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <div className="container mx-auto grid grid-cols-12 p-4 justify-between pl-30 pr-30 gap-4">
        <aside className="col-span-2 hidden md:block ">
          <img src="adcard-11.webp" alt="ads" />
        </aside>
        <main className="col-span-7 flex flex-col">
          <section className="w-full">
            <Article />
          </section>
          <section className="w-full grid grid-cols-1 gap-4 mt-4">
            <AdSectionBonus />
          </section>
        </main>
        <aside className="col-span-3 flex flex-col gap-4 w-full">
          <AdSection />
        </aside>
      </div>
      <div className="container mx-auto w-[1280px] p-4 col-span-3 flex flex-col justify-center items-center gap-4 ">
        <FlashSale />
      </div>
      <div className="container mx-auto w-[1280px] m-4 col-span-3 flex flex-col justify-center items-center gap-4">
        <ProductsPage />
      </div>
      <ChatBox />
    </div>
  );
}
