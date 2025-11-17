

import { PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'
import { useState } from "react";

const ProductDetail = ({ slice }) => {

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
      className="w-full bg-white  font-inter"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE - IMAGE GALLERY */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative border rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
            <PrismicNextImage
              field={selectedImage}
              className="w-full h-auto max-h-[500px] object-contain transition-all duration-300"
            />

            {/* Badge (Top Left Now) */}
            {slice.primary.badges?.[0] && (
              <div className="absolute top-4 left-4  text-gray-900 flex items-center gap-2 px-3 py-1 rounded-full shadow-md">
                <PrismicNextImage
                  field={slice.primary.badges[0].badge_icon}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-xs font-medium">
                  {slice.primary.badges[0].badge_label}
                </span>
              </div>
            )}

            {/* Prev / Next Buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/80 text-gray-800 rounded-full p-2 hover:bg-white shadow"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/80 text-gray-800 rounded-full p-2 hover:bg-white shadow"
            >
              ▶
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
                  <span className="text-xs mt-1">{item.color_label}</span>
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
                {showCollab ? "▲" : "▼"}
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
            onClick={handleCart}/>
              
            
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
     <div className="flex justify-center items-center gap-6 mt-10 bg-[#FFFFFF]  py-2flex-wrap">
  {slice?.primary?.button?.map((item, index) => (
    <div key={index} className="flex gap-4">
      <PrismicNextLink field={item.feature} className="text-[#4A4A4A] hover:underline font-medium" />
      <PrismicNextLink field={item.techspec} className="text-[#4A4A4A] hover:underline font-medium" />
      <PrismicNextLink field={item.support} className="text-[#4A4A4A] hover:underline font-medium" />
    </div>
  ))}
</div>


      {/*===== Banner1 ===== */}
<div className="relative max-w-full  overflow-hidden">
  <PrismicNextImage
    field={slice.primary.feature}
     className="w-full h-auto md:h-[700px] object-cover"
  />
</div>

      
      {/*=====Intuitive ANC Zigzag====*/}
     
       <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
  {slice.primary.row?.map((item, index) => (
    <div
      key={index}
      className={`flex flex-col md:flex-row items-center justify-center w-full ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
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
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left p-6 md:p-8">
        <PrismicRichText
          field={item.heading}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-2xl md:text-3xl font-medium mb-3 text-[#4A4A4A] leading-[41px]">
                {children}
              </h2>
            ),
          }}
        />

        <PrismicRichText
          field={item.body}
          components={{
            paragraph: ({ children }) => (
              <p className="text-gray-600 text-[15px] md:text-[16px] font-medium leading-relaxed">
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
      </div>

      
    </div>
  ))}
</div>

      {/* Banner Image 2 */}
      
<div className="w-full mt-10">
  <PrismicNextImage
    field={slice.primary.banner_image}
    className="w-full h-auto md:h-[600px] object-cover"
    style={{ width: "100%" }}
  />
</div>


      {/*===== 32 Hours Play Time Feature ======  */}
      <div className="mt-10 flex flex-col justify-center items-center text-gray-700 text-center px-4">
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



