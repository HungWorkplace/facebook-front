import * as ErrorLayout from "@/components/layouts/ErrorLayout";

// # Component
export default function NotFoundPage() {
  return (
    <ErrorLayout.Root
      src="/lock-not-found.svg"
      alt="lock 404 image"
      title="This content isn't available right now"
      message=" When this happens, it's usually because the owner only shared it
        with a small group of people, changed who can see it or it's been
        deleted."
    >
      <ErrorLayout.Action href={"/"}>Go to News Feed</ErrorLayout.Action>
    </ErrorLayout.Root>
  );
}
