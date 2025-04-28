"use client";

import BuildConfigForm from "./components/BuildConfigForm";
import BuildConfigResult from "./components/BuildConfigResult";
import { useState } from "react";
import { ConfigSelection } from "./data/configData";

export default function BuildConfigPage() {
  const [config, setConfig] = useState<ConfigSelection>({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
  });

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl absolute top-10 left-10 animate-pulse opacity-50"></div>
        <div className="w-96 h-96 bg-gradient-to-r from-purple-400 to-red-500 rounded-full blur-3xl absolute bottom-10 right-10 animate-pulse opacity-50"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20 animate-rgb-slide"></div>
      </div>

      <div className="max-w-4xl w-full px-4 z-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
          Xây dựng cấu hình PC Gaming
        </h1>
        <BuildConfigForm setConfig={setConfig} />
        <BuildConfigResult config={config} />
      </div>
    </div>
  );
}
