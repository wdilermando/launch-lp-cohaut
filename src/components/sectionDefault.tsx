import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Lottie from 'react-lottie-player'
import animationData from '../../public/motion/lottie_1.json'

type Props = {
  title?: string
}

const SectionDefault: React.FC<Props> = ({ title }) => {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const animation = useAnimation()
  useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
    if (!inView) {
      animation.start('hidden')
    }
  }, [animation, inView])

  return (
    <section
      ref={ref}
      className={`flex min-h-screen items-center justify-center bg-lpPrimary px-5 md:px-20`}
    >
      <div className="w-1/2">
        <motion.h1
          ref={ref}
          animate={animation}
          initial="hidden"
          transition={{ duration: 0.8 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: '-100%' },
          }}
          className="text-2xl text-white"
        >{`Ola ${title}`}</motion.h1>
      </div>
      <div className="w-1/2">
        <Lottie
          loop
          animationData={animationData}
          play
          style={{ width: 150, height: 150 }}
        />
        <h1 className="text-2xl text-white">{`Tudo bem ${title}`}</h1>
      </div>
    </section>
  )
}

export default SectionDefault
