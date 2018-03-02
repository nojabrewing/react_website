import React from 'react'
import { Link } from 'react-router-dom'

const BeerPreviewItem = (props) => {
    const { id, name, image } = props
    console.log(image)
    return (
        <div className="beer_preview_item col-xs-12 col-sm-6 col-lg-4 col-xl-3">
          <Link to={'/beers/' + id}>
            <img className="beer_preview_item_image" src={require('../../images/' + image)}  />
            <div className="beer_preview_item_title">
              {name}
            </div>
          </Link>
        </div>
    )
}

export default BeerPreviewItem
