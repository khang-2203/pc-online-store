export default function ServiceBanner() {
  return (
    <div className="relative text-white rounded-lg overflow-hidden">
      <img
        src="/repair.jpg"
        alt="Service Banner"
        className="w-full h-64 object-cotain "
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-2">Dịch Vụ Sửa Chữa Máy Tính</h1>
        <p className="text-lg">
          Chất lượng cao, nhanh chóng, đáp ứng mọi nhu cầu của bạn!
        </p>
      </div>
    </div>
  );
}
