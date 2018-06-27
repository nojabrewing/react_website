import React from 'react'

import { Route, Redirect, Switch } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../components/home'
import Nav from '../components/nav'
import Beer from '../components/beer'
import BeerList from '../components/beer-list'
import About from '../components/about'

const RootContainer = () => {
    return (
        <div className="wrap_all container-fluid">
            <Header/>
            <Nav/>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/beers' exact component={BeerList}/>
              <Route path='/beer_:id([0-9]+_?[0-9]?)' exact component={Beer}/>
              <Route path='/about' exact component={About}/>
              <Redirect to='/'/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default RootContainer
