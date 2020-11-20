import React from 'react'

const Welcome = () => {
    return (
      <div className="main container">
        <div className="section">
          <h2>Welcome</h2>
          <p>
            Hi, my name is Max and I'm a homebrewer living in Potsdam, Germany. This site is a log of my homebrewing efforts that began in
            late 2014. I started out brewing all kinds of different beer styles to get some experience with different malts, hops, and yeast.
            Nowadays, I tend to brew Saisons, and hoppy beers like IPAs and Pale Ales, but also traditional English Porters.<br/>
            In the beers section you find a list of all the beers that I have brewed so far; each with a description of the ingredients
            and some tasting notes. To better characterize my beers, I try to give them a meaningful
            name and design a label which reflects the color, style, and/or ingredients of the beer.
            You find the recipes of all my beers at <a className="bold" target="_blank" href="http://brewgr.com/!/nojabrewing">brewgr.com</a> and
            in the <a className="bold" target="_blank" href="https://community.grainfather.com">Grainfather</a> community.<br/>
            If you like to contact me, send me a message on facebook or instagram. You can also rate my beers on untappd in case you get hold
            of them. Cheers.
          </p>
        </div>
      </div>
    )
}

export default Welcome
