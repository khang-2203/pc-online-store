export interface ConfigSelection {
  cpu: string | null;
  gpu: string | null;
  ram: string | null;
  storage: string | null;
}

// Định nghĩa interface cho object giá với index signature
interface PriceMap {
  [key: string]: number;
}

export const configOptions = {
  cpu: ["Intel Core i5-13400F", "AMD Ryzen 5 7600X", "Intel Core i7-13700K"],
  gpu: ["NVIDIA RTX 3060", "AMD RX 6700 XT", "NVIDIA RTX 4080"],
  ram: ["16GB DDR5", "32GB DDR5", "64GB DDR5"],
  storage: ["1TB NVMe SSD", "2TB NVMe SSD", "1TB HDD + 512GB SSD"],
};

export const configPrices: {
  cpu: PriceMap;
  gpu: PriceMap;
  ram: PriceMap;
  storage: PriceMap;
} = {
  cpu: {
    "Intel Core i5-13400F": 5500000,
    "AMD Ryzen 5 7600X": 6500000,
    "Intel Core i7-13700K": 9500000,
  },
  gpu: {
    "NVIDIA RTX 3060": 8500000,
    "AMD RX 6700 XT": 9000000,
    "NVIDIA RTX 4080": 30000000,
  },
  ram: {
    "16GB DDR5": 2000000,
    "32GB DDR5": 4000000,
    "64GB DDR5": 8000000,
  },
  storage: {
    "1TB NVMe SSD": 2500000,
    "2TB NVMe SSD": 4500000,
    "1TB HDD + 512GB SSD": 2000000,
  },
};
