import ProductCard from "@/components/products/ProductCard";
import { mockData } from "@/app/category/configs/mockData";

export default function CategoryPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {mockData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
