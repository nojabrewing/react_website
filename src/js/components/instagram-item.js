import React from 'react'

const InstagramItem = (props) => {
    const { data } = props
    return (
        <div className="instagram_item col-xs-12 col-sm-6 col-lg-4 col-xl-3">
          <a target="_blank" href={data.link}>
              <img className="instagram_image" src={data.images.low_resolution.url} />
          </a>
        </div>
    )
}

export default InstagramItem