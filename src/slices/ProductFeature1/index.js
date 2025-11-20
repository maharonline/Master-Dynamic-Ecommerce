import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const ProductFeature1 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="font-inter"
    >
      {/*=== Product Grid ===*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 sm:px-6 md:px-10">
        {slice.primary.productfeature2?.map((item, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden  group"
          >
            <PrismicNextImage
              field={item.image}
              className="w-full h-64 sm:h-80 md:h-[700px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6  text-black">
              <h3 className="text-lg md:text-xl font-medium mb-2 underline">
                {item.name}
              </h3>

              <p className="text-lg font-medium leading-[26px] w-[550px] h-[53px] md:text-[22px] mb-3 opacity-90 text-black">
                {item.description}
              </p>

              {item.button && (
                <PrismicNextLink
                  field={item.button}
                  className="inline-block w-[140px] text-center bg-white text-black text-sm font-bold px-4 py-3  hover:bg-gray-200 transition"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/*=== Background Section ===*/}
      <div className="mt-10 md:mt-16 relative w-full px-4 sm:px-6 md:px-10">
        {slice.primary.productfeatureback2?.map((item, index) => (
          <div key={index} className="relative w-full">
            <PrismicNextImage
              field={item.backgroundimage}
              className="w-full h-[400px] sm:h-[500px] md:h-full object-cover brightness-100 rounded-lg"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-white bg-gradient-to-t from-black/70 via-black/40 to-transparent">
              <div className="text-lg sm:text-2xl md:text-3xl font-semibold underline mb-2">
                <PrismicRichText field={item.title} />
              </div>

              {item.description && (
                <p className="max-w-2xl font-medium text-white text-sm sm:text-base md:text-lg mb-5 opacity-90 leading-relaxed">
                  {item.description}
                </p>
              )}

              {item.cta_button && (
                <PrismicNextLink
                  field={item.cta_button}
                  className="w-fit bg-[#1A1A1A] text-white text-sm sm:text-base font-bold px-6 py-3  hover:bg-gray-900 transition"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/*=== Highlighted Grid ===*/}
      <div className="bg-black w-full flex justify-center items-center mt-10 md:mt-20 text-white py-16 px-4 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div className="md:w-1/2 text-center md:text-left">
              <PrismicRichText
                field={slice.primary.highlighted_grid_heading}
                components={{
                  heading1: ({ children }) => (
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                      {children}
                    </h2>
                  ),
                }}
              />
            </div>
            <div className="md:w-[414px] text-center text-white text-sm sm:text-base">
              <PrismicRichText
                field={slice.primary.highlighted_grid_description}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {slice.primary.highlighted_grid_feature?.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden group rounded-md"
              >
                <PrismicNextImage
                  field={item.image}
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end justify-end p-4">
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="text-white font-medium  md:w-[460px]">
              <PrismicRichText
                field={slice.primary.highlighted_grid_support_text}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-sm md:text-base">{children}</p>
                  ),
                }}
              />
            </div>

            {slice.primary.highlighted_grid_cta_button && (
              <PrismicNextLink
                field={slice.primary.highlighted_grid_cta_button}
                className="bg-white text-black px-6 py-3  font-medium hover:bg-gray-200 transition text-sm sm:text-base"
              />
            )}
          </div>
        </div>
      </div>

      {/*=== Banner Image ===*/}
      <div className="w-full mt-10 sm:mt-20">
        {slice.primary.banner_image_section.map((item, index) => (
          <div key={index} className="relative w-full">

            {/* Background Image */}
            <PrismicNextImage
              field={item.image}
              className="w-full h-[300px] sm:h-[450px] md:h-full object-cover brightness-75"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

              <h2 className="text-white text-xl sm:text-3xl lg:text-4xl font-medium mb-2 leading-snug">
                {item.heading}
              </h2>

              <p className="text-white text-2xl sm:text-4xl lg:text-5xl font-semibold leading-snug mb-4 max-w-3xl">
                {item.description}
              </p>

              <PrismicNextLink
                field={item.cta_button}
                className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 font-bold text-sm sm:text-base"
              />
            </div>

          </div>
        ))}
      </div>



      {/*=== Support Section ===*/}
      <div className="bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-10 ">
        <div className="max-w-9xl mx-auto flex flex-col gap-20 p-6 sm:p-10 ">
          {slice.primary.support_section?.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2  items-center bg-[#F5F5F5] "
            >

              {/* IMAGE SECTION */}
              <div className="w-full flex justify-center   ">
                {item.image && (
                  <PrismicNextImage
                    field={item.image}
                    className="w-full h-auto max-w-[690px] bg-white  object-cover "
                  />
                )}
              </div>

              {/* TEXT SECTION */}
              <div className="w-full md:max-w-[550px]  flex flex-col mx-auto text-center md:text-left ">

                {/* TITLE */}
                {Array.isArray(item.title) ? (
                  <PrismicRichText
                    field={item.title}
                    components={{
                      heading2: ({ children }) => (
                        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-medium text-[#4a4a4a] leading-tight mb-4">
                          {children}
                        </h2>
                      ),
                    }}
                  />
                ) : (
                  <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-medium text-[#4a4a4a] leading-tight mb-4">
                    {item.title}
                  </h2>
                )}

                {/* DESCRIPTION */}
                {Array.isArray(item.description) ? (
                  <PrismicRichText
                    field={item.description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#1a1a1a] mb-8 leading-relaxed">
                          {children}
                        </p>
                      ),
                    }}
                  />
                ) : (
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#1a1a1a] mb-8 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* BUTTON */}
                {item.cta_button?.text && (
                  <div className="flex md:justify-start justify-center">
                    <PrismicNextLink
                      field={item.cta_button}
                      className="w-[160px] bg-[#222222] text-white px-6 py-3 text-[14px] font-bold hover:bg-black transition text-center"
                    >
                      {item.cta_button.text}
                    </PrismicNextLink>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProductFeature1;
