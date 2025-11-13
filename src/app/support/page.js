import React from 'react'
import { createClient } from "@/prismicio";
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'

export default async function page() {
    const client = createClient();
          const support=await client.getSingle("support")
  return (
     <main>
            <SliceZone slices={support.data.slices} components={components} />
        </main>
  )
}
