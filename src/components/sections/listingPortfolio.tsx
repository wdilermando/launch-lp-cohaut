import React from 'react'
import ListingCard from '../cards/listingCard'

type Props = {
  handleModal?: any
}

const ListingPortfolio: React.FC<Props> = ({ handleModal }) => {
  const listings = [
    {
      listingId: '001.',
      imgSource:
        'https://cohaut.com/wp-content/themes/cohaut/assets/images/inicio-carrossel/1.jpg',
      description: 'O antigo e o novo em completa sintonia',
      id: 1,
    },
    {
      listingId: '002.',
      imgSource:
        'https://cohaut.com/wp-content/themes/cohaut/assets/images/inicio-carrossel/1.jpg',
      description: 'O antigo e o novo em completa sintonia',
      id: 2,
    },
    {
      listingId: '003.',
      imgSource:
        'https://cohaut.com/wp-content/themes/cohaut/assets/images/inicio-carrossel/1.jpg',
      description: 'O antigo e o novo em completa sintonia',
      id: 3,
    },
    {
      listingId: '004.',
      imgSource:
        'https://cohaut.com/wp-content/themes/cohaut/assets/images/inicio-carrossel/1.jpg',
      description: 'O antigo e o novo em completa sintonia',
      id: 4,
    },
  ]

  return (
    <section className={`flex min-h-screen items-center bg-lpPrimary`}>
      <div className="grid items-center gap-10 px-5 lg:grid-cols-2 lg:px-32">
        <div className="items-center justify-center">
          <img src="images/decorados.jpg" />
        </div>
        <div className="items-center justify-center">
          <div className="grid gap-5 lg:grid-cols-2">
            {listings.map((listing) => (
              <ListingCard
                key={listing.id}
                {...listing}
                goToListing={() => handleModal(true, listing.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListingPortfolio
