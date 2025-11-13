import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.MediaTextDuoGridSlice} MediaTextDuoGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MediaTextDuoGridSlice>} MediaTextDuoGridProps
 * @type {import("react").FC<MediaTextDuoGridProps>}
 */
const MediaTextDuoGrid = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full max-w-6xl mx-auto my-20"
    >
      {slice.primary.rows?.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center  ${index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
        >

          <div className="w-full md:w-1/2">
            <PrismicNextImage
              field={item.media_image}
              className="w-full h-auto  object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left px-2 md:px-10">
            {item.heading && (
              <PrismicRichText
                field={item.heading}
                components={{
                  heading3: ({ children }) => (
                    <h2 className="text-xl md:text-3xl font-normal text-[#4A4A4A] ">
                      {children}
                    </h2>
                  ),
                }}
              />
            )}

            {item.body && (
              <div className="text-gray-600 text-sm leading-relaxed">
               <PrismicRichText
                field={item.body}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-xl md:text-sm font-normal text-[#4A4A4A] ">
                      {children}
                    </p>
                  ),
                }}
              />
              </div>
            )}
          </div>

        </div>
      ))}





    </section>
  );
};

export default MediaTextDuoGrid;


