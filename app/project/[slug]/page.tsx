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
    <main className=" container">
      <div className="relative h-[400px]">
        <Image
          src={obj.image_banner}
          alt="cover-image"
          fill={true}
          style={{ objectFit: "cover" }}
          className="border-4 border-solid rounded-xl overflow-hidden"
        />
      </div>
      <div className="container">
        <section className="relative pb-24">
          <div className="mx-auto -mt-20 w-full max-w-7xl px-6 md:px-0">
            <div className="relative z-10 mb-5 flex items-center justify-center sm:justify-start">
              <img
                src={obj.image_square}
                alt="user-avatar-image"
                className=" h-[160px] w-[160px] border-4 border-solid  rounded-xl overflow-hidden"
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
                  <button className="mb-4  items-center rounded-xl bg-primary px-3 py-2 text-black shadow-sm shadow-transparent transition-all duration-500">
                    {/* <span className="px-2 text-base font-semibold leading-7"> */}
                    Website
                    {/* </span> */}
                  </button>
                </Link>

                <Link href={obj.website}>
                  <button className=" items-center rounded-xl bg-primary px-3 py-2 text-black shadow-sm shadow-transparent transition-all duration-500">
                    {/* <span className="px-2 text-base font-semibold leading-7"> */}
                    Github
                    {/* </span> */}
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

                  <Card className=" relative">
                    <div className="flex w-full">
                      <div className="w-1/2 p-8 py-0">
                        <Piechart data={obj.pie} />
                      </div>
                      <div className="w-1/2 p-8">
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
                              <span className="text-muted-foreground">
                                Logic
                              </span>
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
                      </div>
                    </div>
                    <div className="w-full">
                      <GameGallery data={obj.image_reel} />
                    </div>
                  </Card>
                </div>
                <div>
                  <Card
                    className="overflow-hidden"
                    x-chunk="dashboard-05-chunk-4"
                  >
                    <CardContent className=" ">
                      <div className="my-8">
                        <ul className="grid gap-3">
                          <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                              Network
                            </span>
                            <span>{obj.network}</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                              Genres
                            </span>
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
                            <span className="text-muted-foreground">
                              License
                            </span>
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
