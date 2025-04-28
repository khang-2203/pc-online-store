"use client";

import WarrantyForm from "./components/WarrantyForm";
import WarrantyResult from "./components/WarrantyResult";
import { useState } from "react";
import { fetchWarrantyInfo, WarrantyResultData } from "./data/warrantyData";

export default function WarrantyLookupPage() {
  const [result, setResult] = useState<WarrantyResultData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (code: string) => {
    try {
      const warrantyInfo = fetchWarrantyInfo(code);
      setResult(warrantyInfo);
      setError(null);
    } catch (err: any) {
      setResult(null);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-12">
      <div className="max-w-3xl w-full px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Tra cứu bảo hành
        </h1>
        <WarrantyForm onSearch={handleSearch} />
        {error && (
          <div className="mt-4 text-center text-red-600 font-medium">
            {error}
          </div>
        )}
        {result && <WarrantyResult result={result} />}
      </div>
    </div>
  );
}
