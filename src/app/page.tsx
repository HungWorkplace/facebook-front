import Navigation from "@/features/navigation/Navigation";
import NewsFeed from "@/features/news-feed/NewsFeed";
import RightSideBar from "@/features/news-feed/RightSideBar";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="relative mt-14 pt-6">
        <NewsFeed className="mx-auto max-w-[31.25rem] lg:mx-0 lg:px-8" />
        <RightSideBar className="fixed right-0 top-0 hidden min-w-72 lg:block" />
      </div>
    </>
  );
}
