import GameList from "@/components/games-list"
import { FeaturedList } from "@/components/featured-list"
import { Faq } from "@/components/faq"
export default function Home() {
  return (
    <main className="">
      <div className="container">
        <div className="text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            WTF is Autonomous Worlds
          </h1>
        </div>
        <div className="max-w-[600px] mx-auto my-20">
          <Faq />
        </div>

        <div className="max-w-[600px] mx-auto my-20">

          <h2 className="text-lg">Learn More</h2>
          <ul>
            <a href="https://aw.network/">
              - Autonomous network
            </a>
          </ul>
        </div>
      </div>
    </main>
  )
}
