import { DialogContent } from "./custom/dialog";
import Composer from "./Composer";
import { Carousel, CarouselContent, CarouselItem } from "./custom/carousel";
import Audience from "./audience/Audience";

// # Component
export default function Content() {
  return (
    // max-h-[36.875rem]
    // 584:w-[31.25rem]
    <DialogContent className="flex 584:w-[31.25rem] 584:rounded-lg">
      <Carousel className="h-full w-full">
        <CarouselContent className="ml-0 h-full w-full">
          <CarouselItem className="pl-0">
            <Composer />
          </CarouselItem>
          <CarouselItem className="pl-0">
            <Audience />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </DialogContent>
  );
}
