import React, { useEffect } from 'react'
import BookingForm from '../forms/bookingForm'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const BookingSection: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
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

  return (
    <section
      className={`relative flex min-h-screen  items-center bg-lpPrimary`}
    >
      <div className="z-10 flex-col items-end justify-between space-y-4 px-5 py-16 lg:flex lg:w-10/12 lg:flex-row lg:space-x-6 lg:px-32">
        <div className="flex-col items-center justify-center space-y-4 lg:w-2/3">
          <motion.h1
            ref={ref}
            className="text-4xl font-bold leading-normal text-lpSecondary"
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.8 }}
            variants={variantsLeft}
          >
            VIVA ESSA <br /> EXPERIÊNCIA
          </motion.h1>
          <motion.h3
            className="mb-16 text-lg italic text-gray-300"
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.7 }}
            variants={variantsLeft}
          >
            Conheça uma nova forma de morar, conectados à comunidade do futuro.
          </motion.h3>

          <motion.p
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={variantsLeft}
            className="text-justify leading-8 tracking-wide text-lpSecondary"
          >
            Entre os dias{' '}
            <strong className="text-white">28 de Abril a 24 de Junho</strong>,
            você poderá ter a experiência de visitar nossos{' '}
            <strong className="text-white">
              apartamentos design, totalmente decorados
            </strong>{' '}
            por arquitetos renomados.
          </motion.p>
          <motion.p
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={variantsLeft}
            className="text-justify leading-8 tracking-wide text-lpSecondary"
          >
            Vivencie também nossa exposição HAUT 5 ANOS, além de curtir uma
            programação cultural e gastronômica no café-bistrô Studio Mu. Rua
            Capitão Rebelinho, 117 - Pina Recife
          </motion.p>
          <motion.p
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={variantsLeft}
            className="text-justify font-bold leading-8 tracking-wide text-white"
          >
            Rua Capitão Rebelinho, 117 - Pina Recife
          </motion.p>
        </div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.5 }}
          variants={variantsRight}
          className="flex-col items-center justify-center lg:w-1/3"
        >
          <h3 className="mb-6 text-2xl font-bold text-gray-400">
            Agende sua visita
          </h3>
          <BookingForm />
        </motion.div>
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
        className="absolute top-10 left-5 z-0 lg:left-20 lg:top-20"
      >
        <img src={'images/amazing.png'} className="w-96" alt="people" />
      </motion.div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.3 }}
        variants={variantsRight}
        className="absolute right-0 z-0 hidden w-1/5 lg:flex "
      >
        <img src={'images/sideCircle.svg'} alt="people" />
      </motion.div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.5 }}
        variants={variantsRight}
        className="absolute right-5 z-10 hidden w-1/5 lg:flex "
      >
        <img src={'images/woman.svg'} className="w-60" alt="people" />
      </motion.div>
    </section>
  )
}

export default BookingSection
