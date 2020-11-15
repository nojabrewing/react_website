import React from 'react'

import fb_icon from "../../images/facebook_icon.png"
import ig_icon from "../../images/instagram_icon.svg"
import untappd_icon from "../../images/untappd_icon.svg"
import header_icon from "../../images/header_icon.png"

const Social = () => {
    return (
        <div className="social container">
              <a className="social_link" href="https://www.facebook.com/profile.php?id=100009930556750" target="_blank">
                <img className="social_icon" src={fb_icon}/>
              </a>
              <a className="social_link" href="https://www.instagram.com/nojabrewing" target="_blank">
                <img className="social_icon" src={ig_icon}/>
              </a>
              <a className="social_link" href="https://untappd.com/nojabrewing" target="_blank">
                <img className="social_icon" src={untappd_icon}/>
              </a>
        </div>
    )
}

export default Social