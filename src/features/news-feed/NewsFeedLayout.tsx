import { cn } from "@/lib/utils";
import CardComposer from "../post-composer/trigger/CardComposer";
import { NewsFeedProvider } from "./context/news-feed-context";
import ActivityLogNotification from "./ActivityLogNotification";
import NewsFeed from "./NewsFeed";

interface NewsFeedProps {
  className?: string;
}

// # Component
export function NewsFeedLayout({ className }: NewsFeedProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <CardComposer />
      <NewsFeedProvider>
        <ActivityLogNotification />
        <NewsFeed />
      </NewsFeedProvider>
    </div>
  );
}
