import React from 'react'

import Welcome from './welcome'
import Instagram from './instagram'

const Home = (props) => {
    return (
        <div>
            <Welcome/>
            <Instagram data={props.instagramData}/>
        </div>
    )
}

export default Home
