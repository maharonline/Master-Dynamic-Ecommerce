"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.AboutSlidesSlice} AboutSlidesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSlidesSlice>} AboutSlidesProps
 * @type {import("react").FC<AboutSlidesProps>}
 */
const AboutSlides = ({ slice }) => {
  const slides = slice?.primary?.slide_image || [];
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto Slide
  useEffect(() => {
    if (isPaused || slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  if (!slides.length) {
    return (
      <p className="text-center py-20 text-gray-500">
        No slides found in Prismic
      </p>
    );
  }

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: "90vh",
        maxHeight: "900px",
        overflow: "hidden",
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: "linear" }}
          className="relative w-full h-full flex flex-col justify-center text-start"
        >
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <PrismicNextImage
              field={slides[current].slide_image}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Text Content */}
          <div className="z-10 max-w-2xl text-white px-8 md:px-16 font-inter">
            <div className="w-80 absolute bottom-25 left-5">

            <PrismicRichText
              field={slides[current].heading}
              components={{
                heading1: ({ children }) => (
                  <h1 className="text-5xl  sm:text-4xl md:text-5xl  font-medium mb-4 drop-shadow-lg leading-tight">
                    {children}
                  </h1>
                ),
              }}
              />
              </div>

            {slides[current].paragraph && (
              <p className="text-base sm:text-lg md:text-xl mb-6 opacity-90 leading-relaxed">
                {slides[current].paragraph}
              </p>
            )}
          </div>

          {/* Signup Button (Right corner) */}
          {slides[current].button?.text && (
            <div className="absolute bottom-10 right-10  transform-translate-y-1/2">
              <PrismicNextLink
                field={slides[current].button}
                className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition"
              >
                {slides[current].button.text}
              </PrismicNextLink>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      
      {/* Play / Pause Button (Bottom Left corner - Styled) */}
<div className="absolute bottom-6 left-10">
  <button
    onClick={() => setIsPaused(!isPaused)}
    className="w-10 h-10 flex items-center justify-center text-white rounded-full hover:bg-white hover:text-black transition text-lg"
  >
    {isPaused ? "▶" : "⏸"}
  </button>
</div>

    </section>
  );
};

export default AboutSlides;
