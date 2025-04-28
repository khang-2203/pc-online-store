"use client";

import { useState } from "react";

interface WarrantyFormProps {
  onSearch: (code: string) => void;
}

export default function WarrantyForm({ onSearch }: WarrantyFormProps) {
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      onSearch(code);
    }
  };

  return (
    <div className="relative bg-white p-8 rounded-lg shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Nhập mã bảo hành hoặc số serial..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          Tra cứu
        </button>
      </form>
    </div>
  );
}
