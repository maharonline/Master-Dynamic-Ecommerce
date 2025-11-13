import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.EmptyStateSlice} EmptyStateSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EmptyStateSlice>} EmptyStateProps
 * @type {import("react").FC<EmptyStateProps>}
 */
const EmptyState = ({ slice }) => {
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
