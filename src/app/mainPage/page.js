import React from 'react'
import { createClient } from "@/prismicio";
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'


export default async function page() {
    const client = createClient();
    const mainpage = await client.getSingle("productdetailpage"); {/*Product Detail Slice*/}
    const feature = await client.getSingle("mainpagefeature");    {/*FeatureMediaGrid Slice*/}
    return (
        <main>
            
         <SliceZone slices={mainpage.data.slices} components={components} />
         <SliceZone slices={feature.data.slices} components={components} />
        </main>
        
    )
}
