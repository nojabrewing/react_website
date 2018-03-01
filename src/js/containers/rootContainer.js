import React from 'react'

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Header from '../components/header'
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
              <Route path='/beers/:id' component={Beer}/>
              <Route path='/about' component={About}/>
              <Redirect to='/'/>
            </Switch>
        </div>
    )
}

export default RootContainer
