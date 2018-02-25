import React from 'react'

import Welcome from './welcome'
import BeerList from './beerList'

const Main = () => {
    return (
        <div className="main container">
            <Welcome/>
            <BeerList/>
        </div>
    )
}

export default Main
