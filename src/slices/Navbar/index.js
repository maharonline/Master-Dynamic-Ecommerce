"use client"
import { useEffect, useState } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Menu, X, ChevronDown, User, ShoppingBag, Search as SearchIcon } from "lucide-react";

const Navbar = ({ slice }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Load cart from localStorage initially
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);

    // Global function to update badge
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
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">

        {/* LEFT — LOGO */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {logo.map((item, index) => (
            <PrismicNextLink key={index} field={item.link}>
              <PrismicNextImage
                field={item.image}
                className="w-28 md:w-[220px] h-[10px] object-cover cursor-pointer hover:opacity-80 transition"
              />
            </PrismicNextLink>
          ))}
        </div>

        {/* CENTER — NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center gap-1 text-black hover:text-gray-800 cursor-pointer">
              <PrismicNextLink field={item.url}>
                {item.label || "Link"}
              </PrismicNextLink>
              {item.has_dropdown && <ChevronDown size={16} />}
            </div>
          ))}
        </nav>

        {/* RIGHT — ICONS + ACTIONS */}
        <div className="flex items-center gap-4">
          {utilityIcons.map((item, index) => (
            <div key={index} className="relative">
              <PrismicNextLink
                field={item.action_link}
                className="hover:text-gray-700 text-black flex items-center gap-1"
              >
                {item.icon_type === "Search" && <SearchIcon className="w-5 h-5 text-neutral-600 shrink-0" />}
                {item.icon_type === "User" && <User className="w-5 h-5 text-neutral-600 shrink-0" />}
                {item.icon_type === "ShoppingBag" && <ShoppingBag className="w-5 h-5 text-neutral-600 shrink-0" />}

                {Array.isArray(item.title) ? (
                  <PrismicRichText field={item.title} />
                ) : (
                  <span className="text-[15px] font-medium leading-[22px]">{item.title}</span>
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

          {/* Country Selector */}
          {countrySelector && (
            <span className="hidden md:flex items-center gap-1 text-sm text-black cursor-pointer">
              {countrySelector} <ChevronDown size={14} />
            </span>
          )}

          {/* Highlighted Action */}
          {slice.primary.highlighted_action && (
            <PrismicNextLink
              field={slice.primary.highlighted_action}
              className="hidden md:inline-block bg-black text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-gray-800"
            />

          )}

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 rounded text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
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
