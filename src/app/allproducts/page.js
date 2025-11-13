import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";



export default async function page() {
  const client = createClient();
  const allproductpage=await client.getSingle("productgrid")
  const heading=await client.getSingle("headings")
  const compareproducts=await client.getSingle("compareproducts")


  return (
    <main>
      <SliceZone slices={allproductpage.data.slices} components={components} />
      <SliceZone slices={heading.data.slices} components={components} />
      <SliceZone slices={compareproducts.data.slices} components={components} />
      
     
    </main>
  );
}
