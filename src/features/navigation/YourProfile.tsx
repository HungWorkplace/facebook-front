import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CardInfo from "./CardInfor";
import { AvatarName } from "@/components/AvatarName";
import { getUser } from "@/MVC/controllers/user";
import Logout from "./logout/Logout";
// import { MdDarkMode } from "react-icons/md";
// import { BsFillQuestionCircleFill } from "react-icons/bs";
// import { BsGearFill } from "react-icons/bs";

// # Component
export default async function YourProfile() {
  const user = await getUser();

  return (
    <Popover>
      <PopoverTrigger>
        <AvatarName.Root user={user}>
          <AvatarName.Image />
        </AvatarName.Root>
      </PopoverTrigger>

      <PopoverContent
        avoidCollisions={false}
        align="end"
        className="w-[22.5rem] rounded-lg border-none p-0 pt-3 text-black shadow-popover"
      >
        <CardInfo />

        <Logout />

        <p className="p-4 text-xs text-gray-800">
          Privacy. Terms. Advertising. Ad Choices. Cookies. More Meta © 2024
        </p>
      </PopoverContent>
    </Popover>
  );
}
