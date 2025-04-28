import { ConfigSelection, configPrices } from "../data/configData";

interface BuildConfigResultProps {
  config: ConfigSelection;
}

export default function BuildConfigResult({ config }: BuildConfigResultProps) {
  const calculateTotalPrice = () => {
    let total = 0;
    if (config.cpu) total += configPrices.cpu[config.cpu] || 0;
    if (config.gpu) total += configPrices.gpu[config.gpu] || 0;
    if (config.ram) total += configPrices.ram[config.ram] || 0;
    if (config.storage) total += configPrices.storage[config.storage] || 0;
    return total;
  };

  const totalPrice = calculateTotalPrice();

  if (!config.cpu && !config.gpu && !config.ram && !config.storage) {
    return null;
  }

  return (
    <div className="mt-8 bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-2xl font-semibold text-white mb-4 drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
        Cấu hình của bạn
      </h2>
      <div className="space-y-3 text-white">
        {config.cpu && (
          <p>
            <span className="font-medium">CPU:</span> {config.cpu} -{" "}
            {(configPrices.cpu[config.cpu] || 0).toLocaleString()} VNĐ
          </p>
        )}
        {config.gpu && (
          <p>
            <span className="font-medium">GPU:</span> {config.gpu} -{" "}
            {(configPrices.gpu[config.gpu] || 0).toLocaleString()} VNĐ
          </p>
        )}
        {config.ram && (
          <p>
            <span className="font-medium">RAM:</span> {config.ram} -{" "}
            {(configPrices.ram[config.ram] || 0).toLocaleString()} VNĐ
          </p>
        )}
        {config.storage && (
          <p>
            <span className="font-medium">Lưu trữ:</span> {config.storage} -{" "}
            {(configPrices.storage[config.storage] || 0).toLocaleString()} VNĐ
          </p>
        )}
      </div>
      <div className="mt-4 text-right">
        <p className="text-xl font-bold text-green-400 drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]">
          Tổng cộng: {totalPrice.toLocaleString()} VNĐ
        </p>
      </div>
      <div className="mt-4 text-center">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-purple-500 to-red-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-red-600 transition-all duration-300"
        >
          Liên hệ đặt hàng
        </a>
      </div>
    </div>
  );
}
