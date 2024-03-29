import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {}

const AdvertisingSection: React.FC<Props> = () => {
  const postsToShow = [
    {
      id: 1,
      alt: 'texto',
      imgSrc: 'images/advertising/mu-1.png',
    },
    {
      id: 2,
      alt: 'texto',
      imgSrc: 'images/advertising/mu-2.png',
    },
    {
      id: 3,
      alt: 'texto',
      imgSrc: 'images/advertising/mu-3.png',
    },
    {
      id: 4,
      alt: 'texto',
      imgSrc: 'images/advertising/mu-4.png',
    },
    {
      id: 5,
      alt: 'texto',
      imgSrc: 'images/advertising/mu-5.png',
    },
    {
      id: 6,
      alt: 'texto',
      imgSrc: 'images/advertising/mu-6.png',
    },
  ]

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
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: (i) => ({
      opacity: 0,
      x: '100%',
      transition: {
        delay: i * 0.2,
      },
    }),
  }

  return (
    <section className={`relative flex min-h-screen  bg-lpSecondary`}>
      <div className="z-10 items-end space-y-4 space-x-4 py-16 px-5 lg:flex lg:px-32">
        <div className="flex flex-col items-center justify-between py-5 lg:h-full lg:w-2/12 lg:items-end lg:px-5">
          <motion.img
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variantsLeft}
            src={'images/studio.svg'}
            alt="studio"
          />
          <motion.img
            ref={ref2}
            animate={controls}
            initial="hidden"
            variants={variantsLeft}
            src="images/cohaut-logo-horizontal-black.svg"
          />
        </div>
        <div className="flex flex-col justify-end lg:h-full lg:w-5/12 lg:px-10">
          <motion.p
            ref={ref3}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: '100%' },
            }}
            className="text-justify text-lg font-semibold leading-8 tracking-wide text-black"
          >
            Para nos acompanhar no LANÇAMENTO CO-HAUT, contamos com o Studio Mu,
            o café-bistrô idealizado pelo chef Matheus Uchôa, que promete tornar
            a experiência gastronômica do evento inovadora. Com pratos cheios de
            capricho e únicos em cada detalhe, a Cozinha Experimental vem para
            mostrar que a gastronomia e a arte andam juntas, deixando o ambiente
            mais belo e, é claro, mais saboroso.
          </motion.p>
        </div>
        <div className="flex-col items-end justify-end  lg:w-4/12">
          <div className="hidden gap-4 drop-shadow-xl lg:grid lg:grid-cols-2">
            {postsToShow.map((post) => (
              <motion.img
                ref={ref4}
                animate={controls}
                initial="hidden"
                variants={variantsRight}
                custom={post.id}
                key={post.id}
                src={post.imgSrc}
                alt={post.alt}
                className="transition-custom-default h-44 w-full rounded-md object-cover hover:scale-105"
              />
            ))}
          </div>
          <div className="lg:hidden">
            <div className="grid items-end gap-4 drop-shadow-xl lg:grid-cols-2">
              {postsToShow.slice(3).map((post) => (
                <img
                  key={post.id}
                  src={post.imgSrc}
                  alt={post.alt}
                  className=" h-44 w-full rounded-md object-cover "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-52 z-10 hidden lg:flex">
        <img src={'images/advertising/star.png'} className="w-28" alt="star" />
      </div>
      <div className="absolute top-16 right-0 z-0 hidden lg:flex">
        <img
          src={'images/advertising/giant-dot.png'}
          className="w-96"
          alt="giant-dot"
        />
      </div>
    </section>
  )
}

export default AdvertisingSection
