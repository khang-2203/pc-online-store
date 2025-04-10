"use client";

interface ProductFilterProps {
  categories?: string[];
  onFilterChange?: (category: string) => void;
}

export default function ProductFilter({
  categories = ["Default"],
  onFilterChange = () => {},
}: ProductFilterProps) {
  return (
    <div>
      <h2>Filter</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onFilterChange(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
