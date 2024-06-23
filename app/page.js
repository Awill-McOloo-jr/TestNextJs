import Features from "./components/Features"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Section1 from "./components/Section1"

function page() {
  return (
  <div>
    <Hero />
    <Section1 />
    <Features />
    <Pricing />
  </div>
  )
}
export default page