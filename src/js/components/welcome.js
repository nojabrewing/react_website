import React from 'react'

const Welcome = () => {
    return (
        <div className="section">
          <h3>Welcome</h3>
          <p>
            Hi, my name is Max and I'm a homebrewer from Potsdam, Germany. This site is a log of my homebrewing efforts that began in late 2014.
            I started out brewing all kinds of different beer styles to get some experience with different malts, hops, and yeasts. This resulted
            in some quite interesting beers with weird ingredients like beet root. Now I usually tend to brew beer styles that I like but can't
            buy locally, or beer styles that really pose a challenge like barley wines or very low ABV beers. At the moment, my favorite beer
            styles are Saisons, (Black) IPAs, and traditional English Porters.
            Below you find a list of all the brews that I made so far; each with a description of the ingredients
            I used and some tasting notes. To better characterize my beers, I try to give them a meaningful
            name and design a label which reflects the color, style, and/or ingredients of the beer.
            You find the recipes of all my beers at <a className="bold" target="_blank" href="http://brewgr.com/!/yesbrewnein">brewgr.com</a>.
            If you like to contact me, send a mail to <a className="bold" href="mailto:yesbrewnein@gmail.com">yesbrewnein</a> or find me on facebook.
          </p>
        </div>
    )
}

export default Welcome
