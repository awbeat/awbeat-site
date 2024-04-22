import * as React from "react"
import Image from "next/image"

import Link from "next/link"
import data from "./data.json"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function FeaturedList({ data }: { data: any }) {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4 pl-0">
        {data.map((obj: any) => (
          <figure key={obj.name} className="shrink-0">
            <div className="overflow-hidden rounded-none">
              <Link href={`${obj.url}`} target="_blank">
                <Image
                  src={obj.img}
                  alt={`${obj.name}`}
                  className="aspect-[3/4] h-[200px] w-[200px] object-cover"
                  width={300}
                  height={300}
                />
              </Link>
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">{obj.name}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
