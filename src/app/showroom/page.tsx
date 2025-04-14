"use client";

import ShowroomSidebar from "@/app/showroom/components/Sidebar";
import ShowroomList from "./components/ShowroomList";
import { showroomData } from "@/app/showroom/data/showroomData";
import { useState } from "react";

export default function ShowroomPage() {
  const [selectedCity, setSelectedCity] = useState("Tất cả");

  const allCities = ["Tất cả", ...showroomData.map((s) => s.city)];
  const filteredData =
    selectedCity === "Tất cả"
      ? showroomData
      : showroomData.filter((s) => s.city === selectedCity);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
      <ShowroomSidebar
        cities={allCities}
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
      />
      <div className="flex-1">
        <ShowroomList data={filteredData} />
      </div>
    </div>
  );
}
