import type { GetStaticProps, NextPage } from 'next'
import Footer from '../components/footer'
import HeroSection from '../components/sections/heroSection'
import BookingSection from '../components/sections/bookingSection'
import ListingPortfolio from '../components/sections/listingPortfolio'
import ArchitectsSection from '../components/sections/architectsSection'
import AgendaSection from '../components/sections/agendaSection'
import AdvertisingSection from '../components/sections/advertisingSection'
import ListingsSlidesModal from '../components/listingSlidesModal'
import { useState } from 'react'
import EbookSection from '../components/sections/ebookSection'
import NewsLetterSection from '../components/sections/newsLetterSection'
import { ArchitectService } from '../services/ArchitectService'
import { IArchitect } from '../interfaces/IArchitect'
import { IListing } from '../interfaces/IListing'
import { ListingService } from '../services/ListingService'
import { EventService } from '../services/EventService'
import { IEvent } from '../interfaces/IEvent'

type Props = {
  architects: IArchitect[]
  listings: IListing[]
  events: IEvent[]
}

const Home: NextPage<Props> = ({ architects, listings, events }) => {
  const [showListingsSlides, setShowListingsSlides] = useState(false)
  const [selectedListing, setSelectedListing] = useState(1)
  const handleModal = (statusModal: boolean, listingId: number) => {
    setShowListingsSlides(statusModal)
    setSelectedListing(listingId)
  }
  return (
    <>
      <div className="h-screen w-screen overflow-scroll font-montserrat scrollbar-hide">
        {showListingsSlides && (
          <ListingsSlidesModal
            exitModal={handleModal}
            selectedListing={selectedListing}
            listings={listings}
          />
        )}
        <HeroSection />
        <BookingSection />
        <ListingPortfolio handleModal={handleModal} listings={listings} />
        <ArchitectsSection architectList={architects} />
        <AgendaSection eventList={events} />
        <AdvertisingSection />
        <EbookSection />
        <NewsLetterSection />
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [fetchArchitect, fetchListing, fetchEvents] = await Promise.all([
    ArchitectService.getAll(),
    ListingService.getAll(),
    EventService.getAll(),
  ])

  const { data: architects } = fetchArchitect.data
  const { data: listings } = fetchListing.data
  const { data: events } = fetchEvents.data

  return {
    props: {
      architects,
      listings,
      events,
    },
    revalidate: 10,
  }
}

export default Home
