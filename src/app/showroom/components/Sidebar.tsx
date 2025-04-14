"use client";

import { useState } from "react";

type SidebarProps = {
  cities: string[];
  selectedCity: string;
  onSelectCity: (city: string) => void;
};

export default function ShowroomSidebar({
  cities,
  selectedCity,
  onSelectCity,
}: SidebarProps) {
  return (
    <aside className="w-full md:w-64 bg-white p-4 rounded shadow h-fit">
      <h3 className="text-lg font-semibold mb-4">Chọn tỉnh / thành phố</h3>
      <ul className="space-y-2">
        {cities.map((city) => (
          <li key={city}>
            <button
              onClick={() => onSelectCity(city)}
              className={`w-full text-left px-3 py-2 rounded transition ${
                selectedCity === city
                  ? "bg-red-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {city}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
