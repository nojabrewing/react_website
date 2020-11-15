import React from 'react'

const InstagramItem = (props) => {
    const { data } = props
    const src = data.media_url
    return (
        <div className="instagram_item col-xs-12 col-sm-6 col-lg-4 col-xl-3">
          <a target="_blank" href={data.permalink}>
              <div className="instagram_image" style={{backgroundImage: `url(${src})`}} />
          </a>
        </div>
    )
}

export default InstagramItem