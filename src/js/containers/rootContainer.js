import React, { Component } from 'react'

import { Route, Redirect, Switch } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import Social from '../components/social'
import Home from '../components/home'
import Nav from '../components/nav'
import Beer from '../components/beer'
import BeerList from '../components/beer-list'
import About from '../components/about'

// instagram new user id = 17841405317387736
// instagram new access token = IGQVJYSlF3Uk9sOHUxWlI5NzdIQi1TZAmJEcnJuWVRaaXpBSnVfdUFLNGt1Y18yRXM1WFNPRlVKQlV4RzdwVW05VWg1NDItT3VVUlo3cWF6bHh6VW5WbG5pQ2RIYlMtb04wczkwZAFVSSi1mZA1NaYnhpOFlFTlljQUxsYlln
// url to refresh access token "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token={long-lived-access-token}"

const userId = 17841405317387736
// last requested 2021 September 21
const accessToken = 'IGQVJXRUNBME4tZAmRWckhGVWN4Y1ZAYUkhISDBhN2phS01WNXdZAM25IdW15YUQxR0xVS1ZAjbGw0c19rLXZACTFZAxUzZAmbmx1NlkyTkp6QmFEQWN6RUMxY3NyOXZAxM21nYTAwREJ6TnF3'
const instagramFetchUrl = `https://graph.instagram.com/${userId}/media?fields=id,media_url,permalink&access_token=${accessToken}`

class RootContainer extends Component {

    constructor (props) {
        super(props)

        this.state = {
            instagramData: null
        }

        this.renderHome = this.renderHome.bind(this)

        fetch(instagramFetchUrl)
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
                <Social/>
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
