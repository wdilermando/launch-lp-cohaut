import React from 'react'
import Arrows from './molecules/arrows'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ListingSlideCard from './cards/listingSlideCard'
import 'swiper/css'
import 'swiper/css/navigation'

type Props = {
  exitModal?: any
  selectedListing?: number
}

const ListingsSlidesModal: React.FC<Props> = ({
  exitModal,
  selectedListing,
}) => {
  return (
    <section className="absolute z-50 w-screen bg-black bg-opacity-95 lg:h-auto">
      <div className="flex-col justify-between py-16 px-5 lg:flex lg:h-screen lg:px-32">
        <div className="flex items-center justify-between text-lpSecondary">
          <h3 className="text-2xl  font-bold shadow-sm">LINHA CO-HAUT</h3>
          <a onClick={() => exitModal(false)} className="cursor-pointer">
            <h3 className="text-2xl">VOLTAR</h3>
          </a>
        </div>
        <div className="w-full text-lpSecondary md:px-8">
          {/* item card */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1.1}
            modules={[Navigation]}
            navigation
            centeredSlides={true}
            watchOverflow
          >
            {[1, 2, 3, 4, 5].map((listing, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => <ListingSlideCard slideActive={isActive} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-10 flex justify-between">
          <Arrows />
          <img src="images/cohaut-logo-horizontal.svg" />
        </div>
      </div>
    </section>
  )
}

export default ListingsSlidesModal
