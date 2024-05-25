import { fetchUser } from "@/utils/api/user";
import { Dialog, DialogTrigger } from "@/features/post-composer/dialog";
import RootDialog from "./RootDialog";

interface StatusInputProps {
  className?: string;
}

// # Component
export default async function StatusInput({ className }: StatusInputProps) {
  const user = await fetchUser();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-1 cursor-pointer items-center rounded-full bg-[#f1f2f6] pl-3 text-secondary-foreground hover:bg-[#e4e6e9]">
          What's on your mind, {user?.firstName}?
        </div>
      </DialogTrigger>

      <RootDialog />
    </Dialog>
  );
}
