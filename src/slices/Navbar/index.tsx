"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Menu, X, ChevronDown, User, ShoppingBag, Search as SearchIcon } from "lucide-react";

const Navbar = ({ slice }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const pathname = usePathname();

  // Check if current page is Support or Submit Support
  const isSupportPage =
    pathname.includes("/support") || pathname.includes("/submitSupport");

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);

    window.updateCartBadge = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };
  }, []);

  const logo = slice.primary?.logo || [];
  const navItems = slice.primary?.main_navigation || [];
  const utilityIcons = slice.primary?.utility_icons || [];
  const countrySelector = slice.primary?.country_selector;
  const highlightedAction = slice.primary?.highlighted_action;

  return (
    <header className="w-full   bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto relative flex items-center justify-between px-4 py-3 ">

        {/* LEFT — LOGO */}
        <div className="flex items-center   ">
          {logo.map((item, index) => (
            <PrismicNextLink key={index} field={item.link}>
              <PrismicNextImage
                field={item.image}
                className="w-28 md:w-[190px] h-[10px] object-contain cursor-pointer hover:opacity-80 transition"
              />
            </PrismicNextLink>
          ))}
        </div>

        {/* CENTER — NAV LINKS (Hidden on support pages) */}
        <nav
          className={`hidden md:flex items-center gap-8 text-sm font-medium absolute left-1/2 transform -translate-x-1/2 
  ${isSupportPage ? "hidden" : ""}
  `}
        >
          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-black hover:text-gray-800 cursor-pointer"
            >
              <PrismicNextLink field={item.url}>
                {item.label || "Link"}
              </PrismicNextLink>
              {item.has_dropdown && <ChevronDown size={16} />}
            </div>
          ))}
        </nav>

        {/* {!isSupportPage && (
          <nav className="hidden md:flex  items-center gap-8 text-sm font-medium">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-1 text-black hover:text-gray-800 cursor-pointer"
              >
                <PrismicNextLink field={item.url}>
                  {item.label || "Link"}
                </PrismicNextLink>
                {item.has_dropdown && <ChevronDown size={16} />}
              </div>
            ))}
          </nav>
        )} */}

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* Show Yellow Buttons ONLY on support pages */}
          {isSupportPage ? (
            <div className="flex  items-center gap-1">

              {/* Return to Site */}
              <PrismicNextLink
                field={slice.primary.return_to_site}
                className="  text-black font-bold px-4 py-3  hover:bg-gray-500 transition text-sm"
              />

              {/* Submit Request */}
              <PrismicNextLink
                field={slice.primary.submit_a_request}
                className="bg-yellow-400 text-black font-bold px-4 py-3   hover:bg-gray-500 transition text-sm"
              />

            </div>
          ) : (
            <>
              {/* Normal Icons for other pages */}
              {utilityIcons.map((item, index) => (
                <div key={index} className="relative">
                  <PrismicNextLink
                    field={item.action_link}
                    className="hover:text-gray-700 text-black flex items-center gap-1"
                  >
                    {item.icon_type === "Search" && (
                      <SearchIcon className="w-5 h-5 text-neutral-600" />
                    )}
                    {item.icon_type === "User" && (
                      <User className="w-5 h-5 text-neutral-600" />
                    )}
                    {item.icon_type === "ShoppingBag" && (
                      <ShoppingBag className="w-5 h-5 text-neutral-600" />
                    )}

                    {Array.isArray(item.title) ? (
                      <PrismicRichText field={item.title} />
                    ) : (
                      <span className="text-[15px] font-medium leading-[22px]">
                        {item.title}
                      </span>
                    )}
                  </PrismicNextLink>

                  {/* Cart Badge */}
                  {item.icon_type === "ShoppingBag" && cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
                      {cartCount}
                    </span>
                  )}
                </div>
              ))}

              {/* Country */}
              {countrySelector && (
                <span className="hidden md:flex items-center gap-1 text-sm text-black cursor-pointer">
                  {countrySelector} <ChevronDown size={14} />
                </span>
              )}

              {/* Highlight Btn */}
              {highlightedAction && (
                <PrismicNextLink
                  field={highlightedAction}
                  className="hidden md:inline-block bg-black text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-gray-800"
                />
              )}
            </>
          )}

          {/* Mobile Toggle */}
          {!isSupportPage && (
            <button
              className="md:hidden p-2 rounded text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {!isSupportPage && isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white text-black">
          <nav className="flex flex-col items-start px-4 py-3 text-sm font-medium space-y-3">
            {navItems.map((item, index) => (
              <PrismicNextLink
                key={index}
                field={item.url}
                className="flex items-center gap-1 hover:text-gray-800 cursor-pointer w-full"
              >
                {item.label || "Link"}
                {item.has_dropdown && <ChevronDown size={16} />}
              </PrismicNextLink>
            ))}

            {highlightedAction?.link && (
              <PrismicNextLink
                field={highlightedAction.link}
                className="bg-black text-white px-4 py-2 rounded-sm text-sm font-medium w-full text-center"
              >
                {highlightedAction.text || "Action"}
              </PrismicNextLink>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
