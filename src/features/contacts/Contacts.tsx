import SidebarItem from "@/components/SidebarItem";
import { getFriends } from "@/MVC/controllers/user";

interface ContactsProps {
  className?: string;
}

// # Component
export default async function Contacts({ className }: ContactsProps) {
  const friends = await getFriends();

  return (
    <aside className={className}>
      <h1 className="mb-2 px-4 text-2sm font-semibold text-secondary-foreground">
        Contacts
      </h1>

      <div className="flex w-full flex-col">
        {friends.map((friend) => (
          <SidebarItem key={friend.id} user={friend} />
        ))}
      </div>
    </aside>
  );
}
