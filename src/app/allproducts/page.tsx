import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const allProductPage = await client.getSingle("productgrid");
  const heading = await client.getSingle("headings");
  const compareProducts = await client.getSingle("compareproducts");

  return (
    <main>
      <SliceZone slices={allProductPage.data.slices} components={components} />
      <SliceZone slices={heading.data.slices} components={components} />
      <SliceZone slices={compareProducts.data.slices} components={components} />
    </main>
  );
}
