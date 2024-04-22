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
import PieChart from '@/components/piechart';
export default function Component() {
  return (
    <Card className="rounded-none">
      {/* <CardHeader className="px-6">
        <CardTitle>Games</CardTitle>
      </CardHeader> */}
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow className="uppercase">
            <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead className="w-[300px]">Name</TableHead>
              <TableHead>stats</TableHead>
              <TableHead className="hidden sm:table-cell">Network</TableHead>
              <TableHead className="hidden md:table-cell text-center">Genres</TableHead>
              <TableHead className="hidden  md:table-cell text-right">Framework</TableHead>
              <TableHead className="sm:table-cell w-[200px] text-center">Release Phase</TableHead>

            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index} >
                   <TableCell className="hidden sm:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-none object-cover"
                  height="64"
                  src={item.image_square}
                  width="64"
                />
              </TableCell>
                <TableCell >
             <Link href={`/project/${item.slug}`}>
                  <div className="font-medium">{item.name}</div>
                  </Link>
                  {/* <div className="hidden text-sm text-muted-foreground md:inline">
                    {item.website}
                  </div> */}
                </TableCell>
                <TableCell>
                  <PieChart data={item.pie}/>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {item.network}
                </TableCell>

                <TableCell className="hidden md:table-cell text-center">
                  {item.genre}
                </TableCell>
                <TableCell className="hidden md:table-cell text-right">{item.framework}</TableCell>
                <TableCell className=" sm:table-cell text-center">
                  <Badge
                    className="text-xs flex-nowrap text-center"
                    variant={
                      item.devstatus === "Launched" ? "default" : "destructive"
                    }
                  >
                    {item.devstatus}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
