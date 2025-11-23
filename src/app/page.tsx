import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();

  const page = await client.getSingle("landingpage");
  const page1 = await client.getSingle("productfeature");
  const page2 = await client.getSingle("productfeature2");

  return (
    <>
      <main className="bg-gray-50">
        <SliceZone slices={page.data.slices} components={components} />
        <SliceZone slices={page1.data.slices} components={components} />
        <SliceZone slices={page2.data.slices} components={components} />
      </main>
    </>
  );
}
