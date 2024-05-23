import { fetchUser } from "@/utils/api/user";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/features/post-composer/dialog";

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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
