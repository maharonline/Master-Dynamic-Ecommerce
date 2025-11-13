import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.CompareProductsSlice} CompareProductsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CompareProductsSlice>} CompareProductsProps
 * @type {import("react").FC<CompareProductsProps>}
 */
const CompareProducts = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full  py-16 flex justify-center"
    >
      {slice.primary.product2?.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center bg-[#F1F1F1] rounded-lg overflow-hidden shadow-sm"
        >
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center bg-[#E8E8E8] ">
            <PrismicNextImage
              field={item.main_image}
              className="object-cover w-full"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 flex flex-col bg-[#F1F1F1] items-center md:items-start text-center md:text-left px-10 py-12 space-y-4">
            {item.title && (
              <div className="text-2xl md:text-3xl font-normal text-[#4A4A4A]">
                <PrismicRichText field={item.title} />
              </div>
            )}

            {item.description && (
              <div className="text-black font-normal text-center text-sm md:text-base leading-[18px] max-w-[512px]">
                <PrismicRichText field={item.description} />
              </div>
            )}

{item.cta_button && (
  <div className="w-full flex justify-center items-center mt-4">
    <PrismicNextLink
      field={item.cta_button}
      className="bg-[#4A4A4A] text-white px-6 py-3  hover:bg-black transition"
    />
     
  </div>
)}

          </div>
        </div>
      ))}
    </section>
  );
};

export default CompareProducts;
