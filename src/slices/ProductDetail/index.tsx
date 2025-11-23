
"use client";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { ProductDetailSliceProps } from "@/types/prismic";
import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";

const ProductDetail = ({ slice }: ProductDetailSliceProps) => {

  const [selectedImage, setSelectedImage] = useState(
    slice.primary.gallery_main_image
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCollab, setShowCollab] = useState(true);

  const images = [
    slice.primary.gallery_main_image,
    ...slice.primary.gallery_images.map((item) => item.image),
  ];

  // Image navigation
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
  };

  const handleCart = () => {
    const product = {
      id: slice.id, // prismic slice unique id
      title: slice.primary.product_title[0]?.text,
      price: slice.primary.product_price,
      image: selectedImage?.url,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const already = cart.find((item) => item.id === product.id);

    if (!already) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to cart!");
    } else {
      alert("Already in cart!");
    }
  };


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full  font-inter bg-gray-50"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 pt-15  ">


        {/* LEFT SIDE - IMAGE GALLERY */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative  overflow-hidden  flex items-center justify-center">
            <PrismicNextImage
              field={selectedImage}
              className="w-full h-auto max-h-[500px] object-contain transition-all duration-300"
            />

            {/* Badge (Top Left Now) */}
            {slice.primary.badges?.length > 0 && (
              <div className="absolute top-4 left-4 flex items-center gap-2">
                {slice.primary.badges.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2  px-3 py-1 rounded-full shadow-md"
                  >
                    <PrismicNextImage
                      field={item.badge_icon}
                      className="w-15 h-15 object-contain"
                    />

                    <span className="text-xs font-medium">
                      {item.badge_label}
                    </span>
                  </div>
                ))}
              </div>
            )}


            {/* Prev / Next Buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/80 text-gray-800 rounded-full p-2 hover:bg-white shadow"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/80 text-gray-800 rounded-full p-2 hover:bg-white shadow"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Thumbnail List */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            {slice.primary.gallery_images.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedImage(item.image);
                  setCurrentIndex(index + 1);
                }}
                className={`w-16 h-16 border-2 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition ${selectedImage?.url === item.image?.url
                  ? "border-gray-800"
                  : "border-transparent"
                  }`}
              >
                <PrismicNextImage
                  field={item.image}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - PRODUCT DETAILS */}
        <div className="space-y-6">
          {/* Title and Description */}
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              <PrismicText field={slice.primary.product_title} />
            </h1>
            <p className="text-gray-600 mt-2">
              <PrismicText field={slice.primary.product_summary} />
            </p>
          </div>

          {/* Price */}
          <p className="text-xl font-semibold text-gray-800">
            {slice.primary.currency_symbol}
            {slice.primary.product_price}
          </p>

          {/* Color Variants */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Color Options
            </h3>
            <div className="flex gap-3">
              {slice.primary.color_variants.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-6 h-6 rounded-full border"
                    style={{ backgroundColor: item.color_value }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Collaboration (Hide/Show) */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer select-none"
              onClick={() => setShowCollab(!showCollab)}
            >
              <h3 className="text-sm font-medium text-gray-700">
                Collaboration Colors
              </h3>
              <span className="text-sm text-gray-500">
                {showCollab ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </span>
            </div>

            {showCollab && (
              <ul className="text-sm space-y-1 text-gray-600 mt-2">
                {slice.primary.collab_variants.map((item, index) => (
                  <li key={index}>{item.collab_name}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Personalization */}
          {slice.primary.has_personalization && (
            <div className="border rounded-lg p-4 flex items-center justify-between">
              <span>{slice.primary.personalization_label}</span>
              <span className="text-sm font-medium text-gray-700">
                {slice.primary.currency_symbol}
                {slice.primary.personalization_price}
              </span>
            </div>
          )}

          {/* Add to Cart */}
          <div>

            <PrismicNextLink
              field={slice.primary.add_to_cart_link}
              className="w-full block text-center bg-gray-900 text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
              onClick={handleCart} />


          </div>

          {/* Warranty Info */}
          <div className="text-xs text-gray-500">
            <PrismicRichText field={slice.primary.warranty_info} />
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-6">
            {slice.primary.feature_highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-black">
                <PrismicNextImage
                  field={item.feature_icon}
                  className="w-10 h-10 object-contain"
                />
                <span>{item.feature_label}</span>
              </div>
            ))}
          </div>

          {/* Purchase Help */}
          <div className="text-sm text-gray-600 mt-6">
            <PrismicNextLink
              field={slice.primary.purchase_help_link}
              className="underline hover:text-gray-800"
            />
          </div>
        </div>
      </div>

      {/*======= Links ====== */}
      <div className="flex justify-center items-center gap-6 bg-[#FFFFFF]  py-2 flex-wrap">
        {slice?.primary?.button?.map((item, index) => (
          <div key={index} className="flex gap-4">
            <PrismicNextLink field={item.feature} className="text-[#4A4A4A] hover:underline font-medium" />
            <PrismicNextLink field={item.techspec} className="text-[#4A4A4A] hover:underline font-medium" />
            <PrismicNextLink field={item.support} className="text-[#4A4A4A] hover:underline font-medium" />
          </div>
        ))}
      </div>


      {/*===== Banner1 ===== */}
      {/*===== Banner1 ===== */}
<<<<<<< HEAD:src/slices/ProductDetail/index.tsx
      <div className="w-full">
        {slice?.primary?.video_section?.map((item, index) => (
          <div key={index} className="relative w-full">

            {/* Background Image */}
            {item.image && (
              <PrismicNextImage
                field={item.image}
                className="w-full h-[260px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover brightness-75"
              />
            )}

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

              {/* Heading */}
              {item.heading && (
                <h2 className="
=======
<div className="w-full">
  {slice?.primary?.video_section?.map((item, index) => (
    <div key={index} className="relative w-full">

      {/* Background Image */}
      {item.image && (
        <PrismicNextImage
          field={item.image}
          className="w-full h-[260px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover brightness-75"
        />
      )}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

        {/* Heading */}
        {item.heading && (
          <h2 className="
>>>>>>> 296fbed52c39d32b87de4e67ada620e7f7ca6750:src/slices/ProductDetail/index.js
              text-white
              text-lg sm:text-2xl md:text-3xl lg:text-4xl
              font-medium mb-3 leading-snug max-w-[90%] sm:max-w-[600px]
          ">
<<<<<<< HEAD:src/slices/ProductDetail/index.tsx
                  {item.heading}
                </h2>
              )}

              {/* Description */}
              {item.description && (
                <p className="
=======
            {item.heading}
          </h2>
        )}

        {/* Description */}
        {item.description && (
          <p className="
>>>>>>> 296fbed52c39d32b87de4e67ada620e7f7ca6750:src/slices/ProductDetail/index.js
              text-white
              text-xs sm:text-sm md:text-base lg:text-lg
              font-medium leading-6 mb-5
              max-w-[95%] sm:max-w-[650px]
          ">
<<<<<<< HEAD:src/slices/ProductDetail/index.tsx
                  {item.description}
                </p>
              )}

              {/* Icon / CTA */}
              {item.icon && (
                <PrismicNextImage
                  field={item.icon}
                  className="
=======
            {item.description}
          </p>
        )}

        {/* Icon / CTA */}
        {item.icon && (
          <PrismicNextImage
            field={item.icon}
            className="
>>>>>>> 296fbed52c39d32b87de4e67ada620e7f7ca6750:src/slices/ProductDetail/index.js
              w-24 h-24 
              sm:w-28 sm:h-28
              md:w-32 md:h-32
              lg:w-40 lg:h-40
              object-contain
            "
<<<<<<< HEAD:src/slices/ProductDetail/index.tsx
                />
              )}
            </div>
          </div>
        ))}
      </div>


      {/*======== Headings ===========*/}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 px-10 justify-items-center bg-white">
        {slice.primary.headings?.map((item, index) => (
          <div key={index} className="text-center space-y-2 w-[300px]">
            {/* Heading */}
            {item.heading && (
              <div className="text-lg md:text-xl font-semibold text-[#4A4A4A]">
                <PrismicRichText field={item.heading} />
              </div>
            )}

            {/* Paragraph / Description */}
            {item.paragraph && (
              <p className="text-black text-sm md:text-base leading-relaxed">
                {item.paragraph}
              </p>
            )}
          </div>
        ))}
      </div>


      {/*=====Intuitive ANC Zigzag====*/}

      <div className="max-w-full mx-auto px-6 md:px-10 py-16 bg-white">
        {slice.primary.row?.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center w-full ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Image Block */}
            <div className="w-full md:w-1/2 flex justify-center items-center ">
              <PrismicNextImage
                field={item.media_image}
                className="w-full auto object-contain  "
              />
            </div>

            {/* Text Block */}
            {/* Text Block */}
            <div className="
  w-full md:w-1/2 
  flex flex-col 
  justify-center 
  items-center md:items-start 
  text-center md:text-left 
  p-6 md:p-8
">

              <PrismicRichText
                field={item.heading}
                components={{
                  heading2: ({ children }) => (
                    <h2 className="
          text-xl sm:text-2xl md:text-3xl
          font-medium mb-3  
          text-[#4A4A4A]
          leading-tight sm:leading-snug md:leading-[41px]
        ">
                      {children}
                    </h2>
                  ),
                }}
              />

              <PrismicRichText
                field={item.body}
                components={{
                  paragraph: ({ children }) => (
                    <p className="
          text-gray-600 
          text-sm sm:text-base
          font-medium 
          leading-relaxed
          max-w-[490px] w-full
        ">
                      {children}
                    </p>
                  ),
                }}
              />

              {item.cta?.url && (
                <div className="mt-4">
                  <PrismicNextLink
                    field={item.cta}
                    className="
          inline-block 
          bg-gray-900 text-white 
          px-6 py-2 
          rounded-lg 
          text-sm 
          font-medium 
          hover:bg-gray-700 
          transition
        "
                  >
                    Learn More
                  </PrismicNextLink>
                </div>
              )}
            </div>



          </div>
        ))}
      </div>

      {/* Banner Image 2 */}
      <div className="w-full">
        <PrismicNextImage
          field={slice.primary.banner_image}
          className="w-full h-auto md:h-[750px] object-cover"
        />
      </div>
=======
          />
        )}
      </div>
    </div>
  ))}
</div>


      {/*======== Headings ===========*/}

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 px-10 justify-items-center bg-white">
       {slice.primary.headings?.map((item, index) => (
         <div key={index} className="text-center space-y-2 w-[300px]">
           {/* Heading */}
           {item.heading && (
             <div className="text-lg md:text-xl font-semibold text-[#4A4A4A]">
               <PrismicRichText field={item.heading} />
             </div>
           )}
     
           {/* Paragraph / Description */}
           {item.paragraph && (
             <p className="text-black text-sm md:text-base leading-relaxed">
               {item.paragraph}
             </p>
           )}
         </div>
       ))}
     </div>


      {/*=====Intuitive ANC Zigzag====*/}

      <div className="max-w-full mx-auto px-6 md:px-10 py-16 bg-white">
        {slice.primary.row?.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center w-full ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Image Block */}
            <div className="w-full md:w-1/2 flex justify-center items-center ">
              <PrismicNextImage
                field={item.media_image}
                className="w-full auto object-contain  "
              />
            </div>

            {/* Text Block */}
            {/* Text Block */}
<div className="
  w-full md:w-1/2 
  flex flex-col 
  justify-center 
  items-center md:items-start 
  text-center md:text-left 
  p-6 md:p-8
">

  <PrismicRichText
    field={item.heading}
    components={{
      heading2: ({ children }) => (
        <h2 className="
          text-xl sm:text-2xl md:text-3xl
          font-medium mb-3  
          text-[#4A4A4A]
          leading-tight sm:leading-snug md:leading-[41px]
        ">
          {children}
        </h2>
      ),
    }}
  />

  <PrismicRichText
    field={item.body}
    components={{
      paragraph: ({ children }) => (
        <p className="
          text-gray-600 
          text-sm sm:text-base
          font-medium 
          leading-relaxed
          max-w-[490px] w-full
        ">
          {children}
        </p>
      ),
    }}
  />

  {item.cta?.url && (
    <div className="mt-4">
      <PrismicNextLink
        field={item.cta}
        className="
          inline-block 
          bg-gray-900 text-white 
          px-6 py-2 
          rounded-lg 
          text-sm 
          font-medium 
          hover:bg-gray-700 
          transition
        "
      >
        Learn More
      </PrismicNextLink>
    </div>
  )}
</div>
>>>>>>> 296fbed52c39d32b87de4e67ada620e7f7ca6750:src/slices/ProductDetail/index.js


            {/* <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left p-6 md:p-8">
              <PrismicRichText
                field={item.heading}
                components={{
                  heading2: ({ children }) => (
                    <h2 className="text-2xl md:text-3xl font-medium mb-3  text-[#4A4A4A] leading-[41px]">
                      {children}
                    </h2>
                  ),
                }}
              />

              <PrismicRichText
                field={item.body}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-gray-600 w-[490px] text-sm md:text-sm font-medium leading-relaxed">
                      {children}
                    </p>
                  ),
                }}
              />

              {item.cta?.url && (
                <div className="mt-4">
                  <PrismicNextLink
                    field={item.cta}
                    className="inline-block bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition"
                  >
                    Learn More
                  </PrismicNextLink>
                </div>
              )}
            </div> */}


          </div>
        ))}
      </div>

      {/* Banner Image 2 */}

      <div className="w-full ">
        <PrismicNextImage
          field={slice.primary.banner_image}
          className="w-full h-auto md:h-[750px] object-cover"
          style={{ width: "100%" }}
        />
      </div>


      {/*===== 32 Hours Play Time Feature ======  */}
      <div className="flex flex-col justify-center items-center text-gray-700 text-center px-4 py-40 bg-white">
        <h1 className="font-medium leading-[41px] text-[28px] md:text-[32.5px]">
          Up to{" "}
          <span className="text-[48px] md:text-[61.9px] font-semibold ">
            32
          </span>
          hrs <br /> of PlayTime
        </h1>

        <div className="max-w-[730px] mt-3">
          <p className="text-[14px] md:text-[14.3px] leading-6 font-medium">
            {slice.primary.play_time_description}
          </p>
        </div>
      </div>



    </section>
  );
};

export default ProductDetail;




