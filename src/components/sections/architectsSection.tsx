import React from 'react'
import { Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import ArchitectCardImage from '../cards/architectCardImage'
import { IArchitect } from '../../interfaces/IArchitect'

type Props = {
  architectList: IArchitect[]
}

const ArchitectsSection: React.FC<Props> = ({ architectList }) => {
  return (
    <section className={`min-h-screen items-center bg-lpPrimary`}>
      <div className="w-full">
        <Swiper
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {architectList.map((architect) => (
            <SwiperSlide key={architect.id}>
              <ArchitectCardImage {...architect} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ArchitectsSection
