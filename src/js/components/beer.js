import React from 'react'

import BeerDetails from './beer-details'
import Beers from '../../data/beers.json'

const Beer = (props) => {
    const { match } = props
    return (
        <div className="main container">
          <h3 className="title">{name}</h3>
          <BeerDetails name={name} number={id} image={image}>
              {description}
          </BeerDetails>
        </div>
    )
}

export default Beer
