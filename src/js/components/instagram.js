import React from 'react'

import InstagramItem from './instagram-item'

const Instagram = (props) => {
    if (!props.data)
        return null

    return (
        <div className="main container">
            <div className="section">
                <h3>@nojabrewing</h3>
                <div className="row">
                    {
                        props.data
                        .filter((item, index) => {
                            return index <= 19
                        })
                        .map((item) => {
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