import { sliderURL } from "@/config";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const ImageSlider = () => {
  return (
      <TECarousel showControls showIndicators className="h-full" ride="carousel">
        <div className="relative w-full overflow-hidden h-full after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative -mr-[100%] hidden h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={`${sliderURL}/3.png`}
              className="h-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={`${sliderURL}/4.png`}
              className="h-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={`${sliderURL}/5.png`}
              className="h-full"
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
  );
};

export default ImageSlider;
