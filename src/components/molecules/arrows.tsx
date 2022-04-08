import React from 'react'
import { FaPlay } from 'react-icons/fa'

type Props = {}
const Arrows: React.FC<Props> = () => {
  return (
    <span className="flex space-x-2">
      <FaPlay color="#ff7149" />
      <FaPlay color="#ff7149" />
      <FaPlay color="#ff7149" />
    </span>
  )
}

export default Arrows
