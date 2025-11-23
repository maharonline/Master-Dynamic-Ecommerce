import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const cart = await client.getSingle("cart");

  return (
    <main>
      <SliceZone slices={cart.data.slices} components={components} />
    </main>
  );
}
