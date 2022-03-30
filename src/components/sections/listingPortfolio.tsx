import React from 'react'
import { IListing } from '../../interfaces/IListing'
import ListingCard from '../cards/listingCard'

type Props = {
  handleModal?: any
  listings?: IListing[]
}

const ListingPortfolio: React.FC<Props> = ({ handleModal, listings }) => {
  return (
    <section className={`flex min-h-screen items-center bg-lpPrimary py-16`}>
      <div className="flex-col items-center space-y-6 px-5 lg:flex lg:flex-row lg:space-x-6 lg:px-32">
        <div className="items-center justify-center lg:w-6/12">
          <img src="images/decorados.jpg" className="w-full" />
        </div>
        <div className="items-center justify-center lg:w-6/12">
          <div className="grid gap-5 lg:grid-cols-2">
            {listings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                goToListing={() =>
                  handleModal(true, listing.attributes.listingId)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListingPortfolio
