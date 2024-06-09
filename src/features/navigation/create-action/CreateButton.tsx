import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoMdAdd } from "react-icons/io";
import { Button } from "@/components/ui/custom/button";
import CreateItem from "./CreateItem";

// # Component
export default function CreateButton() {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size={"icon"}
            className={cn(
              "rounded-full bg-secondary-button-background text-black hover:bg-hover-icon-button",
              "data-[state=open]:bg-[#eaf4fe] data-[state=open]:text-primary",
              "1100:hidden",
            )}
          >
            <IoMdAdd size={20} />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          avoidCollisions={false}
          align="end"
          className="w-[22.5rem] rounded-lg border-none p-2 pt-3 text-black shadow-popover"
        >
          <CreateItem />
        </PopoverContent>
      </Popover>
    </>
  );
}
