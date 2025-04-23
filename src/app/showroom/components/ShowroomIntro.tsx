import { Button } from "@/components/ui/button";

export default function ShowroomIntro() {
  return (
    <div className="relative w-full h-[450px] rounded overflow-hidden shadow mb-6">
      <img
        src="/showroom.jpg"
        alt="Showroom Banner"
        className="w-full h-full object-cotain"
      />
      <div className="absolute inset-15 flex justify-start">
        <div className="pl-21 space-y-2">
          <h2 className="text-5xl text-red-500 font-bold">
            Hệ thống showroom toàn quốc
          </h2>
          <h2 className="text-2xl text-black ">
            Địa điểm trải nghiệm và mua sắm thiết bị công nghệ cao cấp
          </h2>
          <Button className="bg-red-500 hover:bg-red-600 text-xl py-4 px-20 rounded-lg cursor-pointer">
            Xem ngay
          </Button>
        </div>
      </div>
    </div>
  );
}
