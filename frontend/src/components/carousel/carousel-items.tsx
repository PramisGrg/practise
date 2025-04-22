import useEmblaCarousel from "embla-carousel-react";
import furniture from "../../assets/images/furniture.jpg";
import furniture2 from "../../assets/images/furniture2.jpg";
import furniture3 from "../../assets/images/furniture3.jpg";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";

const CarouselItem = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const slides = [furniture, furniture2, furniture3];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden h-[400px]" ref={emblaRef}>
        <ul className="flex h-full">
          {slides.map((img, index) => (
            <li key={index} className="relative w-full h-full flex-shrink-0">
              <img src={img} className="w-full h-full object-cover blur-xs" />

              <div className="absolute inset-0 flex items-center justify-center bg-white/30">
                <h1 className="text-2xl font-bold">Slide {index + 1}</h1>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <nav className="absolute bottom-4 left-1/2 -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition ml-4 ${
              selectedIndex === index ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </nav>
    </div>
  );
};

export default CarouselItem;
