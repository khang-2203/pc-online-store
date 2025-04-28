import { tradeInPrices } from "../data/tradeInData";

export default function TradeInPriceTable() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">
        Bảng giá tham khảo
      </h2>
      <p className="text-gray-600 mb-4">
        Lưu ý: Giá thu mua có thể thay đổi tùy theo thị trường. Vui lòng liên hệ
        để có báo giá chính xác nhất.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="border border-gray-300 p-3 text-left">Sản phẩm</th>
              <th className="border border-gray-300 p-3 text-left">
                Thương hiệu
              </th>
              <th className="border border-gray-300 p-3 text-left">
                Giá thu (VNĐ)
              </th>
            </tr>
          </thead>
          <tbody>
            {tradeInPrices.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">{item.product}</td>
                <td className="border border-gray-300 p-3">{item.brand}</td>
                <td className="border border-gray-300 p-3">
                  {item.price.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
