import { AvatarName } from "@/components/AvatarName";
import { ItemSideBar } from "@/components/layouts/ItemSideBar";
import { getUser } from "@/controllers/user";
import Link from "next/link";

// # Component
export default async function Profile() {
  const user = await getUser();

  return (
    <ItemSideBar.Wrap>
      <Link href={`/users/${user.id}`}>
        <ItemSideBar.Content>
          <AvatarName.Root user={user}>
            <AvatarName.Image className="size-9" />
            <AvatarName.FullName className="text-sm" />
          </AvatarName.Root>
        </ItemSideBar.Content>
      </Link>
    </ItemSideBar.Wrap>
  );
}
