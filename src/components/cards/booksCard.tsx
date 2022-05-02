import React, { useState } from 'react'
import NewsLetterForm from '../forms/newsLetterForm'

type Props = {
  cardBook?: any
}

const BookCard: React.FC<Props> = ({ cardBook }) => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className="flex-col">
      <div
        className="mb-4 w-72 cursor-pointer rounded-xl bg-black text-lpSecondary transition-transform duration-500 ease-in-out hover:scale-105"
        onClick={() => setShowForm(!showForm)}
      >
        <img
          src={cardBook.imgSrc}
          alt={cardBook.title}
          className="h-72 w-full rounded-t-xl object-cover "
        />
        <div className="p-5">
          <h4 className="text-xl">{cardBook.title}</h4>
        </div>
      </div>
      {showForm && (
        <NewsLetterForm book={cardBook.book} title={cardBook.title} />
      )}
    </div>
  )
}

export default BookCard
