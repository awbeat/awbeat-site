import GameList from "@/components/games-list"
import { FeaturedList } from "@/components/featured-list"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-background to-background">
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/assets/3d-hyperspace-background-with-warp-tunnel-effect.jpg"
            alt="Background Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        </div>
        <div className="relative flex flex-wrap items-center justify-center py-20">
          <div className="text-center font-bold text-white">
            <h1 className="text-3xl xl:text-7xl">Autonomous Worlds</h1>
            <p className="mx-auto">Fuck yeah</p>
          </div>
        </div>
      </div>
      <div className="container my-10">
        <GameList />
      </div>
      {/* <div className="mt-20">
        <FeaturedList />
      </div> */}
    </main>
  )
}
