import * as Checkbox from "@radix-ui/react-checkbox";
import { Button } from "@/components/custom/button";
import styles from "./Audience.module.css";
import { cn } from "@/lib/utils";
import { FaCheck } from "react-icons/fa";
import { useCarousel } from "../custom/carousel";

// # Component
export default function FooterActions() {
  const { scrollPrev } = useCarousel();

  return (
    <div className={cn("space-y-5 bg-white py-2", styles["shadow-footer"])}>
      <div className="flex items-center gap-2 pl-2">
        <Checkbox.Root
          id="set-default"
          className="flex h-6 w-6 appearance-none items-center justify-center rounded border border-gray-700 bg-white outline-none data-[state=checked]:border-none data-[state=checked]:bg-primary"
        >
          <Checkbox.Indicator className="text-white">
            <FaCheck />
          </Checkbox.Indicator>
        </Checkbox.Root>

        <label htmlFor="set-default" className="text-sm font-semibold">
          Set as default audience.
        </label>
      </div>

      <div className="pr-3 text-right">
        <Button
          onClick={scrollPrev}
          variant={"ghost"}
          className="text-primary hover:text-primary"
        >
          Cancel
        </Button>
        <Button background={"primary"} className="ml-2 w-28 text-white">
          Save
        </Button>
      </div>
    </div>
  );
}
