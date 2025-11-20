import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Search } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.SupportGridSlice} SupportGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SupportGridSlice>} SupportGridProps
 * @type {import("react").FC<SupportGridProps>}
 */
const SupportGrid = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white text-black py-20 px-6"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold">
          <PrismicRichText field={slice.primary.title} />
        </h2>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto mb-16">
        <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder={
            slice.primary.search_placeholder ||
            "Search product name or topic"
          }
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {slice.primary.items.map((item, i) => (
          <div
            key={i}
            className="bg-[#f7f7f7] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col items-center justify-center p-6"
          >
            <div className="w-full h-64 flex items-center justify-center">
              <PrismicNextImage
                field={item.image}
                className="object-contain max-h-full"
              />
            </div>

            <p className="text-sm text-gray-800 font-semibold mt-4">
              {item.label}
            </p>

           
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportGrid;
