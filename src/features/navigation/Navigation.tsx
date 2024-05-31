import YourProfile from "@/features/navigation/YourProfile";
import { FaFacebook } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";

import { HamburgerIcon, HomeIcon, HomeOutlineIcon } from "./navigation-icons";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import CreateButton from "./CreateButton";

// # Component
export default function Navigation() {
  return (
    <nav className="fixed left-0 top-0 z-40 flex h-14 w-full items-center justify-between bg-white px-4 py-1 text-secondary-icon shadow">
      {/* left side */}
      <div className="flex h-full items-center">
        <div className="flex gap-2">
          <Link href={"/"}>
            <FaFacebook size={40} className="text-primary" />
          </Link>
          <Search />
        </div>
      </div>

      {/* Center */}
      <div className="flex h-full max-w-[42.5rem] flex-1 pl-8 700:justify-center">
        <ActiveLink
          href="/"
          active={<HomeIcon />}
          inactive={<HomeOutlineIcon />}
          className="mr-2 hidden max-w-24 700:inline-flex"
        />

        <ActiveLink
          href="/bookmarks"
          active={<HamburgerIcon />}
          inactive={<HamburgerIcon />}
          className="max-w-12 700:max-w-24 1100:hidden"
        />
      </div>

      {/* right side*/}
      <div className="flex gap-2">
        {/* Plus button */}
        <CreateButton />

        <YourProfile />
      </div>
    </nav>
  );
}

function Search() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background">
      <HiMagnifyingGlass size={18} />
    </span>
  );
}
