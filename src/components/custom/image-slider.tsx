import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageData {
  src: string;
}

const images: ImageData[] = [
  { src: "/sliders/banner1.jpeg" },
  { src: "/sliders/banner2.jpg" },
  { src: "/sliders/banner3.jpg" },
  { src: "/sliders/banner4.png" },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="relative max-w-[1500px] w-full mx-auto">
      {/* Image Wrapper */}
      <div
        className="
          relative 
          h-[200px] 
          sm:h-[300px] 
          md:h-[450px] 
          lg:h-[550px] 
          xl:h-[600px] 
          px-4 sm:px-8 md:px-12 
          transition-all
        "
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          className="
            w-full h-full 
            object-cover 
            rounded-xl 
            transition-all 
            duration-500 
            ease-in-out 
            cursor-pointer
          "
        />
      </div>

      {/* Navigation Left Button */}
      <button
        className="
          absolute 
          left-4 sm:left-8 md:left-14 
          top-1/2 
          -translate-y-1/2 
          bg-[#F0F2F3] 
          hover:bg-[#e0eef5] 
          p-2 sm:p-3 
          rounded-full 
          shadow 
          group
        "
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-500 group-hover:text-gray-600 size-5 sm:size-6" />
      </button>

      {/* Navigation Right Button */}
      <button
        className="
          absolute 
          right-4 sm:right-8 md:right-14 
          top-1/2 
          -translate-y-1/2 
          bg-[#F0F2F3] 
          hover:bg-[#e0eef5] 
          p-2 sm:p-3 
          rounded-full 
          shadow 
          group
        "
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-500 group-hover:text-gray-600 size-5 sm:size-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`
              h-[3px] sm:h-[4px] md:h-[5px]
              w-6 sm:w-8 md:w-10 
              mx-1 
              rounded-xl 
              transition-all duration-500 
              ${index === currentIndex ? "bg-[#272343]" : "bg-gray-300"}
            `}
          ></div>
        ))}
      </div>
    </div>
  );
}
