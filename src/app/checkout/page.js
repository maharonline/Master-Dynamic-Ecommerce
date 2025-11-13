import React from 'react'
import { createClient } from "@/prismicio";
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'

export default async function page() {
    const client = createClient();
          const checkout=await client.getSingle("checkout")
          
  return (
    <main>
            <SliceZone slices={checkout.data.slices} components={components} />
            

        </main>
  )
}
