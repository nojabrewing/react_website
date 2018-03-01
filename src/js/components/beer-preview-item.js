import React from 'react'
import { Link } from 'react-router-dom'

const BeerPreviewItem = (props) => {
    const { id, name, image } = props
    return (
        <div className="beer_preview_item col-xs-6 col-sm-3">
          <Link to={'/beers/:' + id}>
            <img className="beer_preview_item_image" src={require('../../images/' + image)} />
            <div className="beer_preview_item_title">
              {name}
            </div>
          </Link>
        </div>
    )
}

export default BeerPreviewItem
