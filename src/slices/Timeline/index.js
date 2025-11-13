// "use client"
// import { PrismicRichText } from "@prismicio/react";
// import { useState } from "react";

// /**
//  * @typedef {import("@prismicio/client").Content.TimelineSlice} TimelineSlice
//  * @typedef {import("@prismicio/react").SliceComponentProps<TimelineSlice>} TimelineProps
//  * @type {import("react").FC<TimelineProps>}
//  */
// const Timeline = ({ slice }) => {
//   const items = slice?.primary?.timeline_items || [];
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Move to next year
//   const next = () =>
//     setActiveIndex((prev) => (prev + 1) % items.length);

//   // Move to previous year
//   const prev = () =>
//     setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

//   return (
//     <section className="w-full px-6 py-12 md:py-16 bg-white text-black">
//       {/* --- Title Section --- */}
//       <div className="text-center mb-12">
//   <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
//     <PrismicRichText field={slice.primary.title} />
//   </h2>
// </div>


//       {/* --- Timeline Dots + Years --- */}
//       <div className="relative flex flex-col items-center md:flex-row md:justify-center">
//         {/* Dots and Years */}
//         <div className="flex overflow-x-auto space-x-8 scrollbar-hide px-10 mb-6 md:mb-0">
//           {items.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className="flex flex-col items-center cursor-pointer min-w-[60px]"
//             >
//               {/* Small Circle */}
//               <div
//                 className={`w-4 h-4 rounded-full mb-2 transition-all ${
//                   index === activeIndex ? "bg-green-500 scale-125" : "bg-black"
//                 }`}
//               ></div>

//               {/* Year Text */}
//               <span
//                 className={`text-sm ${
//                   index === activeIndex
//                     ? "text-green-600 font-semibold"
//                     : "text-gray-800"
//                 }`}
//               >
//                 {item.year}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* --- Buttons (right side) --- */}
//         <div className="flex space-x-3 absolute right-4 top-0 md:top-1/2 md:-translate-y-1/2">
//           <button
//             onClick={prev}
//             className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
//           >
//             ◀
//           </button>
//           <button
//             onClick={next}
//             className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
//           >
//             ▶
//           </button>
//         </div>
//       </div>

//       {/* --- Details for All Years --- */}
//       <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-center md:text-left">
//         {slice.primary.details.map((item, index) => (
//           <div key={index} className="space-y-2">
//             <h3
//               className={`text-base font-semibold ${
//                 index === activeIndex ? "text-green-600" : "text-gray-900"
//               }`}
//             >
//               {item.year}
//             </h3>
//             {item.description}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Timeline;


"use client"
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";

/**
 * @typedef {import("@prismicio/client").Content.TimelineSlice} TimelineSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TimelineSlice>} TimelineProps
 * @type {import("react").FC<TimelineProps>}
 */
const Timeline = ({ slice }) => {
  const items = slice?.primary?.timeline_items || [];
  const [activeIndex, setActiveIndex] = useState(0);

  // Move to next year
  const next = () =>
    setActiveIndex((prev) => (prev + 1) % items.length);

  // Move to previous year
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-12 md:py-16 bg-white text-black">
      {/* --- Title Section --- */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          <PrismicRichText field={slice.primary.title} />
        </h2>
      </div>

      {/* --- Timeline Dots + Years --- */}
      <div className="relative flex flex-col md:flex-row items-center md:justify-center">
        {/* Dots and Years */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-6 md:space-x-8 py-2 md:py-0 w-full md:w-auto px-2 md:px-0">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="flex flex-col items-center cursor-pointer min-w-[50px] sm:min-w-[60px]"
            >
              {/* Small Circle */}
              <div
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full mb-1 sm:mb-2 transition-all ${
                  index === activeIndex ? "bg-green-500 scale-125" : "bg-black"
                }`}
              ></div>

              {/* Year Text */}
              <span
                className={`text-xs sm:text-sm ${
                  index === activeIndex
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
            ◀
          </button>
          <button
            onClick={next}
            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 text-sm sm:text-base"
          >
            ▶
          </button>
        </div>
      </div>

      {/* --- Details for All Years --- */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto text-center md:text-left">
        {slice.primary.details.map((item, index) => (
          <div key={index} className="space-y-2 px-2 sm:px-0">
            <h3
              className={`text-base sm:text-lg font-semibold ${
                index === activeIndex ? "text-green-600" : "text-gray-900"
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
