import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoMdAdd } from "react-icons/io";
import { Button } from "@/components/custom/button";
import { OptionsItem } from "./OptionsItem";

// # Component
export default function CreateButton() {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button
            size={"icon"}
            className={cn(
              "rounded-full bg-secondary-button-background hover:bg-hover-icon-button",
              "1100:hidden",
            )}
          >
            <IoMdAdd size={20} color="black" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          avoidCollisions={false}
          align="end"
          className="w-[22.5rem] rounded-lg border-none p-0 pt-3 text-black shadow-popover"
        >
          <h1 className="text-2xl font-bold">Create</h1>
          <OptionsItem.Root>
            <OptionsItem.Icon>
              <IoMdAdd size={20} color="black" />
            </OptionsItem.Icon>
            <OptionsItem.Text
              heading="Create Post"
              description="Share a post on NewsFeed"
            />
          </OptionsItem.Root>
        </PopoverContent>
      </Popover>
    </>
  );
}
