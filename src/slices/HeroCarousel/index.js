"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { PlayIcon, Pause } from 'lucide-react';


export default function HeroCarousel({ slice }) {
  const slides = slice?.primary?.slides || [];
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <section className="relative w-full overflow-hidden h-[715px] sm:h-[750px] md:h-[850px] bg-black font-inter">
      {/* Background to prevent flash */}
      <div className="absolute inset-0 bg-black -z-20"></div>

      {/* === SLIDE AREA === */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col justify-center text-center md:text-left"
        >
          {/* Background Image */}
          <PrismicNextImage
            field={slides[current].image}
            className="w-full h-full object-cover object-center absolute inset-0"
            loading="eager"
            style={{
              opacity: 1,
              transition: "opacity 1s ease-in-out",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* ===== Text and Button ===== */}
          <div className="md:absolute md:bottom-5  z-10 max-w-full sm:max-w-xl md:max-w-2xl px-4 sm:px-6 md:px-10 py-6 sm:py-10 lg:py-12 mx-auto md:mx-0">
            <PrismicRichText
              field={slides[current].title}
              components={{
                heading1: ({ children }) => (
                  <h1 className="text-[28px] sm:text-[32px] md:text-[38px] font-medium mb-4 drop-shadow-lg leading-snug sm:leading-[48px]">
                    {children}
                  </h1>
                ),
              }}
            />

            <PrismicRichText
              field={slides[current].description}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-sm sm:text-[14px] md:text-base mb-6 leading-[22px] sm:leading-[25px] opacity-90 break-words">
                    {children}
                  </p>
                ),
              }}
            />

            {slides[current].button?.text && (
              <PrismicNextLink
                field={slides[current].button}
                className="inline-block bg-white font-bold text-gray-800 px-6 py-3 sm:px-7 sm:py-4 hover:bg-gray-300 transition text-sm sm:text-base md:text-lg shadow-md"
              >
                {slides[current].button.text}
              </PrismicNextLink>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* === Controls Section (Dots + Play/Pause) === */}
      <div className="absolute bottom-6 right-6 flex flex-col items-end gap-4 z-20">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="border border-white w-10 h-10 flex items-center justify-center text-white rounded-full hover:bg-white hover:text-black transition text-lg"
        >
          {isPaused ? <PlayIcon/> :<Pause /> }
        </button>
      </div>
    </section>
  );
}



