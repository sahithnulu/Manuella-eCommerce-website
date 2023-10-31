import { Body } from "../component/Body"
import { LatestReleases } from "../component/LatestReleases"
import { Category } from "../component/Category"
import { Newsletter } from "../component/Newsletter"
import { Contact } from "../component/Contact"
import { Footer } from "../component/Footer"

const LandingPg = ({ addToCart }) => {
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden xs:bg-blue-500 sm:bg-red-500 md:bg-green-500 lg:bg-slate-500 xl:bg-purple-500">
        <Body />
        <LatestReleases />
        <Category />
        <Newsletter />
        <Contact />
        <Footer />
    </div>
  )
}

export default LandingPg