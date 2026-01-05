import ExploreBtn from "@/components/ExploreBtn"
import FeaturedEventsSection from "@/components/FeaturedEventsSection"
import { events } from "@/lib/constants"



const Page = () => {
  return (
    <section>
      <h1 className="text-center">The Hub for Every <br /> Event You Can&apos;t Miss</h1>
      <p className="text-center">Hackatlons, Meetups and Conferences, All in One Place</p>
      <ExploreBtn />

      <FeaturedEventsSection events={events} />
    </section>
  )
}

export default Page