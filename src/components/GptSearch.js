import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestion from './GptSuggestion'

import {LOGIN_BG_URl  } from '../utils/constants'

const GptSearch = () => {
    
  return (
      <div>
          <div className="absolute -z-10">
        <img

          src={LOGIN_BG_URl}
          alt="bg"
        />
         
              </div>
                <GptSearchBar />
      <GptSuggestion/></div>
  )
}

export default GptSearch