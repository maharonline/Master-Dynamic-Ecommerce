import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";


export default async function Page() {
  const client = createClient();

  const page = await client.getSingle("landingpage"); {/*This is HeroCarousel SLice*/}
  const page1 = await client.getSingle("productfeature"); {/*This is Product Feature List Slice*/}
  const page2 = await client.getSingle("productfeature2"); {/*This is Product Feature 1 Slice*/}
  // const page3 = await client.getSingle("highlightedgrid");


  return (
    <main className="bg-gray-50">
      <SliceZone slices={page.data.slices} components={components} />
      <SliceZone slices={page1.data.slices} components={components} />
        <SliceZone slices={page2.data.slices} components={components} />
      
        {/* <SliceZone slices={page3.data.slices} components={components} /> */}
        

    </main>
  );
}

