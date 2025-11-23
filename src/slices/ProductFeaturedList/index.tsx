import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ProductFeaturedListSlice} ProductFeaturedListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductFeaturedListSlice>} ProductFeaturedListProps
 * @type {import("react").FC<ProductFeaturedListProps>}
 */
const ProductFeaturedList = ({ slice }: any) => {
  const products = slice.primary?.products || [];



  return (
    <section
      className="w-full px-4 py-10 md:px-8 lg:px-16 bg-white font-inter  "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Section Heading (optional) */}
      {slice.primary?.heading && (
        <div className="text-[34px] leading-[41px] text-[#4A4A4A] md:text-3xl mb-8 font-medium">
          <PrismicRichText field={slice.primary.heading} />
        </div>
      )}

      {/* Responsive Grid of Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  rounded-2xl overflow-hidden  hover:shadow-lg transition duration-300"
          >

            <div className="w-full relative">
              {/* Product Image */}
              <PrismicNextImage
                field={item.image}
                className="object-cover w-[315px] h-[315px] rounded-t-2xl"
              />

              {/* Sold Tag (appears on top-left corner) */}
              {item.sale_tag && (
                <span className="absolute top-2 left-2 bg-gray-900  text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {item.sale_tag}
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col gap-2">

              <div className="flex justify-between">

                <div className="text-lg font-semibold text-gray-800">
                  <PrismicRichText field={item.name} />
                </div>

                {item.price && (
                  <p className="text-sm font-medium text-gray-800">
                    {item.price}
                  </p>
                )}

              </div>


              {item.badge && (
                <span className="text-xs bg-yellow-100 text-yellow-800 rounded px-2 py-1 w-fit">
                  {item.badge}
                </span>
              )}

              {item.description && (
                <div className="text-sm text-gray-600">
                  <PrismicRichText field={item.description} />
                </div>
              )}


              {/* Optional color options image */}
              {item.color_options && (
                <div className="flex items-center justify-start gap-2 mt-auto">
                  <span>

                  <PrismicNextImage
                    field={item.color_options}
                    className="w-5 h-5 object-cover rounded-full"
                    />
                    </span>
                     <span className="bg-black rounded-full w-5 h-5 border border-gray-400"></span>
              <span className="bg-blue-500 rounded-full w-5 h-5 border border-gray-400"></span>
              <span className="bg-gray-200 rounded-full w-5 h-5 border border-gray-400"></span>
                  <span className="text-xs bg-gray-900  text-white rounded px-2 py-1 w-fit">
                    Engraving
                  </span>
                </div>


              )}


            </div>
          </div>
        ))}
      </div>



    </section>
  );
};

export default ProductFeaturedList;

