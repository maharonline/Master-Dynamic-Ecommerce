import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const aboutSlides = await client.getSingle("aboutslides");
  const about = await client.getSingle("about");
  const highlightedGrid = await client.getSingle("highlightedgrid");
  const timeline = await client.getSingle("abouthistorypage");

  return (
    <main>
      <SliceZone slices={aboutSlides.data.slices} components={components} />
      <SliceZone slices={about.data.slices} components={components} />
      <SliceZone slices={highlightedGrid.data.slices} components={components} />
      <SliceZone slices={timeline.data.slices} components={components} />
    </main>
  );
}
