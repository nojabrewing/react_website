import React from 'react'

import BeerDetails from './beer-details'

import { beers } from './data/beers.json'

const Beer = (props) => {
    const { match } = props
    const id = match.params.id
    const beer = beers.find((beer) => beer.id === id)
    return (
        <div className="main container">
          <BeerDetails {...beer} description={require('raw-loader!./data/' + beer.description)}/>
        </div>
    )
}

export default Beer
