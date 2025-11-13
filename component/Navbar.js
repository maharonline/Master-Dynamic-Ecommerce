
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Navbar() {
  const client = createClient();
  const page = await client.getSingle("navbar");



  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
