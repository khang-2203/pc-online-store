import NewsBanner from "./components/NewsBanner";
import NewsList from "./components/NewsList";
import NewsSidebar from "./components/NewsSidebar";

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <NewsBanner />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <NewsList />
        </div>

        <div className="md:col-span-1">
          <NewsSidebar />
        </div>
      </div>
    </div>
  );
}
