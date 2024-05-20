import YourProfile from "@/features/navigation/YourProfile";
import { Button } from "@/components/ui/button";
import { FaFacebook } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { HamburgerIcon, HomeIcon } from "./navigation-icons";

// # Component
export default function Navigation() {
  return (
    <div className="fixed left-0 top-0 flex h-14 w-full items-center justify-between bg-white px-4 py-1 text-[#65676b] shadow">
      {/* left side */}
      <div className="flex h-full items-center">
        <div className="flex gap-2">
          <FaFacebook size={40} className="text-primary" />
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background">
            <HiMagnifyingGlass size={18} />
          </span>
        </div>
      </div>

      {/* Center */}
      <div className="flex h-full max-w-[42.5rem] flex-1 pl-8 md:justify-center">
        <Button
          variant={"ghost"}
          className="relative mr-2 hidden h-full w-full max-w-24 rounded-lg p-0 text-center text-primary hover:bg-transparent hover:text-primary md:inline-flex"
        >
          <HomeIcon />
          <div className="absolute inset-x-0 -bottom-1 z-10 h-[0.1875rem] bg-primary"></div>
        </Button>

        <Button
          variant={"ghost"}
          className="hover:bg-hover-banner h-full w-full max-w-12 rounded-lg p-0 text-center hover:text-current md:max-w-24 lg:hidden"
        >
          <HamburgerIcon />
        </Button>
      </div>

      {/* right side*/}
      <div className="flex gap-2">
        <Button
          size={"icon"}
          className="rounded-full bg-[#E4E6EB] hover:bg-[#d8dadf]"
        >
          <IoMdAdd size={20} color="black" />
        </Button>

        <YourProfile />
      </div>
    </div>
  );
}
