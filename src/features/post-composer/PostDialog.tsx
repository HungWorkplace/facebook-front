import { X } from "lucide-react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "./dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import UserAvatar from "@/components/UserAvatar";
import { fetchUser } from "@/utils/api/user";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaLock } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import Composer from "./Composer";

// # Component
export default function PostDialog() {
  return (
    <DialogContent className="flex min-h-[26.75rem] w-[26rem] flex-col 584:w-[31.25rem] 584:rounded-lg">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Composer />
          </CarouselItem>

          <CarouselItem>
            <div className="p-1">
              <div>
                <div className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">2</span>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </DialogContent>
  );
}
