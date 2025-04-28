"use client";

import { useState } from "react";
import { configOptions, ConfigSelection } from "../data/configData";

interface BuildConfigFormProps {
  setConfig: React.Dispatch<React.SetStateAction<ConfigSelection>>;
}

export default function BuildConfigForm({ setConfig }: BuildConfigFormProps) {
  const [tempConfig, setTempConfig] = useState<ConfigSelection>({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
  });

  const handleSelect = (category: keyof ConfigSelection, value: string) => {
    setTempConfig((prev) => ({ ...prev, [category]: value }));
  };

  const handleSubmit = () => {
    setConfig(tempConfig);
  };

  return (
    <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg border border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CPU */}
        <div>
          <label className="block text-white font-semibold mb-2">CPU</label>
          <select
            value={tempConfig.cpu || ""}
            onChange={(e) => handleSelect("cpu", e.target.value)}
            className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>
              Chọn CPU
            </option>
            {configOptions.cpu.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* GPU */}
        <div>
          <label className="block text-white font-semibold mb-2">GPU</label>
          <select
            value={tempConfig.gpu || ""}
            onChange={(e) => handleSelect("gpu", e.target.value)}
            className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>
              Chọn GPU
            </option>
            {configOptions.gpu.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* RAM */}
        <div>
          <label className="block text-white font-semibold mb-2">RAM</label>
          <select
            value={tempConfig.ram || ""}
            onChange={(e) => handleSelect("ram", e.target.value)}
            className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>
              Chọn RAM
            </option>
            {configOptions.ram.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Storage */}
        <div>
          <label className="block text-white font-semibold mb-2">Lưu trữ</label>
          <select
            value={tempConfig.storage || ""}
            onChange={(e) => handleSelect("storage", e.target.value)}
            className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>
              Chọn lưu trữ
            </option>
            {configOptions.storage.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
        >
          Xây dựng cấu hình
        </button>
      </div>
    </div>
  );
}
