import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
      <div className="flex w-48 pr-4"><img src={IMG_CDN_URL+posterPath} alt="poster image"/></div>
  )
}

export default MovieCard