import { createClient } from "@/prismicio";
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'
import React from 'react'

export default async function page() {
  const client = createClient();
  const headphone=await client.getSingle("headphone")
   const heading=await client.getSingle("headings")
   const compareproducts=await client.getSingle("compareproducts")
  return (
   <main>
    <SliceZone slices={headphone.data.slices} components={components} />
    <SliceZone slices={heading.data.slices} components={components} />
    <SliceZone slices={compareproducts.data.slices} components={components} />
   </main>
  )
}
