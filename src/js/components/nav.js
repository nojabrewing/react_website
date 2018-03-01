import React, {Component} from 'react'

import { Link } from 'react-router-dom'

class Nav extends Component {
    constructor(props) {
      super(props)
      this.state = {
        collapsed: true
      }
      this.toggleNav = this.toggleNav.bind(this)
    }
    render() {
      return (
          <div className="nav container">
              <div className="nav_toggle container bold" onClick={this.toggleNav}>
                Menu
              </div>
              <div className={"nav_bar container" + (this.state.collapsed ? ' collapsed' : '')}>
                <ul className="nav_list">
                  <li className="nav_item">
                    <Link to='/'>
                      Home
                    </Link>
                  </li>
                  <li className="nav_item">
                    <Link to='/beers'>
                      Beers
                    </Link>
                  </li>
                  <li className="nav_item">
                    <Link to='/about'>
                      About
                    </Link>
                  </li>
                </ul>
              </div>
          </div>
      )
    }

    toggleNav() {
      this.setState({collapsed: !this.state.collapsed})
    }
}

export default Nav
