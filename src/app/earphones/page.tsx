import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const earphones = await client.getSingle("earphones");
  const heading = await client.getSingle("headings");
  const compareProducts = await client.getSingle("compareproducts");

  return (
    <main className="bg-gray-50">
      <SliceZone slices={earphones.data.slices} components={components} />
      <SliceZone slices={heading.data.slices} components={components} />
      <SliceZone slices={compareProducts.data.slices} components={components} />
    </main>
  );
}
