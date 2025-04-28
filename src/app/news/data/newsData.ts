// news/data/newsData.ts
export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export const newsData: NewsArticle[] = [
  {
    id: 1,
    title: "Đột phá AI trong chăm sóc sức khỏe",
    excerpt:
      "Mô hình AI mới có khả năng dự đoán bệnh tật với độ chính xác chưa từng có.",
    category: "Công nghệ",
    date: "2025-04-25",
    image: "/banner_tintuc1.jpg",
  },
  {
    id: 2,
    title: "Thị trường chứng khoán tăng vọt",
    excerpt: "Cổ phiếu công nghệ dẫn đầu đà tăng trên thị trường toàn cầu.",
    category: "Việc kinh doanh",
    date: "2025-04-24",
    image: "StockMarketSurges.webp",
  },
  {
    id: 3,
    title: "Xu hướng thể dục mới đang lên ngôi",
    excerpt: "Tại sao mọi người lại bàn tán về bài tập luyện mới này.",
    category: "Sức khỏe",
    date: "2025-04-23",
    image: "New Fitness Trend Takes Over.jpg",
  },
  {
    id: 4,
    title: "Chuẩn bị cho World Cup 2026",
    excerpt: "Các nước chủ nhà công bố những cập nhật quan trọng cho giải đấu.",
    category: "Thể thao",
    date: "2025-04-22",
    image: "World Cup 2026 Preparations.jpg",
  },
  {
    id: 5,
    title: "Phim bom tấn phá vỡ kỷ lục",
    excerpt:
      "Bộ phim khoa học viễn tưởng mới nhất phá vỡ kỳ vọng về doanh thu phòng vé.",
    category: "Sự giải trí",
    date: "2025-04-21",
    image: "Blockbuster Movie Breaks Records.webp",
  },
];
