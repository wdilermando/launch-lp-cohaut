import React from 'react'

type Props = {
  listingId: string
  imgSource: string
  description: string
  goToListing?: any
}

const ListingCard: React.FC<Props> = ({
  listingId,
  imgSource,
  description,
  goToListing,
}) => {
  return (
    <div
      className="relative mx-5 my-5 cursor-pointer text-lpSecondary"
      onClick={goToListing}
    >
      <h1 className="z-8 absolute -top-5 -left-5 text-5xl font-bold shadow-sm">
        {listingId}
      </h1>
      <span className="space-y-3">
        <img src={imgSource} alt="" className="w-96 rounded-xl" />
        <p className="text-base">{description}</p>
      </span>
    </div>
  )
}

export default ListingCard
