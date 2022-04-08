import React, { useEffect } from 'react'
import { IListing } from '../../interfaces/IListing'
import ListingCard from '../cards/listingCard'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {
  handleModal?: any
  listings?: IListing[]
}

const ListingPortfolio: React.FC<Props> = ({ handleModal, listings }) => {
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
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
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
    <section className={`flex min-h-screen items-center bg-lpPrimary py-16`}>
      <div className="flex-col items-center space-y-6 px-5 lg:flex lg:flex-row lg:space-x-6 lg:px-32">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variantsLeft}
          className="items-center justify-center lg:w-6/12"
        >
          <img src="images/decorados.jpg" className="w-full" />
        </motion.div>
        <div className="items-center justify-center lg:w-6/12">
          <div className="grid gap-5 lg:grid-cols-2">
            {listings.map((listing) => (
              <motion.div
                key={listing.id}
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={variantsRight}
                custom={listing.id}
              >
                <ListingCard
                  listing={listing}
                  goToListing={() =>
                    handleModal(true, listing.attributes.listingId)
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListingPortfolio
