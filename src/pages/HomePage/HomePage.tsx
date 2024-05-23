import Benefits from "@/components/Benefits"
import Collaboration from "@/components/Collaboration"
import Hero from "@/components/Hero"
import Pricing from "@/components/Pricing"
import Roadmap from "@/components/Roadmap"
import Services from "@/components/Services"


function HomePage() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">

        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />

      </div>

    </>
  )
}
export default HomePage
