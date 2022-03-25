import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ArchitectCard from '../cards/architectCard'
import Arrows from '../molecules/arrows'
import 'swiper/css'
import 'swiper/css/navigation'

const ArchitectsSection: React.FC = () => {
  return (
    <section className={`flex min-h-screen items-center bg-lpPrimary`}>
      <div className="w-full flex-col space-y-10 px-5 lg:px-32">
        <h3 className="text-2xl  text-lpSecondary shadow-sm">ARQUITETOS</h3>
        <div className="w-full md:px-32">
          <Swiper
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
            }}
            navigation
          >
            <SwiperSlide>
              <ArchitectCard />
            </SwiperSlide>
            <SwiperSlide>
              <ArchitectCard />
            </SwiperSlide>
            <SwiperSlide>
              <ArchitectCard />
            </SwiperSlide>
            <SwiperSlide>
              <ArchitectCard />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-between">
          <Arrows />
          <img src="images/cohaut-logo-horizontal.svg" />
        </div>
      </div>
    </section>
  )
}

export default ArchitectsSection
