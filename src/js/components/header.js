import React from 'react'

import fb_icon from "../../images/fb_icon.png"
import ig_icon from "../../images/ig_icon.png"
import untappd_icon from "../../images/untappd_icon.png"
import header_icon from "../../images/header_icon.png"

const Header = () => {
    return (
        <div className="header container">
          <div className="row">
            <div className="col-xs-12 order-xs-first order-sm-2 offset-sm-1 col-sm-1">
              <a className="social_link" href="https://www.facebook.com/profile.php?id=100009930556750" target="_blank">
                <img className="social_icon" src={fb_icon}/>
              </a>
              <a className="social_link" href="https://www.instagram.com/nojabrewing" target="_blank">
                <img className="social_icon" src={ig_icon}/>
              </a>
              <a className="social_link" href="https://untappd.com/yesbrewnein" target="_blank">
                <img className="social_icon" src={untappd_icon}/>
              </a>
            </div>
            <div className="col-xs-8 col-sm-8 offset-xs-2 offset-sm-2 order-sm-1">
              <img className="header_icon" src={header_icon}/>
            </div>
          </div>
        </div>
    )
}

export default Header
