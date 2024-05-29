"use client";

import { FaWindowClose } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useNewsFeedContext } from "../../context/news-feed-context";
import { useHeaderContext } from "./context/header-context";

interface ItemProps {
  title: string;
  description: string;
  className?: string;
}

export function HeaderItem({ title, description, className }: ItemProps) {
  const { setOpenNotification } = useNewsFeedContext();
  const { setOpenPopover } = useHeaderContext();

  return (
    <div
      onClick={() => {
        setOpenNotification(true);
        setOpenPopover(false);
      }}
      className={cn(
        "flex cursor-pointer items-center gap-3 p-2 text-sm hover:bg-hover-item-radio",
        className,
      )}
    >
      <FaWindowClose size={20} />

      <div className="space-y-0.5">
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-secondary-foreground">{description}</p>
      </div>
    </div>
  );
}
