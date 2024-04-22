import * as React from "react"
import Image from "next/image"

import Link from 'next/link';

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"



export function GameGallery({data}: {data: any[]}) {
  return (
    // <ScrollArea className="whitespace-nowrap">
      <div className="">
        {data.map((artwork) => (

            <div  key={artwork}>
             {/* <Link href={`/project/${artwork.slug}`}> */}
              <img
                src={artwork}
                className="w-full mb-4"
                alt={'asda'}
                             />
              {/* </Link> */}
            </div>

        ))}
      </div>
      // <ScrollBar orientation="horizontal" />
    // </ScrollArea>
  )
}
