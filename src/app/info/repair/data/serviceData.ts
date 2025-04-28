export interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

export const serviceData: Service[] = [
  {
    id: 1,
    title: "Dịch vụ hỗ trợ kỹ thuật tại nhà",
    description:
      "Hỗ trợ cài đặt, sửa lỗi phần mềm/mạng ngay tại nhà bạn. Đáp ứng trong 48 giờ.",
    category: "Hỗ trợ kỹ thuật",
    price: 300000,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&h=200&fit=crop",
  },
  {
    id: 2,
    title: "Dịch vụ sửa chữa",
    description:
      "Sửa chữa phần cứng, phần mềm cho máy tính, laptop. Bảo hành 30 ngày cho linh kiện sửa chữa.",
    category: "Sửa chữa",
    price: 500000,
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=300&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Tra cứu thông tin bảo hành",
    description:
      "Kiểm tra thời hạn bảo hành và tình trạng thiết bị. Miễn phí cho khách hàng.",
    category: "Bảo hành",
    price: 0,
    image:
      "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=300&h=200&fit=crop",
  },
  {
    id: 4,
    title: "Dịch vụ vệ sinh miễn phí",
    description:
      "Vệ sinh máy tính, laptop miễn phí, giúp thiết bị chạy mượt mà. Ưu tiên xử lý trong 12-24 giờ.",
    category: "Vệ sinh",
    price: 0,
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=300&h=200&fit=crop",
  },
  {
    id: 5,
    title: "Mua hàng trả góp",
    description:
      "Hỗ trợ mua linh kiện, thiết bị trả góp với lãi suất 0%. Thời hạn linh hoạt 6-12 tháng.",
    category: "Mua trả góp",
    price: 0,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=300&h=200&fit=crop",
  },
];
