export interface WarrantyResultData {
  code: string;
  device: string;
  warrantyStatus: string;
  expiryDate: string;
}

const warrantyRecords: WarrantyResultData[] = [
  {
    code: "223203",
    device: "Laptop Dell XPS 13",
    warrantyStatus: "Còn bảo hành",
    expiryDate: "31/12/2025",
  },
  {
    code: "181204",
    device: "PC HP Pavilion",
    warrantyStatus: "Hết bảo hành",
    expiryDate: "01/01/2024",
  },
  {
    code: "181933",
    device: "MacBook Pro 14",
    warrantyStatus: "Còn bảo hành",
    expiryDate: "15/06/2026",
  },
  {
    code: "150503",
    device: "Laptop ASUS ROG Zephyrus",
    warrantyStatus: "Hết bảo hành",
    expiryDate: "10/10/2022",
  },
  {
    code: "123456",
    device: "PC Lenovo ThinkCentre",
    warrantyStatus: "Hết bảo hành",
    expiryDate: "30/11/2023",
  },
];

export const fetchWarrantyInfo = (code: string): WarrantyResultData => {
  const codeUpper = code.toUpperCase();
  const record = warrantyRecords.find((item) => item.code === codeUpper);

  if (!record) {
    throw new Error("Không tồn tại mã này");
  }

  return record;
};
