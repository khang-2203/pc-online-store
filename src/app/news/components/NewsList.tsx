import { newsData } from "../data/newsData";
import NewsCard from "./NewsCard";

export default function NewsList() {
  return (
    <div className="space-y-6">
      {newsData.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}
