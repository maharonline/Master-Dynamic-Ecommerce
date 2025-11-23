"use client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Instagram, Facebook, Twitter, Youtube, Sprout } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.NewsletterWithLinksColumnsSlice} NewsletterWithLinksColumnsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsletterWithLinksColumnsSlice>} NewsletterWithLinksColumnsProps
 * @type {import("react").FC<NewsletterWithLinksColumnsProps>}
 */
const NewsletterWithLinksColumns = ({ slice }: any) => {

  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-gray-700 pb-10">
        {/*====== Left Side Signup Form =====*/}
        <div>
          <PrismicRichText
            field={slice.primary.headline}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">{children}</h2>
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

        {/*===== Right Side Link Columns =====*/}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center ">
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

      {/*===== SOCIAL & FOOTER LINKS ====*/}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm ">
        {/* Left Links */}
        <div className="w-2/3 flex flex-wrap justify-center md:justify-start gap-4">
          {slice.primary.footer_links?.map((item, index) => (
            <PrismicNextLink
              key={index}
              field={item.footer_link}
              className="hover:text-white transition"
            />
          ))}
        </div>

        {/*==== Social Media Icons =====*/}
        <div className="flex justify-center gap-4 text-black">
          {slice?.primary?.socialmedialink?.map((item, index) => {
            const platform = item.link.text;
            const link = item.link;
            // console.log("Platform", platform);


            return (
              <PrismicNextLink
                key={index}
                field={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white flex justify-center items-center hover:bg-gray-200 transition"
              >
                {platform.toLowerCase() === "instagram" && (
                  <Instagram className="w-5 h-5  hover:text-pink-700 transition" />
                )}
                {platform.toLowerCase() === "facebook" && (
                  <Facebook className="w-5 h-5 hover:text-blue-700 transition" />
                )}
                {platform.toLowerCase() === "youtube" && (
                  <Youtube className="w-5 h-5 hover:text-red-700 transition " />
                )}
                {platform.toLowerCase() === "spotify" && (
                  <PrismicNextImage field={slice.primary.spotifyicon} className='w-5 h-5'/>
                )}
                {platform.toLowerCase() === "twitter" && (
                  <Twitter className="w-5 h-5 hover:text-blue-700 transition " />
                )}
              </PrismicNextLink>
            );
          })}
        </div>
      </div>

      {/*==== COPYRIGHT SECTION ====*/}
      <div className="max-w-6xl mx-auto mt-5 text-xs text-white text-center md:text-left">
        <p className="text-xs  font-medium ">{slice.primary.copyright_text}</p>
        <p className="text-xs ">{slice.primary.copywrite_tag}</p>
      </div>

    </footer>
  );
};

export default NewsletterWithLinksColumns;
