import GoBackButton from "@/components/GoBackButton";
import { Button } from "@/components/ui/custom/button";
import Image from "next/image";
import Link from "next/link";

// # Component
export default function NotFoundPage() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <div className="flex max-w-[31.25rem] flex-col items-center p-6 text-center">
        <Image
          src={"/lock-not-found.svg"}
          width={112}
          height={112}
          priority
          alt="lock 404 image"
          className="mb-5"
        />
        <h1 className="text-xl font-bold text-secondary-foreground">
          This content isn't available right now
        </h1>
        <p className="mb-5 leading-5 text-secondary-foreground">
          When this happens, it's usually because the owner only shared it with
          a small group of people, changed who can see it or it's been deleted.
        </p>
        <Button className="mb-4 px-10 text-lg font-medium">
          <Link href={"/"}>Go to News Feed</Link>
        </Button>
        <GoBackButton />
      </div>
    </div>
  );
}
