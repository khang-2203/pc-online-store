import AdCard from "./AdCard";

const ads = [
  {
    image: "/adcard-5.webp",
    title: "PC I5 4060",
    description: "Học tập - Làm việc - Giải trí",
    price: "4.000.000₫",
    link: "/products/pc-i5-4060",
  },
  {
    image: "/adcard-3.webp",
    title: "PC I5 4060",
    description: "Học tập - Làm việc - Giải trí",
    price: "4.000.000₫",
    link: "/products/pc-i5-4060",
  },
  {
    image: "/adcard-7.webp",
    title: "PC I5 4060",
    description: "Học tập - Làm việc - Giải trí",
    price: "4.000.000₫",
    link: "/products/pc-i5-4060",
  },
  {
    image: "/adcard-8.webp",
    title: "PC I5 4060",
    description: "Học tập - Làm việc - Giải trí",
    price: "4.000.000₫",
    link: "/products/pc-i5-4060",
  },
  {
    image: "/adcard-9.webp",
    title: "PC I5 4060",
    description: "Học tập - Làm việc - Giải trí",
    price: "4.000.000₫",
    link: "/products/pc-i5-4060",
  },
  {
    image: "/adcard-4.webp",
    title: "PC I5 4060",
    description: "Học tập - Làm việc - Giải trí",
    price: "4.000.000₫",
    link: "/products/pc-i5-4060",
  },
];

const AdSectionBonus = () => {
  return (
    <div className=" lg:grid-cols-3 gap-4 hidden sm:grid">
      {ads.map((ad, index) => (
        <AdCard key={index} {...ad} />
      ))}
    </div>
  );
};

export default AdSectionBonus;
