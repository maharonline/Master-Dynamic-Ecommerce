import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";


export default async function () {
      const client = createClient();
    const earphones=await client.getSingle("earphones")
    const heading=await client.getSingle("headings")
    const compareproducts=await client.getSingle("compareproducts")
    // console.log("EarPhone Data",earphones);
    
  return (
    <main className="bg-gray-50">
      <SliceZone slices={earphones.data.slices} components={components} />
      <SliceZone slices={heading.data.slices} components={components} />
      <SliceZone slices={compareproducts.data.slices} components={components} />
      
     
    </main>
  )
}
