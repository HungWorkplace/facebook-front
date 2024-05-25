import ActiveComposer from "../post-composer/trigger/CardComposer";

interface NewsFeedProps {
  className?: string;
}

// # Component
export default function NewsFeed({ className }: NewsFeedProps) {
  return (
    <div className={className}>
      <ActiveComposer />
    </div>
  );
}
