import { ImCamera } from "react-icons/im";
import { Dialog, DialogTrigger } from "@/components/ui/custom/dialog";
import { ProfileAvatarProvider } from "./context/profile-avatar";
import { Content } from "./Content";

// # Component
export default function UploadIcon() {
  return (
    <ProfileAvatarProvider>
      <Dialog>
        <DialogTrigger asChild>
          <span className="absolute bottom-2 right-2 flex size-9 cursor-pointer items-center justify-center rounded-full bg-secondary-button-background">
            <ImCamera size={20} />
          </span>
        </DialogTrigger>
        <Content />
      </Dialog>
    </ProfileAvatarProvider>
  );
}
