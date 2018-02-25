import React from 'react'

const BeerItem = ({name, number, image, children}) => {
    return (
        <li className="beer_list_item" id={name.replace(' ', '_')}>
          <div className="beer_list_item_container">
            <div className="beer_list_item_icon_container">
              <img className="beer_list_item_icon" src={image}/>
            </div>
            <div className="beer_list_item_text_container">
              <h4 className="beer_list_item_title">{name}<span className="right-aligned">#{number}</span></h4>
              <p className="beer_list_item_description">
                {children}
              </p>
            </div>
          </div>
        </li>
    )
}

export default BeerItem
