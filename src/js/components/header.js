import React from 'react'

import fb_icon from "../../images/fb_icon.png"
import ig_icon from "../../images/ig_icon.png"
import untappd_icon from "../../images/untappd_icon.png"
import header_icon from "../../images/header_icon.png"

const Header = () => {
    return (
        <div className="header container">
            <img className="header_icon" src={header_icon}/>
        </div>
    )
}

export default Header
