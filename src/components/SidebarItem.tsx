import { AvatarName } from "@/components/AvatarName";
import { ItemSideBar } from "@/components/layouts/ItemSideBar";
import { Friend, User } from "@/types/api";
import Link from "next/link";

interface SidebarItemProps {
  user: User | Friend;
}

// # Component
export default async function SidebarItem({ user }: SidebarItemProps) {
  return (
    <ItemSideBar.Wrap>
      <Link href={`/users/${user.id}`}>
        <ItemSideBar.Content>
          <AvatarName.Root user={user} className="gap-3">
            <AvatarName.Image className="size-7" />
            <AvatarName.FullName className="text-2xs" />
          </AvatarName.Root>
        </ItemSideBar.Content>
      </Link>
    </ItemSideBar.Wrap>
  );
}
