import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import * as actions from "@/actions/auth";
import UserAvatar from "../../components/UserAvatar";
import CardInfo from "./CardInfor";
// import { MdDarkMode } from "react-icons/md";
// import { BsFillQuestionCircleFill } from "react-icons/bs";
// import { BsGearFill } from "react-icons/bs";

// # Component
export default function YourProfile() {
  return (
    <Popover>
      <PopoverTrigger>
        <UserAvatar />
      </PopoverTrigger>

      <PopoverContent
        avoidCollisions={false}
        align="end"
        className="w-[22.5rem] rounded-lg border-none p-0 pt-3 text-black shadow-popover"
      >
        <CardInfo />

        <form action={actions.logout} className="w-full px-4">
          <button
            type="submit"
            className="inline-flex w-full items-center gap-3 rounded-lg p-2 outline-none hover:bg-hover-banner"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4e6ec] text-[#1c1d21]">
              <Image src={"logout.svg"} alt="logout" width={20} height={20} />
            </span>
            <span className="text-sm font-semibold">Log Out</span>
          </button>
        </form>

        <p className="p-4 text-xs text-gray-800">
          Privacy. Terms. Advertising. Ad Choices. Cookies. More Meta © 2024
        </p>
      </PopoverContent>
    </Popover>
  );
}
