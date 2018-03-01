import React from 'react'

import BeerPreviewItem from './beer-preview-item'

import { beers } from './data/beers.json'

const BeerList = () => {
    return (
        <div className="main container">
          <h3 className="title">The Brews</h3>
          <div className="row">
            {
              beers.map((beer) => {
                return (
                  <BeerPreviewItem key={beer.id} id={beer.id} name={beer.name} image={beer.image}/>
                )
              })
            }
          </div>
        </div>
    )
}

export default BeerList
