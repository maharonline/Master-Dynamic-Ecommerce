import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeadingsSlice} HeadingsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeadingsSlice>} HeadingsProps
 * @type {import("react").FC<HeadingsProps>}
 */
const Headings = ({ slice }: any) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 px-10 justify-items-center">
       {slice.primary.headings?.map((item, index) => (
         <div key={index} className="text-center space-y-2 w-[300px]">
           {/* Heading */}
           {item.heading && (
             <div className="text-lg md:text-xl font-semibold text-[#4A4A4A]">
               <PrismicRichText field={item.heading} />
             </div>
           )}
     
           {/* Paragraph / Description */}
           {item.paragraph && (
             <p className="text-black text-sm md:text-base leading-relaxed">
               {item.paragraph}
             </p>
           )}
         </div>
       ))}
     </div>
    </section>
  );
};

export default Headings;
