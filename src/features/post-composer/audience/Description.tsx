interface DescriptionProps {
  className?: string;
}

export default function Description({ className }: DescriptionProps) {
  return (
    <div className={className}>
      <p className="font-semibold text-primary-foreground">
        Who can see your post?
      </p>
      <p className="mt-2 text-sm text-secondary-foreground">
        Your post will show up in Feed, on your profile and in search results.
      </p>
      <p className="mt-4 text-sm text-secondary-foreground">
        Your default audience is set to{" "}
        <span className="font-sembold">Only me</span>, but you can change the
        audience of this specific post.
      </p>
    </div>
  );
}
