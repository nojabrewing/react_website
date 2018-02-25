import React from 'react'

import Header from '../components/header'
import Main from '../components/main'

const RootContainer = () => {
    return (
        <div className="wrap_all container-fluid">
            <Header/>
            <Main/>
        </div>
    )
}

export default RootContainer
