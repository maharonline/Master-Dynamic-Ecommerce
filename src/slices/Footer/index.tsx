"use client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { p } from "framer-motion/client";
import { usePathname } from "next/navigation";

const NewsletterWithLinksColumns = ({ slice }: any) => {
  const pathname = usePathname();

  // Pages jahan minimal footer show hoga
  const isSupportPage =
    pathname === "/support" || pathname === "/submitSupport";

  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">

      {/* ========================================================
          SHOW FULL FOOTER (Signup + Link Columns) ON ALL PAGES  
          EXCEPT /support & /submitSupport
      ========================================================= */}
      {!isSupportPage && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-gray-700 pb-10">
          {/* LEFT — Signup */}
          <div>
            <PrismicRichText
              field={slice.primary.headline}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    {children}
                  </h2>
                ),
              }}
            />

            <form className="flex flex-col gap-3 max-w-md">
              <input
                type="email"
                placeholder={slice.primary.email_placeholder || "Your email"}
                className="w-full border border-gray-500 bg-transparent px-4 py-2 focus:outline-none"
              />

              {slice.primary.show_consent_checkbox && (
                <label className="flex items-start gap-2 text-sm text-gray-400">
                  <input type="checkbox" className="mt-1 accent-white" />
                  <span>{slice.primary.consent_text}</span>
                </label>
              )}

              <button
                type="submit"
                className="bg-white text-black font-semibold py-3 hover:bg-gray-200 transition"
              >
                {slice.primary.submit_button_text || "SUBMIT"}
              </button>
            </form>
          </div>

          {/* RIGHT — Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {slice.primary.link_columns?.map((col, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-3 text-white">
                  {col.column_title}
                </h4>
                <ul className="space-y-2">
                  {col.links?.map((link, i) => (
                    <li key={i}>
                      <PrismicNextLink
                        field={link}
                        className="hover:text-white transition"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          ALWAYS SHOW — Footer Links + Social + Copyright
      ========================================================= */}
      <div className={`${isSupportPage ? "justify-center" : ""} max-w-6xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm`}>
        {/* Footer Links */}
        <div className="w-2/3 flex flex-wrap justify-center md:justify-start gap-4">
          {slice.primary.footer_links?.map((item, index) => (
            <PrismicNextLink
              key={index}
              field={item.footer_link}
              className="hover:text-white transition"
            />
          ))}
        </div>

        {/* Social Media Icons */}
        {!isSupportPage && (
          <div className="flex justify-center gap-4 text-black">
            {slice?.primary?.socialmedialink?.map((item, index) => {
              const platform = item.link.text;
              const link = item.link;

              return (
                <PrismicNextLink
                  key={index}
                  field={link}
                  target="_blank"
                  className="w-7 h-7 rounded-full bg-white flex justify-center items-center hover:bg-gray-200 transition"
                >
                  {platform.toLowerCase() === "instagram" && (
                    <PrismicNextImage
                      field={slice.primary.instgramicon}
                      className="w-6 h-6"
                    />
                  )}
                  {platform.toLowerCase() === "facebook" && (
                    <PrismicNextImage
                      field={slice.primary.facebookicon}
                      className="w-3 h-5"
                    />
                  )}
                  {platform.toLowerCase() === "youtube" && (
                    <PrismicNextImage
                      field={slice.primary.youtubeicon}
                      className="w-5 h-5"
                    />
                  )}
                  {platform.toLowerCase() === "spotify" && (
                    <PrismicNextImage
                      field={slice.primary.spotifyicon}
                      className="w-5 h-5"
                    />
                  )}
                  {platform.toLowerCase() === "twitter" && (
                    <PrismicNextImage
                      field={slice.primary.twittericon}
                      className="w-5 h-5"
                    />
                  )}
                </PrismicNextLink>
              );
            })}
          </div>
        )}
      </div>
      {/* COPYRIGHT */}
      <div
        className={`max-w-6xl mx-auto mt-5 text-xs text-gray-300 text-center md:text-left 
    ${isSupportPage ? "flex flex-col justify-center items-center w-[590px]" : ""}
  `}
      >

        {/* 👉 Support page → sirf 1 para */}
        {isSupportPage ? (
          <p className="text-sm font-medium mb-1">
            {slice.primary.copywritesection}
          </p>
        ) : (
          <>
            {/* 👉 Baaki pages → last ke 2 para */}
            <p className="text-xs font-medium mb-1">
              {slice.primary.copyright_text}
            </p>

            <p className="text-xs">
              {slice.primary.copywrite_tag}
            </p>
          </>
        )}

      </div>

    </footer>
  );
};

export default NewsletterWithLinksColumns;
