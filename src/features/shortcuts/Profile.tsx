import UserAvatar from "@/components/UserAvatar";
import UserName from "@/components/UserName";
import { ItemSideBar } from "@/components/layouts/ItemSideBar";

// # Component
export default function Profile() {
  return (
    <ItemSideBar.Wrap>
      <ItemSideBar.Content>
        <UserAvatar className="h-9 w-9" />
        <UserName className="text-sm" />
      </ItemSideBar.Content>
    </ItemSideBar.Wrap>
  );
}
