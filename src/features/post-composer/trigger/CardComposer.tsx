// !main

import UserAvatar from "@/components/UserAvatar";
import Card from "@/components/layouts/Card";
import Dialog from "./Dialog";
import { DialogProvider } from "../context/dialog-context";
import PhotoPost from "./PhotoPost";
import Link from "next/link";

// # Component
export default function CardComposer() {
  return (
    <Card>
      <DialogProvider>
        <div className="flex gap-2 border-b pb-3">
          <Link href={'/users/12345'}><UserAvatar /></Link>
          <Dialog />
        </div>
        <PhotoPost />
      </DialogProvider>
    </Card>
  );
}
