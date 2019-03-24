import React from 'react'

const Footer = () => {
    return (
        <div className="footer container">
          <p>
            &copy; NOJA Brewing {(new Date()).getFullYear()}. All rights reserved.
          </p>
        </div>
    )
}

export default Footer
