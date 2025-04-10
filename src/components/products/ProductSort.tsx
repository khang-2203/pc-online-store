"use client";

interface ProductSortProps {
  onSortChange?: (sortOption: string) => void;
}

export default function ProductSort({
  onSortChange = () => {},
}: ProductSortProps) {
  return (
    <div>
      <h2>Sort</h2>
      <button onClick={() => onSortChange("price")}>Sort by Price</button>
    </div>
  );
}
