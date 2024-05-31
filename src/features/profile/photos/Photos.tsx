import Card from "@/components/layouts/Card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PhotosProps {
  className?: string;
}

// # Component
export default function Photos({ className }: PhotosProps) {
  return (
    <div className={cn("", className)}>
      <Card>
        <header className="mb-5">
          <h2 className="text-xl font-bold">Photos</h2>
        </header>
        <main>
          <div className="grid grid-cols-3 grid-rows-3 gap-1.5 overflow-hidden rounded-md">
            <ImageList />
          </div>
        </main>
      </Card>
    </div>
  );
}

function ImageList() {
  return (
    <>
      {Array.from({ length: 9 }).map((_, index) => (
        <Image
          key={index}
          src={getRandomImageUrl()}
          alt="random"
          width={300}
          height={300}
          className="aspect-square w-full object-cover"
        />
      ))}
    </>
  );
}

function getRandomImageUrl() {
  // Random width and height between 100 and 1000
  const width = Math.floor(Math.random() * 901) + 100;
  const height = Math.floor(Math.random() * 901) + 100;

  // Random ID between 1 and 1000
  const id = Math.floor(Math.random() * 100) + 1;

  // Generate the URL
  const url = `https://picsum.photos/id/${id}/${width}/${height}`;

  return url;
}
