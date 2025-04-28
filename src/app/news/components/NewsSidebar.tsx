"use client";

import { useState } from "react";

export default function NewsSidebar() {
  const [search, setSearch] = useState("");
  const categories = [
    "Công nghệ",
    "Việc kinh doanh",
    "Sức khỏe",
    "Thể thao",
    "Sự giải trí",
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Tìm kiếm</h3>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search articles..."
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Thể loại</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <a
                href={`#${category.toLowerCase()}`}
                className="text-blue-500 hover:underline"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
