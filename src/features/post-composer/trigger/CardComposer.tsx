// !main

import UserAvatar from "@/components/UserAvatar";
import Card from "@/components/layouts/Card";
import Dialog from "./Dialog";
import { DialogProvider } from "../context/dialog-context";
import PhotoPost from "./PhotoPost";

// # Component
export default function CardComposer() {
  return (
    <Card>
      <DialogProvider>
        <div className="flex gap-2 border-b pb-3">
          <UserAvatar />
          <Dialog />
        </div>
        <PhotoPost />
      </DialogProvider>
    </Card>
  );
}
