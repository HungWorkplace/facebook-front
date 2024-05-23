import PostComposer from "../post-composer/PostComposer";

interface NewsFeedProps {
  className?: string;
}

// # Component
export default function NewsFeed({ className }: NewsFeedProps) {
  return (
    <div className={className}>
      <PostComposer />
    </div>
  );
}
