import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const headphone = await client.getSingle("headphone");
  const heading = await client.getSingle("headings");
  const compareProducts = await client.getSingle("compareproducts");

  return (
    <main>
      <SliceZone slices={headphone.data.slices} components={components} />
      <SliceZone slices={heading.data.slices} components={components} />
      <SliceZone slices={compareProducts.data.slices} components={components} />
    </main>
  );
}
