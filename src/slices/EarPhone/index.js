"use client"
import { useState, useMemo, useEffect } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";



/**
 * @typedef {import("@prismicio/client").Content.EarPhoneSlice} EarPhoneSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EarPhoneSlice>} EarPhoneProps
 * @type {import("react").FC<EarPhoneProps>}
 */
const EarPhone = ({ slice }) => {
    // State for products
  const [products, setProducts] = useState([]);

  // Filters
  const [selectedColor, setSelectedColor] = useState("All");
  const [inStockOnly, setInStockOnly] = useState(true);
  const [sortBy, setSortBy] = useState("Featured");

  // Fetch products from API (Client side)
 useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://dummyjson.com/products/category/mobile-accessories"
      );
      const data = await res.json();

      // Filter AirPods or headphones
      const filtered = data.products.filter(
        (product) =>
          product.title.toLowerCase().includes("airpods") 
          // product.tags.toLowerCase().includes("over-ear") ||
          // product.title.toLowerCase().includes("earphones")
      );

      setProducts(filtered);
    };

    fetchProducts();
  }, []);




  // Filter + Sort Logic
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedColor !== "All") {
      filtered = filtered.filter(
        (item) => item.color?.toLowerCase() === selectedColor.toLowerCase()
      );
    }

    if (inStockOnly) {
      filtered = filtered.filter((item) => item.in_stock !== false);
    }

    if (sortBy === "Price: Low to High") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, selectedColor, inStockOnly, sortBy]);


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 md:px-12 lg:px-20 py-12 bg-gray-50 text-gray-900"
    >
      
      {/* ===== Section Title ===== */}
      {slice.primary.section_title && (
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          {slice.primary.section_title}
        </h2>
      )}

      {/* ===== Filter Bar ===== */}
      <div className="flex flex-col md:flex-row items-center justify-between  pb-4 mb-10 gap-4">
        {/* Left Side - Color Selector + In Stock */}
        <div className="flex items-center gap-6">
          {/* Color Selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Color:</span>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="border border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
            >
              <option>All</option>
              <option>Black</option>
              <option>Silver</option>
              <option>Gold</option>
            </select>
          </div>

          {/* In Stock Checkbox */}
          <label className="flex items-center text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="mr-2 accent-black w-4 h-4"
            />
            In stock only
          </label>
        </div>

        {/* Right Side - Product Count + Sort */}
        <div className="flex items-center gap-4 text-sm text-gray-700">
          <span className="hidden sm:block">
            {filteredProducts.length} products
          </span>
          <div className="flex items-center gap-2">
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* ===== Product Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col  w-full max-w-[300px] p-5"
          >
            

            {/* Product Image */}
            <div className="relative flex justify-center items-center w-full mb-4">
              <img 
                src={item.images[0]} alt={item.title}
                className="object-contain w-full h-11/12 transition-transform duration-300 hover:scale-105"
              />

             
            </div>

            {/* Product Name & Price */}
            <div className="flex items-center justify-between mb-2">
              
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
              
              
                <p className="text-gray-700 font-medium">${item.price}</p>
              
            </div>

            {/* Description */}
             <p className="text-gray-500 text-sm mb-3 line-clamp-2">{item.description}</p>
          

            {/* Color Options */}
            <div className="flex items-center justify-start gap-2 mt-auto">
              <span className="bg-black rounded-full w-5 h-5 border border-gray-400"></span>
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

export default EarPhone;