import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faq = [
  ["What is an Autonomous World?", "An Autonomous World refers to a computational environment built on blockchain technology where virtual worlds and games operate autonomously, governed by decentralized protocols and smart contracts. Participants interact within these worlds, contributing to their evolution and content creation."],
  ["How do Autonomous Worlds differ from traditional games?", "Autonomous Worlds transcend traditional game structures by enabling participant-driven content creation, ownership, and governance. Unlike conventional games, Autonomous Worlds operate on decentralized platforms like blockchain, allowing for composability and user-driven innovation."],
  ["What role do participants play in Autonomous Worlds?", "Participants in Autonomous Worlds are not just players; they are co-creators and stakeholders. They contribute to world-building, content creation, and governance through interactions with onchain protocols and smart contracts."],
  ["What is the significance of blockchain technology in Autonomous Worlds?", "Blockchain technology underpins Autonomous Worlds, providing transparent, secure, and decentralized infrastructures. It ensures ownership of in-game assets, facilitates peer-to-peer transactions, and enables trustless interactions among participants."],
  ["How do Autonomous Worlds foster creativity and innovation?", "By embracing composability, Autonomous Worlds empower participants to remix and build upon existing content and mechanics. This freedom stimulates creativity, leading to the emergence of diverse experiences, games, and narratives within the ecosystem."],
  ["How do developers contribute to Autonomous Worlds?", "Developers contribute by designing and deploying smart contracts, game mechanics, and virtual environments on blockchain platforms. Their creations form the foundation upon which participants can engage and innovate."],
  ["What are the benefits of user-driven governance in Autonomous Worlds?", "User-driven governance ensures that decisions regarding the evolution and management of Autonomous Worlds are made collectively by the community. This democratic approach promotes transparency, fairness, and inclusivity."],
  ["Can anyone participate in Autonomous Worlds?", "Yes, Autonomous Worlds are open to anyone with access to blockchain networks. Participants can join, contribute, and engage with the ecosystem regardless of geographic location or background."],
  ["How can I get started with Autonomous Worlds?", "To begin exploring Autonomous Worlds, consider familiarizing yourself with blockchain technology and decentralized applications (dApps). You can start by interacting with existing platforms, joining communities, and experimenting with user-generated content and experiences."],
  ["How is intellectual property handled in Autonomous Worlds?", "Intellectual property (IP) rights in Autonomous Worlds are managed through blockchain-based ownership records. Creators retain ownership of their digital creations, and IP protection is enforced through transparent and immutable smart contracts."],
]
export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full text-lg text-left">
      {faq.map((item, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger className="text-left text-xl">{item[0]}</AccordionTrigger>
          <AccordionContent className="text-left text-lg">{item[1]}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
