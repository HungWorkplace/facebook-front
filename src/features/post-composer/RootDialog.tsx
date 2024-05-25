import { DialogContent } from "./dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Composer from "./Composer";

// # Component
export default function RootDialog() {
  return (
    // max-h-[36.875rem]
    <DialogContent className="flex min-h-[26.75rem] flex-col 584:w-[31.25rem] 584:rounded-lg">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="flex flex-col">
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
      </Carousel>
    </DialogContent>
  );
}
