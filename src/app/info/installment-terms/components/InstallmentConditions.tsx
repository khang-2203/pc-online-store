export default function InstallmentConditions() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">
        Điều kiện áp dụng
      </h2>
      <ul className="list-disc pl-5 text-gray-600 space-y-2">
        <li>Khách hàng từ 20 tuổi trở lên, có CMND/CCCD còn hiệu lực.</li>
        <li>Đơn hàng có giá trị từ 3.000.000 VNĐ trở lên.</li>
        <li>Áp dụng cho các sản phẩm: Laptop, PC, VGA, Mainboard, CPU.</li>
        <li>Cần cung cấp giấy tờ chứng minh thu nhập (nếu yêu cầu).</li>
      </ul>
    </div>
  );
}
