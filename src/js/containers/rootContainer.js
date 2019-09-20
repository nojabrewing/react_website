import React, { Component } from 'react'

import { Route, Redirect, Switch } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../components/home'
import Nav from '../components/nav'
import Beer from '../components/beer'
import BeerList from '../components/beer-list'
import About from '../components/about'

import { buildUrl } from 'react-instafeed'

const instaOptions = {
  accessToken: '5341889246.dc1d39e.a4cf84e1e5a7431399b877ae01e8696f',
  clientId: 'dc1d39e0f6f54d889f5064621b2b6a6a',
  get: 'user', // popular, user
  locationId: null,
  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'mostRecent', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: null,
  userId: 5341889246,
}

const instaUrl = buildUrl(instaOptions)

class RootContainer extends Component {

    constructor (props) {
        super(props)

        this.state = {
            instagramData: null
        }

        this.renderHome = this.renderHome.bind(this)

        fetch(instaUrl)
        .then(response => response.json())
        .then(data => this.setState({instagramData: data.data}))
        .catch(error => console.log(error))
    }

    render () {
        return (
            <div className="wrap_all container-fluid">
                <Header/>
                <Nav/>
                <Switch>
                  <Route path='/' exact render={this.renderHome}/>
                  <Route path='/beers' exact component={BeerList}/>
                  <Route path='/beer_:id([0-9]+_?[0-9]?)' exact component={Beer}/>
                  <Route path='/about' exact component={About}/>
                  <Redirect to='/'/>
                </Switch>
                <Footer/>
            </div>
        )
    }

    renderHome () {
        const { instagramData } = this.state
        return <Home instagramData={instagramData} />
    }
}

export default RootContainer
