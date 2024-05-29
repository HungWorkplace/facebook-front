"use client";

import Card from "@/components/layouts/Card";
import { useNewsFeedContext } from "./context/news-feed-context";
import { FaWindowClose } from "react-icons/fa";
import { Button } from "@/components/custom/button";

// # Component
export default function ActivityLogNotification() {
  const { openNotification, setOpenNotification } = useNewsFeedContext();

  if (!openNotification) return <></>;

  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex gap-3 p-2 text-sm">
          <span className="pt-1">
            <FaWindowClose size={20} />
          </span>
          <div className="space-y-0.5">
            <p className="font-semibold">Hidden</p>
            <p className="text-xs text-secondary-foreground">
              Hiding posts helps us personalize your Feed.
            </p>
          </div>
        </div>
        <Button onClick={() => setOpenNotification(false)} variant={"gray"}>
          Undo
        </Button>
      </div>
    </Card>
  );
}
