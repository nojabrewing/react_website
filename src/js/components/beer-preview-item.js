import React from 'react'
import { Link } from 'react-router-dom'

const BeerPreviewItem = (props) => {
    const { id, name, image } = props
    console.log(image)
    return (
        <div className="beer_preview_item col-xs-12 col-sm-6 col-lg-4 col-xl-3">
          <Link to={'/beers/' + id}>
              <div className="beer_preview_item_content_wrapper">
                  <img className="beer_preview_item_image" src={require('../../images/' + image)} />
                  <div className="beer_preview_item_title_container">
                    <span className="beer_preview_item_title">
                      {name}
                    </span>
                  </div>
              </div>
          </Link>
        </div>
    )
}

export default BeerPreviewItem
