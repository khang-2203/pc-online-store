import { NewsArticle } from "../data/newsData";

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-full md:w-1/3 h-48 object-cover"
      />
      <div className="p-4 flex-1">
        <span className="text-sm text-gray-500">{article.category}</span>
        <h2 className="text-xl font-semibold mt-1">{article.title}</h2>
        <p className="text-gray-600 mt-2">{article.excerpt}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">{article.date}</span>
          <a
            href={`/news/${article.id}`}
            className="text-blue-500 hover:underline"
          >
            Đọc thêm
          </a>
        </div>
      </div>
    </div>
  );
}
