import { SlidersHorizontal } from "lucide-react";
import CarouselItem from "./carousel-items";
import MaxWidthContainer from "../layouts/max-width-container";

const Carousel = () => {
  return (
    <section className="flex flex-col">
      <CarouselItem />
      <MaxWidthContainer className="flex justify-between bg-primary py-6">
        <SlidersHorizontal />

        <div className="space-x-2">
          <span>Show</span>
          <input
            className="w-8 h-8 rounded-md bg-white text-center"
            value={"16"}
          ></input>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default Carousel;
