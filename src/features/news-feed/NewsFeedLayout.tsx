import { cn } from "@/lib/utils";
import CardComposer from "../post-composer/trigger/CardComposer";
import { NewsFeedProvider } from "./context/news-feed-context";
import NewsFeed from "./NewsFeed";
import { User } from "@/types/model";
import { getUser } from "@/MVC/controllers/user";
import { Suspense } from "react";
import NewsFeedSkeleton from "./NewsFeedSkeleton";

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

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {(isNewsFeed || userProfile?._id === user._id) && <CardComposer />}
      <NewsFeedProvider>
        <Suspense fallback={<NewsFeedSkeleton />}>
          <NewsFeed profileId={userProfile?._id} />
        </Suspense>
      </NewsFeedProvider>
    </div>
  );
}
