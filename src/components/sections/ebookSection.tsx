import React, { useEffect } from 'react'
import EbookForm from '../forms/ebookForm'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {}

const EbookSection: React.FC<Props> = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [ref2, inView2] = useInView()
  const [ref3, inView3] = useInView()
  const [ref4, inView4] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    if (inView2) {
      controls.start('visible')
    }
    if (inView3) {
      controls.start('visible')
    }
    if (inView4) {
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

  return (
    <section className={`bg-lpPrimary py-16`}>
      <div className="w-full flex-col items-end justify-between space-x-3 px-5 lg:relative lg:flex lg:h-screen lg:flex-row lg:px-32">
        <div className="relative z-20 w-full items-center lg:h-full lg:w-8/12">
          <motion.img
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variantsLeft}
            src="images/ebook.png"
            alt=""
            className="top-28 z-20 hidden lg:absolute lg:block"
          />
          <h1 className="z-10 text-center text-4xl font-bold text-lpSecondary lg:hidden">
            E-BOOK
          </h1>
          <motion.img
            ref={ref2}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            src="images/mock.png"
            className="top-20 z-0 lg:absolute lg:w-5/6"
            alt=""
          />
        </div>
        <motion.div
          ref={ref3}
          animate={controls}
          initial="hidden"
          variants={variantsRight}
          className="z-20 text-white lg:right-32 lg:bottom-16 lg:w-4/12"
        >
          <EbookForm />
        </motion.div>
        <motion.img
          ref={ref4}
          animate={controls}
          initial="hidden"
          variants={variantsRight}
          src="images/person-up-side-down.png"
          className="top-20 right-72 z-10 hidden lg:absolute lg:block lg:w-5/12"
          alt=""
        />
        <img
          src="images/amazing.png"
          className="top-20 right-0 z-0 hidden lg:absolute lg:block lg:w-4/12"
          alt=""
        />
      </div>
    </section>
  )
}

export default EbookSection
