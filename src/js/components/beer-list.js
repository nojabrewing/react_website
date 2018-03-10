import React from 'react'

import BeerPreviewItem from './beer-preview-item'

import { beers } from './data/beers.json'

const BeerList = () => {
    return (
        <div className="main container">
          <div className="beer_list row">
            {
              beers.map((beer) => {
                return (
                  <BeerPreviewItem key={beer.id} id={beer.id} name={beer.name} image={beer.preview}/>
                )
              })
            }
          </div>
        </div>
    )
}

export default BeerList
