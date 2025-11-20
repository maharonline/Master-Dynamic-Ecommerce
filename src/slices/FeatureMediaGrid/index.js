
"use client"
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { ChevronDown, ChevronLeft, ChevronRight, Download, ExternalLink, PlayCircle } from "lucide-react"
import { useState } from "react";

/**
 * @typedef {import("@prismicio/client").Content.FeatureMediaGridSlice} FeatureMediaGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureMediaGridSlice>} FeatureMediaGridProps
 * @type {import("react").FC<FeatureMediaGridProps>}
 */
const FeatureMediaGrid = ({ slice }) => {
  const [openIndex, setOpenIndex] = useState({})

  const toggleOption = (parentIndex, optionKey) => {
    setOpenIndex((prev) => ({
      ...prev,
      [`${parentIndex}-${optionKey}`]: !prev[`${parentIndex}-${optionKey}`],
    }))
  }

  // const item = slice.primary
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white overflow-hidden font-inter"
      id="feature"
    >
      {/*best in Talk Zigzag */}
      <div className="max-w-full mx-auto px-6 md:px-10 py-16">
        {slice?.primary?.items?.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center w-full ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Text Block */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left p-6 md:p-8">
              <PrismicRichText
                field={item.title}
                components={{
                  heading3: ({ children }) => (
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 leading-snug">
                      {children}
                    </h3>
                  ),
                }}
              />

              <PrismicRichText
                field={item.description}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-gray-600 max-w-full md:max-w-[486px] text-[15px] md:text-[14px] font-medium leading-[22px]">
                      {children}
                    </p>
                  ),
                }}
              />
              {/* 
              {item.cta && (
                <div className="mt-4">
                  <PrismicNextLink
                    field={item.cta}
                    className={`inline-block ${item.cta ? 'bg-gray-900 text-white' : 'bg-red-200 '
                    } px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition`}

                  />
                    
                </div>
              )} */}

            </div>

            {/* Image Block */}
            <div className="w-full md:w-1/2 flex justify-center items-center ">
              <PrismicNextImage
                field={item.media}
                className="w-full auto object-contain  "
              />
            </div>
          </div>
        ))}
      </div>


      {/* ===== Intuitive Controls and Refined Design Section (Fixed) ===== */}
      <div className="w-full">
        {slice.primary.intuitive_control?.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[100vh] flex items-center justify-start overflow-hidden"
          >
            {/* Background Image */}
            {item?.image && (
              <PrismicNextImage
                field={item.image}
                className="absolute inset-0 w-full h-full object-cover"
              />

            )}

            {/* Optional overlay */}
            <div className="absolute  bg-black/20"></div>

            {/* Text Overlay (safe check for description) */}
            {item?.description && Array.isArray(item.description) && item.description.length > 0 && (
              <div className="relative z-10 text-left  px-6 md:px-16 w-[440.73px] h-[159px]">
                <PrismicRichText
                  field={item.description}
                  components={{

                    paragraph: ({ children }) => (
                      <p className="mt-4 text-[42.1px] font-medium  text-gray-100">
                        {children}
                      </p>
                    ),
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/*===== Assistance +voice===== */}

      <div className="mt-10 h-[396px] flex flex-col justify-center items-center text-gray-700 text-center px-4">

        {slice.primary.assistance?.map((item, index) => (
          <div key={index} className="my-6">
            {/* Heading */}
            {item?.heading && Array.isArray(item.heading) && (
              <div>
                <PrismicRichText
                  field={item.heading}
                  components={{
                    heading1: ({ children }) => (
                      <h1 className="text-[33px]  md:text-3xl font-medium">
                        {children}
                      </h1>
                    )
                  }}
                />
              </div>
            )}

            {/* Description */}
            {item?.description && Array.isArray(item.description) && (
              <div className="max-w-[730px] mt-3">
                <PrismicRichText
                  field={item.description}
                  components={{
                    paragraph: ({ children }) => (
                      <h1 className="text-[14px] md:text-[14.3px] leading-6 font-medium text-gray-700">
                        {children}
                      </h1>
                    ),
                  }}
                />
              </div>
            )}
          </div>
        ))}

      </div>

      {/* ===5 images ==== */}
      <div className="px-4 md:px-8 lg:px-16 py-10">
        {slice.primary.images_section6?.map((item, index) => (
          <div key={index} className="grid gap-6">

            {/* Top row - 2 wide images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="overflow-hidden w-full">
                <PrismicNextImage
                  field={item.image1}
                  className="w-full h-[371px] md:h-[371px] object-cover"
                />

              </div>
              <div className="overflow-hidden  w-full">
                <PrismicNextImage
                  field={item.image2}
                  className="w-full h-[371px] md:h-[371px] object-cover"
                />
              </div>
            </div>

            {/* Bottom row - 1 tall + 2 stacked */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Left tall image */}
              <div className="overflow-hidden w-full">
                <PrismicNextImage
                  field={item.image3}
                  className="w-full h-[498px] md:h-[498px] object-cover"
                />
              </div>

              {/* Right stacked two images */}
              <div className="grid grid-rows-2 gap-6 w-full">
                <div className="overflow-hidden w-full h-[237px]">
                  <PrismicNextImage
                    field={item.image4}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="overflow-hidden w-full h-[237px]">
                  <PrismicNextImage
                    field={item.image5}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>



      {/*====== Expert Says ====== */}

      <div className="mt-10 flex flex-col justify-center items-center text-gray-700 text-center px-4 md:px-8 lg:px-16 ">
        {slice.primary.expert_says?.map((item, index) => (
          <div key={index} className="my-6 w-full max-w-[90vw] md:max-w-[730px]">
            {/* Line 1 */}
            {item?.line1 && Array.isArray(item.line1) && (
              <div className="w-full">
                <PrismicRichText
                  field={item.line1}
                  components={{
                    paragraph: ({ children }) => (
                      <h1 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[21px] leading-6 sm:leading-7 md:leading-8 font-medium text-gray-700">
                        {children}
                      </h1>
                    ),
                  }}
                />

              </div>
            )}

            {/* Title */}
            {item?.title && Array.isArray(item.title) && (
              <div className="w-full mt-2">
                <PrismicRichText
                  field={item.title}
                  components={{
                    paragraph: ({ children }) => (
                      <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-7 sm:leading-8 md:leading-9 font-medium text-gray-800">
                        {children}
                      </h2>
                    ),
                  }}
                />
              </div>
            )}

            {/* Line 2 / Description */}
            {item?.line2 && Array.isArray(item.line2) && (
              <div className="w-full mt-3">
                <PrismicRichText
                  field={item.line2}
                  components={{
                    paragraph: ({ children }) => (
                      <h1 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20.3px] leading-6 sm:leading-7 md:leading-8 font-medium text-gray-700">
                        {children}
                      </h1>
                    ),
                  }}
                />
              </div>
            )}
          </div>
        ))}
        <div className="flex items-center justify-center gap-4 mt-6">
    <button className="p-3 rounded-full   hover:bg-gray-100 transition">
      <ChevronLeft size={22} />
    </button>

    <button className="p-3 rounded-full   hover:bg-gray-100 transition">
      <ChevronRight size={22} />
    </button>
  </div>
      </div>


      {/*===== Compare Section ===== */}
      <div className="mt-30 w-full  h-[333px] bg-[#F1F1F1] flex flex-col justify-center items-center text-gray-700 text-center px-4">
        {slice.primary.compare_section?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#F1F1F1] items-center justify-center space-y-6"
          >
            {/* Title */}
            {item?.title && Array.isArray(item.title) && (
              <div className="max-w-[800px]">
                <PrismicRichText
                  field={item.title}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-[28px] md:text-[34px] leading-[41px] font-medium text-gray-700 text-center">
                        {children}
                      </p>
                    ),
                  }}
                />
              </div>
            )}

            {/* Button */}
            <div>
              <PrismicNextLink
                field={item.link}
                className="inline-flex items-center justify-center w-[218px] h-[52px] text-[17px] bg-[#4A4A4A] text-white font-bold  hover:bg-gray-800 transition"
              />
            </div>
          </div>
        ))}
      </div>



      {/*===== Technoloy Specification Sectionn ====== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-[240px_1fr] gap-16 py-24 px-6 md:px-10 bg-white" id="tech">
        {/* Left Column */}
        <div className="flex items-start">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#4a4a4a] leading-tight">
            {slice.primary.techspec_section_heading}
          </h2>
        </div>

        {/* Right Column */}
        <div className="space-y-10 w-[890px] h-[239px]  ">
          {slice?.primary?.techspec_section?.map((item, index) => (
            <div key={index} className="border-t border-neutral-200 pt-8 first:border-t-0">
              {/* Section Heading */}
              <PrismicRichText
                field={item.heading}
                components={{
                  heading3: ({ children }) => (
                    <h3 className="text-[20px] font-semibold text-neutral-800 mb-6">
                      {children}
                    </h3>
                  ),
                }}
              />

              {/* Options — Always visible */}
              <div className="divide-y divide-neutral-200">
                {["option1", "option2", "option3"].map((optionKey) => {
                  const optionValue = item[optionKey]
                  if (!optionValue) return null
                  const isOpen = openIndex[`${index}-${optionKey}`]

                  return (
                    <div key={optionKey} className="py-4">
                      <button
                        onClick={() => toggleOption(index, optionKey)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="text-[16px] text-neutral-700">
                          {optionValue}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* Nested dropdown content (can connect Prismic rich text later) */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="pt-3 text-sm text-neutral-600">
                          <p>Additional details for {optionValue} go here.</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>


      {/*===== in the box section ==== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-[240px_1fr] gap-16 py-24 px-6 md:px-10 bg-white">
        {/* Left Column */}
        <div className="flex items-start">
          <h2 className="text-[33px] md:text-[32px] font-semibold text-[#4a4a4a] leading-tight">
            {slice.primary.in_the_box_heading}
          </h2>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 w-full">
          {slice?.primary?.in_the_box?.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center mb-3">
                <PrismicNextImage
                  field={item.image}
                  className="object-contain w-full h-full"
                />
              </div>
              {item.imageheading && (
                <p className="text-[12px] leading-4 text-neutral-700 font-medium">
                  {item.imageheading}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Listenting Experience Section  */}

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 md:px-10 bg-white">
        {/* Heading */}
        <h2 className="text-[28px] sm:text-[30px] md:text-[32px] font-medium text-neutral-800 text-center md:text-left">
          {slice.primary.listen_heading}
        </h2>

        {/* Description */}
        <p className="font-medium text-[14px] sm:text-[15px] leading-[22px] text-[#4A4A4A] mt-2 text-center md:text-left max-w-2xl">
          {slice.primary.listen_description}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-8">
          {slice?.primary?.listening_experience?.map((item, index) => (
            <div
              key={index}
              className="relative rounded-md p-5 flex flex-col items-center text-center bg-white hover:shadow-md transition"
            >
              {/* Sold Out Badge */}
              {item?.is_sold_out && (
                <span className="absolute top-3 left-3 bg-neutral-800 text-white text-[11px] px-2 py-1 rounded-sm uppercase tracking-wide">
                  Sold out
                </span>
              )}

              {/* Image */}
              <div className="w-full max-w-[250px] sm:max-w-[280px] h-[250px] sm:h-[280px] mb-4 flex items-center justify-center">
                <PrismicNextImage
                  field={item.image}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Product Name */}
              <h3 className="text-[16px] sm:text-[17px] font-bold text-neutral-800 leading-6 mb-1">
                {item.image_heading}
                {!item.is_sold_out && (
                  <span className="text-black text-[13px] ml-2 sm:ml-3">+ Add</span>
                )}
              </h3>

              {/* Price */}
              {item.price && (
                <p className="text-[16px] sm:text-[17px] font-medium text-neutral-700 mt-1">
                  {item.price}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>




      {/*===== Product Support===== */}

      <div className="max-w-7xl mx-auto grid md:grid-cols-[240px_1fr] gap-16 py-24 px-6 md:px-10 bg-white">
        {/* Left Column */}
        <div className="flex items-start w-[309px]">
          <h2 className="text-[32px] md:text-[34px] font-medium text-[#4a4a4a] leading-[41px]">
            {slice.primary.product_support_heading}
          </h2>
        </div>

        {/* Right Column */}
        <div className="space-y-6 w-full md:w-[889px] md:pl-40">
          {slice.primary?.product_support?.map((item, index) => (
            <div
              key={index}
              className="flex items-center border-t border-neutral-200 pt-6 first:border-t-0 gap-3 text-neutral-800"
            >
              {/* Icon logic */}
              {item.icon_type === "download" && (
                <Download className="w-5 h-5 text-neutral-600 shrink-0" />
              )}
              {item.icon_type === "external" && (
                <ExternalLink className="w-5 h-5 text-neutral-600 shrink-0" />
              )}
              {item.icon_type === "video" && (
                <PlayCircle className="w-5 h-5 text-neutral-600 shrink-0" />
              )}

              {/* Text */}
              <div className="text-[15px] font-medium leading-[22px]">
                {Array.isArray(item.title) ? (
                  <PrismicRichText field={item.title} />
                ) : (
                  <span>{item.title}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*===== Support Section ===== */}


      <div
        className="w-full  py-16 flex justify-center" id="support"
      >
        {slice.primary.support_section?.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center bg-[#F1F1F1] rounded-lg overflow-hidden shadow-sm"
          >
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 flex justify-center bg-[#E8E8E8] ">
              <PrismicNextImage
                field={item.image}
                className="object-cover w-full"
              />
            </div>

            {/* Right Side - Text Content */}
            <div className="w-full md:w-1/2 flex flex-col bg-[#F1F1F1] items-center md:items-start text-center md:text-left px-10 py-12 space-y-4">
              {item.title && (
                <div className="text-2xl md:text-3xl font-normal text-[#4A4A4A]">
                  {Array.isArray(item.title) ? (
                    <PrismicRichText
                      field={item.title}
                      components={{
                        heading2: ({ children }) => (
                          <h2 className="text-[33.6px] md:text-[36px] font-medium text-[#4a4a4a] leading-[41px] mb-4">
                            {children}
                          </h2>
                        ),
                      }}
                    />
                  ) : (
                    <h2 className="">
                      {item.title}
                    </h2>
                  )}
                </div>
              )}

              {item.description && (
                <div className="text-black font-normal text-start text-sm md:text-base leading-[18px] max-w-[512px]">
                  {Array.isArray(item.description) ? (
                    <PrismicRichText
                      field={item.description}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="">
                            {children}
                          </p>
                        ),
                      }}
                    />
                  ) : (
                    <p className="text-[16px] text-[#1a1a1a] mb-8 leading-[24px]">
                      {item.description}
                    </p>
                  )}
                </div>
              )}

              {item.cta_button && (
                <div className="w-full ">
                  <PrismicNextLink
                    field={item.cta_button}
                    className="bg-[#4A4A4A] text-white px-6 py-3  hover:bg-black transition"
                  />

                </div>
              )}

            </div>
          </div>
        ))}
      </div>

      {/*====== Recently Viewed ===== */}

      <div className="flex justify-center items-center mt-10">
        <h1 className="font-medium text-[33px] leading-[41px] text-[#4A4A4A]">{slice.primary.recently_viewed_heading}</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center  mb-10">


        {slice.primary.recently_viewed?.map((item, index) => (

          <div
            key={index}
            className="relative flex flex-col  rounded-2xl  hover:shadow-lg transition-all duration-300 w-full max-w-[300px] p-5"
          >


            {/* Product Image */}
            <div className="relative flex justify-center items-center w-full mb-4">
              <PrismicNextImage
                field={item.headphone_image}
                className="object-contain w-full h-11/12 transition-transform duration-300 hover:scale-105"
              />


            </div>

            {/* Product Name & Price (Figma style) */}
            <div className="flex items-center justify-between mb-2">
              {item && (
                <h3 className="text-base font-semibold text-gray-900">
                  {item.image_heading}
                </h3>
              )}
              {item.price && (
                <p className="text-gray-700 font-medium">{item.price}</p>
              )}
            </div>

            {/* Description */}
            {item.image_description && (
              <div className="text-gray-500 text-sm mb-3">
                {item.image_description}
              </div>
            )}

            {/* Color Options */}
            <div className="flex items-center justify-start gap-2 mt-auto">
              <span className=" rounded-full w-5 h-5 border border-gray-400"><PrismicNextImage field={item.color_image} className="rounded-full w-5 h-5 border border-gray-400" /></span>
              <span className="bg-blue-500 rounded-full w-5 h-5 border border-gray-400"></span>
              <span className="bg-gray-200 rounded-full w-5 h-5 border border-gray-400"></span>
              <span className="text-xs bg-gray-900 text-white rounded px-2 py-0.5">
                Engraving
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FeatureMediaGrid;

