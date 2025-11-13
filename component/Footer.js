import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from '@prismicio/react';
import React from 'react'

export default async function Footer() {
     const client = createClient();
    
      const footer = await client.getSingle("footer");
    
      return (
        <main>
         
          <SliceZone slices={footer.data.slices} components={components} />
        </main>
      );
    }
