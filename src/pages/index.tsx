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
import { IEvent } from '../interfaces/IEvent'

import { useApi } from '../hooks/useApi'

type Props = {
  architects: IArchitect[]
  listings: IListing[]
}

const Home: NextPage<Props> = ({ architects, listings }) => {
  const { data: _events } = useApi('programacoes?populate=*')

  const events: IEvent[] = _events?.data || []
  

  const [showListingsSlides, setShowListingsSlides] = useState(false)
  const [selectedListing, setSelectedListing] = useState(1)
  const handleModal = (statusModal: boolean, listingId: number) => {
    setShowListingsSlides(statusModal)
    setSelectedListing(listingId)
  }
  return (
    <>
      <div className="h-screen w-screen overflow-scroll scroll-smooth font-montserrat scrollbar-hide">
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
      {!showListingsSlides && (
        <div className="fixed bottom-0 z-50 flex h-20 w-full items-center justify-center bg-lpSecondary2 p-5 lg:hidden">
          <a href="#booking" className="btn px-5">
            {' '}
            Agende sua visita{' '}
          </a>
        </div>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [fetchArchitect, fetchListing] = await Promise.all([
    ArchitectService.getAll(),
    ListingService.getAll(),
  ])

  const { data: architects } = fetchArchitect.data
  const { data: listings } = fetchListing.data

  return {
    props: {
      architects,
      listings,
    },
    revalidate: 10,
  }
}

export default Home
