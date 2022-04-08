import React from 'react'
import { IListing } from '../../interfaces/IListing'

type Props = {
  listing: IListing
  goToListing?: any
}

const ListingCard: React.FC<Props> = ({ listing, goToListing }) => {
  return (
    <div
      className="group relative mx-5 my-5 cursor-pointer text-lpSecondary "
      onClick={goToListing}
    >
      <h1 className="absolute -top-5 -left-5 z-10 text-5xl font-bold shadow-sm transition-all duration-500 ease-in-out group-hover:-top-14 group-hover:text-white">
        {listing.attributes.listingId}.
      </h1>
      <span className="space-y-3">
        <img
          src={`${listing.attributes.featuredImage.data?.attributes.url}`}
          alt=""
          className="h-64 w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <p className="text-base transition-all duration-500 ease-in-out line-clamp-2 group-hover:text-white">
          {listing.attributes.featuredDescription}
        </p>
      </span>
    </div>
  )
}

export default ListingCard
