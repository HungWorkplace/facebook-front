import { getUser } from "@/controllers/user";
import SidebarItem from "../../components/SidebarItem";

interface ShortCutsProps {
  className?: string;
}

// # Component
export default async function ShortCuts({ className }: ShortCutsProps) {
  const user = await getUser();

  return (
    <div className={className}>
      <div className="flex w-full flex-col">
        <SidebarItem user={user} />
      </div>
    </div>
  );
}
