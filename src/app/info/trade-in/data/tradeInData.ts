export interface TradeInPrice {
  product: string;
  brand: string;
  price: number;
}

export const tradeInPrices: TradeInPrice[] = [
  {
    product: "VGA",
    brand: "NVIDIA GTX 1660",
    price: 2000000,
  },
  {
    product: "VGA",
    brand: "AMD RX 580",
    price: 1500000,
  },
  {
    product: "Mainboard",
    brand: "ASUS ROG Strix B550",
    price: 1000000,
  },
  {
    product: "Mainboard",
    brand: "MSI B450 Tomahawk",
    price: 800000,
  },
  {
    product: "CPU",
    brand: "Intel Core i5-9400F",
    price: 1200000,
  },
  {
    product: "CPU",
    brand: "AMD Ryzen 5 3600",
    price: 1000000,
  },
];
