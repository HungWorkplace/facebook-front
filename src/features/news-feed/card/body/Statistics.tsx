import Image from "next/image";

interface StatisticsProps {
  postLikes: string[];
}

// # Component
// like post statistics
export default function Statistics({ postLikes }: StatisticsProps) {
  if (postLikes.length === 0) return null;

  return (
    <div className="flex items-center gap-1.5 py-2">
      <Image
        src="/like.svg"
        width={18}
        height={18}
        alt="like"
        className="h-[18px] w-[18px]"
      />
      <span>{postLikes.length}</span>
    </div>
  );
}
