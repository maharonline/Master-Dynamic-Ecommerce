"use client"
import { useEffect, useState } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const EmptyState = ({ slice }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // Delete item function
  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // If cart has items → show cart items
  if (cartItems.length > 0) {
    return (
      <section className="max-w-4xl mx-auto py-12 px-4 space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Your Cart ({cartItems.length})
        </h2>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain bg-gray-100 rounded-md"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">Rs. {item.price}</p>
                </div>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Checkout Button */}
        <div className="text-center">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>
        </div>
      </section>
    );
  }

  // If cart empty → show original empty UI
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center justify-center text-center py-20 space-y-6"
    >
      {/* Bag icon with count */}
      <div className="relative">
        <span className="absolute -top-3 left-10 -translate-x-1/2 text-sm font-medium text-gray-700">
          0
        </span>
        <PrismicNextImage field={slice.primary.icon} className="w-12 h-12 mx-auto" />
      </div>

      {/* Title */}
      <PrismicRichText
        field={slice.primary.title}
        components={{
          heading2: ({ children }) => (
            <h2 className="text-2xl font-medium text-gray-700">{children}</h2>
          ),
        }}
      />

      {/* Button */}
      <PrismicNextLink
        field={slice.primary.primary_link}
        className="bg-gray-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition"
      >
        Continue shopping
      </PrismicNextLink>
    </section>
  );
};

export default EmptyState;
