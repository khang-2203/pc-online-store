import Image from "next/image";
import { FaFacebookF, FaTiktok, FaYoutube, FaComment } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="py-6 px-4 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-base font-bold uppercase mb-1.5">Về Xgrear</h4>
          <Button
            variant="link"
            className="block mb-1 p-0 h-auto hover:text-red-500 cursor-pointer"
          >
            Giới thiệu
          </Button>
          <Button
            variant="link"
            className="block mb-1 p-0 h-auto hover:text-red-500 cursor-pointer"
          >
            Tuyển dụng
          </Button>
          <Button
            variant="link"
            className="block mb-1 p-0 h-auto hover:text-red-500 cursor-pointer"
          >
            Liên hệ
          </Button>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h4 className="text-base font-bold uppercase mb-1.5">Chính sách</h4>
          <Button
            variant="link"
            className="block mb-1 p-0 h-auto hover:text-red-500 cursor-pointer"
          >
            Chính sách bảo hành
          </Button>
          <Button
            variant="link"
            className="block mb-1 p-0 h-auto hover:text-red-500 cursor-pointer"
          >
            Chính sách thanh toán
          </Button>
          <Button
            variant="link"
            className="block mb-1 p-0 h-auto hover:text-red-500 cursor-pointer"
          >
            Chính sách giao hàng
          </Button>
          <Button
            variant="link"
            className="block mb-1 p-0 h-auto hover:text-red-500 cursor-pointer"
          >
            Chính sách bảo mật
          </Button>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h4 className="text-base font-bold uppercase mb-1.5">Thông tin</h4>
          <Button
            variant="link"
            className="block mb-1 p-0 h-auto hover:text-red-500 cursor-pointer"
          >
            Hệ thống cửa hàng
          </Button>
          <Button
            variant="link"
            className="block mb-1 p-0 h-auto hover:text-red-500 cursor-pointer"
          >
            Hướng dẫn mua hàng
          </Button>
          <Button
            variant="link"
            className="block mb-1 p-0 h-auto hover:text-red-500 cursor-pointer"
          >
            Tra cứu địa chỉ bảo hành
          </Button>
          <Button
            variant="link"
            className="block mb-1 p-0 h-auto hover:text-red-500 cursor-pointer"
          >
            Khiếu nại
          </Button>
          <p className="mb-1">
            Email:{" "}
            <a
              href="mailto:cskh@xgrear.com"
              className="text-blue-600 hover:underline"
            >
              cskh@xgrear.com
            </a>
          </p>
        </div>

        <div className="flex-2 min-w-[200px]">
          <h4 className="text-base font-bold uppercase mb-1.5">
            Tổng đài hỗ trợ (8:00 - 21:00)
          </h4>
          <p className="mb-1">
            Mua hàng:{" "}
            <a href="tel:19005303" className="text-blue-600 hover:underline">
              1900.5303
            </a>
          </p>
          <p className="mb-1">
            Bảo hành:{" "}
            <a href="tel:19005322" className="text-blue-600 hover:underline">
              1900.5322
            </a>
          </p>
          <p className="mb-1">
            Khiếu nại:{" "}
            <a href="tel:18006171" className="text-blue-600 hover:underline">
              1800.6171
            </a>
          </p>
        </div>

        <div className="flex-2 min-w-[200px]">
          <h4 className="text-base font-bold uppercase mb-1.5">
            Các hình thức thanh toán
          </h4>
          <div className="flex flex-wrap gap-4">
            <Image
              src="/momo.webp"
              alt="MoMo"
              width={60}
              height={60}
              className="object-contain"
            />
            <Image
              src="/visa.webp"
              alt="Visa"
              width={60}
              height={60}
              className="object-contain"
            />
            <Image
              src="/mastercard.webp"
              alt="MasterCard"
              width={60}
              height={60}
              className="object-contain"
            />
            <Image
              src="/jcbbank.webp"
              alt="JCB"
              width={60}
              height={60}
              className="object-contain"
            />
            <Image
              src="/tienmat.webp"
              alt="Tiền mặt"
              width={60}
              height={60}
              className="object-contain"
            />
            <Image
              src="/tragop.webp"
              alt="Trả 0%"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <hr className="my-4 border-gray-300" />

      <div className="max-w-6xl mx-auto mt-6 flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="uppercase font-bold">Kết nối với chúng tôi</span>
          <div className="flex gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="w-5 h-5 text-blue-600 hover:text-blue-700" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="w-5 h-5 text-black" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="w-5 h-5 text-red-600 hover:text-red-700" />
            </a>
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">
              <FaComment className="w-5 h-5 text-gray-700 hover:text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
