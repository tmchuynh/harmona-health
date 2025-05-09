import ArticleCard from "@/components/card/ArticleCard";
import OverlappingImageTiles from "@/components/images/OverlappingImageTiles";
import { articles } from "@/lib/resources/articles/articles";
import { sortByProperty } from "@/lib/utils/sort";
export default function Page() {
  const sortedArticles = sortByProperty(articles, "title");

  return (
    <main className="overflow-hidden">
      <OverlappingImageTiles />
      <div className="z-20 mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2 md:my-4 lg:my-8 xl:my-12">
          {sortedArticles.map((post) => (
            <ArticleCard article={post} key={post.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
