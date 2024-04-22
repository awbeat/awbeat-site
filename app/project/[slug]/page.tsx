import GameList from "@/components/games-list"
import data from "@/components/data.json"
import Piechart from "@/components/piechart"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

import { GameGallery } from "@/components/game-gallery"
export default function ProjectPage({ params }: { params: any }) {
  console.log(params, params.slug)

  const obj = data.filter((item: { slug: any }) => item.slug === params.slug)[0]
  console.log(obj)
  return (
    <main className="bg-gradient-to-b from-black via-background to-background">
      <div className="relative h-60">
        <Image
          src={obj.image_banner}
          alt="cover-image"
          fill={true}
          style={{ objectFit: "cover" }}
          className="border-b-4 border-solid"
        />
        {/* <img
            src={obj.image_banner}
            alt="cover-image"
            className="absolute left-0 top-0 z-0 h-60 w-full  border-4 border-t-0 border-solid"
          /> */}
      </div>
      <div className="container">
        {/* <div className="mt-20 text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {params.slug}
          </h1>
        </div> */}

        <section className="relative pb-24">
          <div className="mx-auto -mt-20 w-full max-w-7xl px-6 md:px-0">
            <div className="relative z-10 mb-5 flex items-center justify-center sm:justify-start">
              <img
                src={obj.image_square}
                alt="user-avatar-image"
                className=" h-[200px] w-[200px] border-4 border-solid"
              />
            </div>
            <div className="mb-5 flex flex-col items-center justify-center max-sm:gap-5 sm:flex-row sm:justify-between">
              <div className="block">
                <h3 className="font-manrope mb-1 text-4xl font-bold max-sm:text-center">
                  {obj.name}
                </h3>
                <p className="text-base font-normal leading-7  max-sm:text-center">
                  {obj.description}
                  <br className="hidden sm:block" />
                </p>
              </div>
              <div></div>
            </div>
            <div className="flex items-center gap-4 max-sm:flex-wrap max-sm:justify-center">
              <div className="flex gap-4">
                <Link href={obj.website}>
                  <button className="mb-4 flex w-[150px] items-center rounded-full rounded-none bg-primary px-5 py-3.5 text-black shadow-sm shadow-transparent transition-all duration-500">
                    <span className="px-2 text-base font-semibold leading-7">
                      Go to Site -{`>`}
                    </span>
                  </button>
                </Link>

                <Link href={obj.website}>
                  <button className="flex w-[150px] items-center rounded-full rounded-none bg-primary px-5 py-3.5 text-black shadow-sm shadow-transparent transition-all duration-500">
                    <span className="px-2 text-base font-semibold leading-7">
                      Github -{`>`}
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="">
          <div className="flex min-h-screen w-full flex-col ">
            <div className="flex flex-col sm:gap-4 sm:py-4">
              <main className="grid flex-1 items-start gap-4 p-4 sm:px-0 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                  {/* <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                    <Card
                      className="sm:col-span-2"
                      x-chunk="dashboard-05-chunk-0"
                    >
                      <CardHeader className="pb-3">
                        <CardTitle>Your Orders</CardTitle>
                        <CardDescription className="text-balance max-w-lg leading-relaxed">
                          Introducing Our Dynamic Orders Dashboard for Seamless
                          Management and Insightful Analysis.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    <Card x-chunk="dashboard-05-chunk-1">
                      <CardHeader className="pb-2">
                        <CardDescription>This Week</CardDescription>
                        <CardTitle className="text-4xl">$1,329</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xs text-muted-foreground">
                          +25% from last week
                        </div>
                      </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-05-chunk-2">
                      <CardHeader className="pb-2">
                        <CardDescription>This Month</CardDescription>
                        <CardTitle className="text-4xl">$5,329</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xs text-muted-foreground">
                          +10% from last month
                        </div>
                      </CardContent>
                    </Card>
                  </div> */}
                  <Card className=" relative rounded-none p-4">
                    <div className="mb-8">
                      <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">Network</span>
                          <span>{obj.network}</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">Genres</span>
                          <span>{obj.genre}</span>
                        </li>

                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Launch Stage
                          </span>
                          <span>{obj.devstatus}</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Publisher
                          </span>
                          <span>{obj.publisher || "n/a"}</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">License</span>
                          <span>{obj.licence || "n/a"}</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Framework
                          </span>
                          <span>{obj.framework}</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Gas Subsidy
                          </span>
                          <span>{obj["gas-subsidy"]}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full">
                      <GameGallery data={obj.image_reel} />
                    </div>
                  </Card>
                </div>
                <div>
                  <Card
                    className="overflow-hidden rounded-none"
                    x-chunk="dashboard-05-chunk-4"
                  >
                    <CardContent className=" text-sm">
                      <Piechart data={obj.pie} />
                      <div className="grid gap-3">
                        <div className="font-semibold">Ratings</div>
                        <ul className="grid gap-3">
                          <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                              Ruggability
                            </span>
                            <span>{obj.pie[0]}</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Logic</span>
                            <span>{obj.pie[1]}</span>
                          </li>
                        </ul>
                        {/* <Separator className="my-2" /> */}
                        <ul className="grid gap-3">
                          <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                              Extensibility
                            </span>
                            <span>{obj.pie[2]}</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                              Client
                            </span>
                            <span>{obj.pie[3]}</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                              Playability
                            </span>
                            <span>{obj.pie[4]}</span>
                          </li>
                          <li className="flex items-center justify-between font-semibold">
                            <span className="text-muted-foreground">
                              Deployment
                            </span>
                            <span>{obj.pie[5]}</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
