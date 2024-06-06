import { Dialog, DialogTrigger } from "@/features/post-composer/custom/dialog";
import Content from "../Content";
import { getUser } from "@/controllers/user";

interface StatusInputProps {
  className?: string;
}

// # Component
export default async function DialogComposer({ className }: StatusInputProps) {
  const user = await getUser();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-1 cursor-pointer items-center rounded-full bg-[#f1f2f6] pl-3 text-secondary-foreground hover:bg-[#e4e6e9]">
          What's on your mind, {user?.firstName}?
        </div>
      </DialogTrigger>

      <Content />
    </Dialog>
  );
}
