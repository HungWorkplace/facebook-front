import ActiveComposer from "../post-composer/ActiveComposer";
import Test from "./Test";

interface NewsFeedProps {
  className?: string;
}

// # Component
export default function NewsFeed({ className }: NewsFeedProps) {
  return (
    <div className={className}>
      <ActiveComposer />
      <Test />
    </div>
  );
}
