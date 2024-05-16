import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Link from "next/link"
import data from "./data.json"
import PieChart from "@/components/piechart"
export default function Component() {
  return (
    <Card className="">
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow className="uppercase">
              <TableHead className="w-[300px]">Name</TableHead>
              <TableHead>stats</TableHead>
              <TableHead className="hidden sm:table-cell">Network</TableHead>
              <TableHead className="hidden text-center md:table-cell">
                Genres
              </TableHead>
              <TableHead className="hidden  text-right md:table-cell">
                Framework
              </TableHead>
              <TableHead className="w-[200px] text-center sm:table-cell">
                Release Phase
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link href={`/project/${item.slug}`}>
                    <div className="flex items-center gap-3">
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-sm border object-cover"
                        height="24"
                        src={item.image_square}
                        width="24"
                      />
                      <div className="text-md font-semibold">{item.name}</div>
                    </div>
                  </Link>
                  {/* <div className="hidden text-sm text-muted-foreground md:inline">
                    {item.website}
                  </div> */}
                </TableCell>
                <TableCell>
                  <PieChart data={item.pie} />
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {item.network}
                </TableCell>

                <TableCell className="hidden text-center md:table-cell">
                  {item.genre}
                </TableCell>
                <TableCell className="hidden text-right md:table-cell">
                  {item.framework}
                </TableCell>
                <TableCell className=" text-right sm:table-cell bg-gree">
                  <div className="flex gap-2 items-center justify-end mr-2">
                  {/* <Badge
                    className="flex-nowrap rounded-none text-center text-xs"
                    variant={
                      item.devstatus === "Launched" ? "default" : "destructive"
                    }
                  >
                    {item.devstatus}
                  </Badge> */}
                  {item.devstatus}

                  <div className={`w-2 h-2 block rounded-full
                    ${
                      item.devstatus === "Launched" ? "bg-green-600" : item.devstatus === "Public Playtest" ? "bg-yellow-600" : "bg-red-600"

                    }
                  `}></div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
