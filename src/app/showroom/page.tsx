"use client";

import { useState } from "react";
import ShowroomSidebar from "@/app/showroom/components/Sidebar";
import ShowroomList from "@/app/showroom/components/ShowroomList";
import ShowroomIntro from "@/app/showroom/components/ShowroomIntro";
import TopNav from "@/app/showroom/components/TopNav";
import { showroomData } from "@/app/showroom/data/showroomData";

export default function ShowroomPage() {
  const [selectedCity, setSelectedCity] = useState("Tất cả");

  const allCities = ["Tất cả", ...new Set(showroomData.map((s) => s.city))];
  const filteredData =
    selectedCity === "Tất cả"
      ? showroomData
      : showroomData.filter((s) => s.city === selectedCity);

  return (
    <div>
      <TopNav />
      <ShowroomIntro />

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
    </div>
  );
}
