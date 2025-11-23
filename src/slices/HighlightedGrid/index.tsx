import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HighlightedGridSlice} HighlightedGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HighlightedGridSlice>} HighlightedGridProps
 * @type {import("react").FC<HighlightedGridProps>}
 */
const HighlightedGrid = ({ slice }: any) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-black text-white py-16 px-6 md:px-20 font-inter"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <PrismicRichText
              field={slice.primary.heading}
              components={{
                heading1: ({ children }) => (
                  <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                    {children}
                  </h2>
                ),
              }}
            />
          </div>
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 text-center mx-auto text-white px-4">
  <PrismicRichText field={slice.primary.description} />
</div>

          {/* <div className=" w-1/3 text-center  text-red-300">
            <PrismicRichText
              field={slice.primary.description}

            />
          </div> */}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {slice.primary.features?.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden group rounded-md"
            >
              <PrismicNextImage
                field={item.image}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end  justify-end bottom-16 right-5 ">
                <h3 className="text-white text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Support text + Button */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-300 text-center md:text-left md:w-1/3 font-medium">
            <PrismicRichText
              field={slice.primary.support_text}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-sm md:text-base">{children}</p>
                ),
              }}
            />
          </div>

          {slice.primary.cta_button && (
            <PrismicNextLink
              field={slice.primary.cta_button}
              className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition md:text-small lg:text-small"
            />
              
            
          )}
        </div>
      </div>

      
    </section>
  );
};

export default HighlightedGrid;
