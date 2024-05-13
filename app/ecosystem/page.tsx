import GameList from "@/components/games-list"
import { FeaturedList } from "@/components/featured-list"

import ecoData from "@/components/ecosystem-data.json"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default function Home() {
  return (
    <div className="">
    <main className="container ">
      <div className="text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Autonomous Worlds
          <br/>Ecosystem
        </h1>
      </div>

      <Card className="mt-20 pr-0">
      <div className="pl-6 mt-8">
        <div className="pb-2">
          <h2 className="text-xlscroll-m-20 mt-8  text-3xl font-semibold tracking-tight first:mt-0">
            Publishers
          </h2>
          <p className="text-muted-foreground">Game studios focused on building autonomous worlds experiences</p>
        </div>

        <FeaturedList data={ecoData.studios} />

        <div className="pb-2 mt-12">
          <h2 className="text-xlscroll-m-20 mt-8  text-3xl font-semibold tracking-tight first:mt-0">
            Tech
          </h2>
          <p className="text-muted-foreground">Frameworks, engines and general infra powering AW.</p>
        </div>
        <FeaturedList data={ecoData.tech} />

        <div className="pb-2 mt-12">
          <h2 className="text-xlscroll-m-20 mt-8  text-3xl font-semibold tracking-tight first:mt-0">
            Guilds
          </h2>
          <p className="text-muted-foreground">Groups of active players dedicated to the AW space.</p>
        </div>
        <FeaturedList data={ecoData.guilds} />
      </div>
      </Card>
    </main>
    </div>
  )
}
