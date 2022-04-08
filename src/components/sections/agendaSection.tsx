import React, { useEffect } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IEvent } from '../../interfaces/IEvent'
import { extractInfoDate } from '../../utils/parseDate'
import 'swiper/css'
import 'swiper/css/navigation'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {
  eventList: IEvent[]
}

const AgendaSection: React.FC<Props> = ({ eventList }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const variantsLeft = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: '-100%' },
  }

  const variantsRight = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: '100%' },
  }

  const hasEventList = eventList.length >= 1

  return (
    <section className={`flex bg-lpPrimary py-16 lg:h-screen`}>
      <div className="flex h-full w-full flex-col justify-between space-y-10 px-5 lg:px-32">
        <div className="flex justify-between">
          <motion.h3
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variantsLeft}
            className="text-2xl  font-bold text-lpSecondary shadow-sm"
          >
            PROGRAMAÇÃO
          </motion.h3>
          <motion.img
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variantsRight}
            src="images/dots.svg"
            className="w-14"
          />
        </div>
        {hasEventList ? (
          <>
            <div className="lg:hidden">
              <Swiper
                spaceBetween={20}
                slidesPerView={1.1}
                modules={[Navigation]}
                navigation
                centeredSlides={true}
                watchOverflow
              >
                {eventList?.map((event) => (
                  <SwiperSlide key={event.id}>
                    <div key={event.id} className="px-10">
                      <div className="w-64 p-3  text-lpSecondary">
                        <h4 className="text-2xl font-bold italic">
                          {extractInfoDate(event.attributes.dayDate).day}
                        </h4>
                        <p className="text-sm capitalize">
                          {extractInfoDate(event.attributes.dayDate).monthName}
                        </p>
                      </div>
                      <div className="w-full justify-start rounded-md bg-lpSecondary lg:flex">
                        <div className="w-full flex-col items-center  rounded-md  text-white even:bg-lpSecondary2 lg:w-64">
                          {event.attributes.events.map((eventDetail) => (
                            <div
                              key={eventDetail.id}
                              className="w-full flex-col items-start border-b border-slate-800 p-3  last:border-none"
                            >
                              <p>
                                <strong>
                                  {
                                    extractInfoDate(eventDetail.startTime)
                                      .hourAndMinute
                                  }
                                </strong>{' '}
                                {eventDetail.name}
                              </p>
                              <small>{eventDetail.description}</small>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Exibe somente em telas maiores */}
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
              className="hidden flex-col lg:flex"
            >
              <div className="w-full lg:flex">
                {eventList?.map((event) => (
                  <div
                    key={event.id}
                    className="w-full p-3  text-lpSecondary lg:w-full"
                  >
                    <h4 className="text-2xl font-bold italic">
                      {extractInfoDate(event.attributes.dayDate).day}
                    </h4>
                    <p className="text-sm capitalize">
                      {extractInfoDate(event.attributes.dayDate).monthName}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full justify-start rounded-md bg-lpSecondary lg:flex">
                {eventList?.map((event) => (
                  <div
                    key={event.id}
                    className="w-full flex-col items-center rounded-md  text-white even:bg-lpSecondary2 lg:w-full"
                  >
                    {event.attributes.events.map((eventDetail) => (
                      <div
                        key={eventDetail.id}
                        className="w-full flex-col items-start border-b border-slate-800 p-3  last:border-none"
                      >
                        <p>
                          <strong>
                            {
                              extractInfoDate(eventDetail.startTime)
                                .hourAndMinute
                            }
                          </strong>{' '}
                          {eventDetail.name}
                        </p>
                        <small>{eventDetail.description}</small>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        ) : (
          <h1 className="text-3xl text-white">
            Em breve divulgaremos a programacao
          </h1>
        )}

        <div className="flex justify-between">
          <motion.img
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variantsLeft}
            src="images/dots.svg"
            className="w-14"
          />
          <motion.img
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variantsRight}
            src="images/cohaut-logo-horizontal.svg"
          />
        </div>
      </div>
    </section>
  )
}

export default AgendaSection
