import React from 'react'
import { Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import ArchitectCardImage from '../cards/architectCardImage'

const ArchitectsSection: React.FC = () => {
  const architects = [
    {
      id: 1,
      imgSrc: 'photo1.jpg',
      name: 'Andre Caricio',
      listingId: '001',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis, velit ac lacinia malesuada, felis augue ultrices urna, vel tincidunt lacus dolor id augue. Sed varius diam facilisis tincidunt euismod. Maecenas sagittis sed mi eu pellentesque.',
    },
    {
      id: 2,
      imgSrc: 'photo2.jpg',
      name: 'Isis Figueiroa',
      listingId: '002',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis, velit ac lacinia malesuada, felis augue ultrices urna, vel tincidunt lacus dolor id augue. Sed varius diam facilisis tincidunt euismod. Maecenas sagittis sed mi eu pellentesque.',
    },
    {
      id: 3,
      imgSrc: 'photo3.jpg',
      name: 'Camila Bittencourt',
      listingId: '003',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis, velit ac lacinia malesuada, felis augue ultrices urna, vel tincidunt lacus dolor id augue. Sed varius diam facilisis tincidunt euismod. Maecenas sagittis sed mi eu pellentesque.',
    },
    {
      id: 4,
      imgSrc: 'photo4.jpg',
      name: 'Filipo Madeira',
      listingId: '004',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis, velit ac lacinia malesuada, felis augue ultrices urna, vel tincidunt lacus dolor id augue. Sed varius diam facilisis tincidunt euismod. Maecenas sagittis sed mi eu pellentesque.',
    },
  ]
  return (
    <section className={`min-h-screen items-center bg-lpPrimary`}>
      <div className="hidden lg:flex">
        {architects.map((architect) => (
          <ArchitectCardImage {...architect} key={architect.id} />
        ))}
      </div>
      <div className="flex lg:hidden">
        <Swiper
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
          slidesPerView={1}
        >
          {architects.map((architect) => (
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
