import { cn } from "@/lib/utils";
import CardComposer from "../post-composer/trigger/CardComposer";
import { NewsFeedProvider } from "./context/news-feed-context";
import NewsFeed from "./NewsFeed";
import { User } from "@/types/model";
import { getUser } from "@/controllers/user";

interface NewsFeedProps {
  className?: string;
  isNewsFeed: boolean;
  userProfile?: User;
}

// # Component
export async function NewsFeedLayout({
  className,
  isNewsFeed,
  userProfile,
}: NewsFeedProps) {
  const user = await getUser();

  const rendered = () => {
    if (isNewsFeed) {
      return <CardComposer />;
    } else if (userProfile?._id === user._id) {
      return <CardComposer />;
    }
  };

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {rendered()}
      <NewsFeedProvider>
        <NewsFeed profileId={userProfile?._id} />
      </NewsFeedProvider>
    </div>
  );
}
