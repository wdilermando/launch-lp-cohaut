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

type Props = {
  architects: IArchitect[]
  listings: IListing[]
}

const Home: NextPage<Props> = ({ architects, listings }) => {
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
        <AgendaSection />
        <AdvertisingSection />
        <EbookSection />
        <NewsLetterSection />
        <Footer />
      </div>
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
  }
}

export default Home
