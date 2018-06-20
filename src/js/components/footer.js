import React from 'react'

const Footer = () => {
    return (
        <div className="footer container">
          <p>
            &copy; YESBREWNEIN {(new Date()).getFullYear()}. All rights reserved.
          </p>
        </div>
    )
}

export default Footer
