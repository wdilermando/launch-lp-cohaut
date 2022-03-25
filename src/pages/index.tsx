import type { NextPage } from 'next'
import Footer from '../components/footer'
import HeroSection from '../components/sections/heroSection'
import BookingSection from '../components/sections/bookingSection'
import ListingPortfolio from '../components/sections/listingPortfolio'
import ArchitectsSection from '../components/sections/architectsSection'
import AgendaSection from '../components/sections/agendaSection'
import AdvertisingSection from '../components/sections/advertisingSection'
import ListingsSlidesModal from '../components/listingSlidesModal'
import { useState } from 'react'

const Home: NextPage = () => {
  const [showListingsSlides, setShowListingsSlides] = useState(false)
  const [selectedListing, setSelectedListing] = useState(1)
  const handleModal = (statusModal: boolean, listingId: number) => {
    setShowListingsSlides(statusModal)
    setSelectedListing(listingId)
  }
  return (
    <>
      <div className="h-screen w-screen overflow-scroll font-simplon scrollbar-hide">
        {showListingsSlides && (
          <ListingsSlidesModal
            exitModal={handleModal}
            selectedListing={selectedListing}
          />
        )}
        <HeroSection />
        <BookingSection />
        <ListingPortfolio handleModal={handleModal} />
        <ArchitectsSection />
        <AgendaSection />
        <AdvertisingSection />
        <Footer />
      </div>
    </>
  )
}

export default Home
