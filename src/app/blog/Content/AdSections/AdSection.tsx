import AdCard from "./AdCard";

const ads = [
  {
    image: "/adcard-1.webp",
    title: "Thu cũ đổi mới",
    description: "Trợ giá lên đến",
    price: "1.500.000₫",
    link: "/products/laptop-gaming",
  },
  {
    image: "/adcard-6.webp",
    title: "Phím cơ không dây",
    description: "DURGOD MK75 giảm đến",
    price: "26%",
    link: "/products/durgod-mk75",
  },
  {
    image: "/adcard-2.webp",
    title: "PC I5 4060",
    description: "Học tập - Làm việc - Giải trí",
    price: "4.000.000₫",
    link: "/products/pc-i5-4060",
  },
  {
    image: "/adcard-10.webp",
    title: "PC I5 4060",
    description: "Học tập - Làm việc - Giải trí",
    price: "4.000.000₫",
    link: "/products/pc-i5-4060",
  },
];

const AdSection = () => {
  return (
    <div className="hidden sm:grid lg:grid-cols-1 gap-4 ">
      {ads.map((ad, index) => (
        <AdCard key={index} {...ad} />
      ))}
    </div>
  );
};

export default AdSection;
