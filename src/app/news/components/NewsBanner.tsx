export default function NewsBanner() {
  return (
    <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden mb-8">
      <img
        src="/banner_tintuc2.jpg"
        alt="News Banner"
        className="w-full h-48 object-cotain opacity-50 "
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Tin tức mới nhất</h1>
          <p className="text-lg">Cập nhật những câu chuyện mới nhất!</p>
        </div>
      </div>
    </div>
  );
}
