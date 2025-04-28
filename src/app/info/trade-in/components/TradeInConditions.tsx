export default function TradeInConditions() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">
        Điều kiện áp dụng
      </h2>
      <ul className="list-disc pl-5 text-gray-600 space-y-2">
        <li>
          Đối với Mainboard, chỉ áp dụng cho các thương hiệu Gigabyte, MSI, Asus
          và Asrock.
        </li>
        <li>
          Chúng tôi chỉ thu lại sản phẩm cũ khi bạn mua sản phẩm mới tại cửa
          hàng; hiện chưa cung cấp dịch vụ thu mua riêng lẻ.
        </li>
        <li>
          Sản phẩm không đủ điều kiện thu mua:
          <ul className="list-circle pl-5 mt-2 space-y-1">
            <li>Hư hỏng nặng, móp méo, cháy nổ, biến dạng hoặc gãy vỡ.</li>
            <li>Linh kiện đã bị thay thế không đúng tiêu chuẩn.</li>
            <li>Không xác định rõ tên, thương hiệu.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
