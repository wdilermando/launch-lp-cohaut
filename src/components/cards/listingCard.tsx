import React from 'react'
import { IListing } from '../../interfaces/IListing'

type Props = {
  listing: IListing
  goToListing?: any
}

const ListingCard: React.FC<Props> = ({ listing, goToListing }) => {
  return (
    <div
      className="relative mx-5 my-5 cursor-pointer text-lpSecondary"
      onClick={goToListing}
    >
      <h1 className="z-8 absolute -top-5 -left-5 text-5xl font-bold shadow-sm">
        {listing.attributes.listingId}.
      </h1>
      <span className="space-y-3">
        <img
          src={`http://localhost:1337${listing.attributes.featuredImage.data.attributes.url}`}
          alt=""
          className="h-64 w-full rounded-xl object-cover"
        />
        <p className="line-clamp-2 text-base">
          {listing.attributes.featuredDescription}
        </p>
      </span>
    </div>
  )
}

export default ListingCard
