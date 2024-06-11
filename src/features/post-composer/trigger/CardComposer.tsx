import Card from "@/components/layouts/Card";
import DialogComposer from "./DialogComposer";
import { DialogProvider } from "../context/dialog-context";
import PhotoPost from "./PhotoPost";
import Link from "next/link";
import { AvatarName } from "@/components/AvatarName";
import { getUser } from "@/MVC/controllers/user";

// # Component
export default async function CardComposer() {
  const user = await getUser();

  return (
    <Card>
      <DialogProvider>
        <div className="flex gap-2 border-b pb-3">
          <Link href={`/users/${user.id}`}>
            <AvatarName.Root user={user}>
              <AvatarName.Image />
            </AvatarName.Root>
          </Link>
          <DialogComposer />
        </div>
        <PhotoPost />
      </DialogProvider>
    </Card>
  );
}
