import Card from "@/components/layouts/Card";
import { getImagesByUserId } from "@/controllers/user";
import { cn } from "@/lib/utils";
import { type Image as IImage, User } from "@/types/model";
import Image from "next/image";

interface PhotosProps {
  className?: string;
  user: User;
}

// # Component
export default async function Photos({ className, user }: PhotosProps) {
  const images = await getImagesByUserId(user._id);

  // limit the number of images to 9
  const limitedImages = images.slice(0, 9);

  return (
    <div className={cn("", className)}>
      <Card>
        <header className="mb-5">
          <h2 className="text-xl font-bold">Photos</h2>
        </header>
        <main>
          <div className="grid grid-cols-3 gap-1.5 overflow-hidden rounded-md">
            <ImageList photos={limitedImages} />
          </div>
        </main>
      </Card>
    </div>
  );
}

interface ImageListProps {
  photos: IImage[];
}

// # Sub-component
function ImageList({ photos }: ImageListProps) {
  return (
    <>
      {photos.map((image) => (
        <Image
          key={image._id}
          src={image.url}
          alt="your photo"
          width={300}
          height={300}
          className="aspect-square w-full object-cover"
        />
      ))}
    </>
  );
}
