import React, { RefAttributes, useEffect, useRef } from 'react'
import Arrows from './molecules/arrows'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import ListingSlideCard from './cards/listingSlideCard'
import 'swiper/css'
import 'swiper/css/navigation'
import { IListing } from '../interfaces/IListing'

type Props = {
  exitModal?: any
  selectedListing?: number
  listings?: IListing[]
}

const ListingsSlidesModal: React.FC<Props> = ({
  exitModal,
  selectedListing,
  listings,
}) => {
  console.log(selectedListing)

  const RefSwiper: React.FunctionComponent<
    SwiperProps & RefAttributes<SwiperCore>
  > = Swiper
  const mySlider = useRef(null)
  useEffect(() => {
    const parseSelectedListing =
      Number(selectedListing.toString().replace('0', '')) - 1

    mySlider.current.swiper.slideTo(parseSelectedListing)
  }, [])

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
          <RefSwiper
            spaceBetween={20}
            slidesPerView={1.1}
            modules={[Navigation]}
            navigation
            ref={mySlider}
            centeredSlides={true}
            watchOverflow
          >
            {listings.map((listing, index) => (
              <SwiperSlide key={listing.id}>
                {({ isActive }) => (
                  <ListingSlideCard listing={listing} slideActive={isActive} />
                )}
              </SwiperSlide>
            ))}
          </RefSwiper>
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
