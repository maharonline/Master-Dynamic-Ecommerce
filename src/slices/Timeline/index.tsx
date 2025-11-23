"use client"
import { PrismicRichText } from "@prismicio/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

/**
 * @typedef {import("@prismicio/client").Content.TimelineSlice} TimelineSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TimelineSlice>} TimelineProps
 * @type {import("react").FC<TimelineProps>}
 */
const Timeline = ({ slice }: any) => {
  const items = slice?.primary?.timeline_items || [];
  const [activeIndex, setActiveIndex] = useState(0);

  // Move to next year
  const next = () =>
    setActiveIndex((prev) => (prev + 1) % items.length);

  // Move to previous year
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-12 md:py-16 h-[615px] flex justify-center flex-col bg-white text-black">
      {/* --- Title Section --- */}
      <div className="text-left px-20 mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          <PrismicRichText field={slice.primary.title} />
        </h2>
      </div>

      {/* --- Timeline Dots + Years --- */}
      <div className="relative flex flex-col md:flex-row justify-center items-center mt-4">
        {/* Connecting Line */}
        <div className="absolute top-[6px] left-40 right-65 h-[2px] bg-gray-300 md:block hidden"></div>
        {/* Dots and Years */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-6 md:space-x-8  md:py-0 w-full md:w-auto px-2 md:px-0 relative">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="flex flex-col items-center cursor-pointer min-w-[50px] sm:min-w-[60px]"
            >
              {/* Dot */}
              <div
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full mb-1 sm:mb-2 z-10 transition-all ${index === activeIndex ? "bg-green-500 scale-125" : "bg-black"
                  }`}
              ></div>


              {/* Year Text */}
              <span
                className={`text-xs sm:text-sm ${index === activeIndex
                  ? "text-green-600 font-semibold"
                  : "text-gray-800"
                  }`}
              >
                {item.year}
              </span>
            </div>
          ))}
        </div>

        {/* --- Navigation Buttons --- */}
        <div className="flex space-x-2 md:space-x-3 mt-4 md:mt-0 absolute md:static right-4 top-0 md:top-auto md:right-auto md:ml-4">
          <button
            onClick={prev}
            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 text-sm sm:text-base"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 text-sm sm:text-base"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* --- Details for All Years --- */}

      <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto text-center md:text-left">
        {slice.primary.details.map((item, index) => (
          <div key={index} className="space-y-2 px-2 sm:px-0">
            <h3
              className={`text-base sm:text-lg font-semibold ${index === activeIndex ? "text-green-600" : "text-gray-900"
                }`}
            >
              {item.year}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
