import React from 'react'

import InstagramItem from './instagram-item'

const Instagram = (props) => {
    if (!props.data)
        return null

    return (
        <div className="main container">
            <div className="section">
                <h3>@yesbrewnein</h3>
                <div className="row">
                    {
                        props.data.map((item) => {
                            return (
                                <InstagramItem key={item.id} data={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Instagram