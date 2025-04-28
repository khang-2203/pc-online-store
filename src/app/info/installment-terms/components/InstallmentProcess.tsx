export default function InstallmentProcess() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">
        Quy trình thực hiện
      </h2>
      <ol className="list-decimal pl-5 text-gray-600 space-y-2">
        <li>
          Lựa chọn sản phẩm và kiểm tra điều kiện trả góp tại cửa hàng hoặc
          website.
        </li>
        <li>
          Chuẩn bị giấy tờ cần thiết (CMND/CCCD, giấy tờ chứng minh thu nhập nếu
          có).
        </li>
        <li>Nhân viên tư vấn và hỗ trợ làm hồ sơ trả góp.</li>
        <li>Chờ duyệt hồ sơ (trong vòng 5-10 phút).</li>
        <li>Hoàn tất thanh toán trả trước và nhận sản phẩm.</li>
      </ol>
    </div>
  );
}
