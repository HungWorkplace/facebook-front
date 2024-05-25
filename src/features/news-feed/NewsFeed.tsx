import ActiveComposer from "../post-composer/ActiveComposer";

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
