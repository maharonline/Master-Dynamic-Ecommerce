import React from 'react'
import { createClient } from "@/prismicio";
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'

export default async function page() {
    const client = createClient();
    const aboutslides=await client.getSingle("aboutslides")
      const about=await client.getSingle("about")
      const highlightedgrid= await client.getSingle("highlightedgrid");
      const timeline= await client.getSingle("abouthistorypage");
      
      
  return (
    <main>
        <SliceZone slices={aboutslides.data.slices} components={components} />
        <SliceZone slices={about.data.slices} components={components} />
        <SliceZone slices={highlightedgrid.data.slices} components={components} />
        <SliceZone slices={timeline.data.slices} components={components} />
    </main>
  )
}
