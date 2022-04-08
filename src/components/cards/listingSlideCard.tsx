import React from 'react'
import { IListing } from '../../interfaces/IListing'

type Props = {
  slideActive?: any
  listing?: IListing
}

const ListingSlideCard: React.FC<Props> = ({ slideActive, listing }) => {
  return (
    <div
      className={`flex-col items-center ${
        !slideActive && 'opacity-50'
      } mx-auto my-0 w-64 justify-between gap-4 lg:flex lg:w-11/12 lg:flex-row lg:space-x-4`}
    >
      <div className="order-last my-8 flex  space-x-3 lg:w-9/12">
        <img
          className="h-96 rounded-md object-cover lg:w-9/12 lg:rounded-lg"
          src={`${listing.attributes.featuredImage.data?.attributes.url}`}
        />
        <div className="hidden max-h-96 w-52 flex-col items-center justify-between lg:flex">
          {listing.attributes.gallery.data?.map((photo) => (
            <img
              key={photo.id}
              className="h-20 w-full rounded-md object-cover lg:rounded-lg"
              src={`${photo.attributes.url}`}
            />
          ))}
        </div>
      </div>
      <div className="order-first flex w-full flex-col items-start justify-between space-y-4 lg:my-0 lg:w-3/12">
        <h2 className="text-4xl font-bold md:text-6xl">
          {listing?.attributes.listingId}.
        </h2>
        <p className="text-justify text-xs line-clamp-6 md:text-sm">
          {listing.attributes.description}
        </p>

        <div className="w-full flex-col text-xs">
          <small className="text-gray-600">
            {listing.attributes.city} - {listing.attributes.neighborhood}
          </small>
          <span className="flex items-center justify-between ">
            <h4 className="text-gray-300">
              {listing.attributes.street}, {listing.attributes.streetNumber}
            </h4>
            <h5 className="italic text-gray-400">{listing.attributes.size}</h5>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ListingSlideCard
