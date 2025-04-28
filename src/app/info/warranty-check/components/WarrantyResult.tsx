interface WarrantyResultProps {
  result: {
    code: string;
    device: string;
    warrantyStatus: string;
    expiryDate: string;
  };
}

export default function WarrantyResult({ result }: WarrantyResultProps) {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">
        Kết quả tra cứu
      </h2>
      <div className="space-y-3">
        <p>
          <span className="font-medium">Mã bảo hành:</span> {result.code}
        </p>
        <p>
          <span className="font-medium">Thiết bị:</span> {result.device}
        </p>
        <p>
          <span className="font-medium">Tình trạng bảo hành:</span>{" "}
          <span
            className={
              result.warrantyStatus === "Còn bảo hành"
                ? "text-green-600"
                : "text-red-600"
            }
          >
            {result.warrantyStatus}
          </span>
        </p>
        <p>
          <span className="font-medium">Ngày hết hạn:</span> {result.expiryDate}
        </p>
      </div>
      <div className="mt-6 text-center">
        <a
          href="/contact"
          className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
        >
          Liên hệ hỗ trợ
        </a>
      </div>
    </div>
  );
}
