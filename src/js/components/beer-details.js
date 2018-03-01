import React, {Component} from 'react'

class BeerDetails extends Component {

    constructor(props) {
      super(props)
      this.MAX_DESCRIPTION_HEIGHT = 240
      this.state = {
        descriptionModifier: null
      }
      this.toggleDescription = this.toggleDescription.bind(this)
    }

    render() {
      return (
         <div className="beer_list_item" id={this.props.name.replace(' ', '_')}>
           <div className="beer_list_item_container">
             <div className="beer_list_item_icon_container">
               <img className="beer_list_item_icon" src={this.props.image}/>
               <ul className="beer_list_item_stats bold">
                <li>
                  ABV: 6.7%
                </li>
                <li>
                  OG: 1.055
                </li>
                <li>
                  IBU: 30
                </li>
                <li>
                  FG: 1.007
                </li>
               </ul>
             </div>
             <div className="beer_list_item_text_container">
               <h4 className="beer_list_item_title">{this.props.name}<span className="right-aligned">#{this.props.number}</span></h4>
               <p className={
                 "beer_list_item_description " + this.state.descriptionModifier } ref={(elem) => this.description = elem}>
                 {this.props.children}
               </p>
               {
                 this.state.descriptionModifier !== null
                 ? <div className='less_more_button' onClick={this.toggleDescription}>{'\u2026' + this.state.descriptionModifier}</div>
                 : null
               }
             </div>
           </div>
         </div>
      )
    }

    componentDidMount() {
      const descriptionHeight = this.description.clientHeight;
      console.log('Description height: ' + descriptionHeight)
      if (descriptionHeight > this.MAX_DESCRIPTION_HEIGHT) {
        this.setState({descriptionModifier: 'more'})
      }
    }

    toggleDescription() {
      this.setState({descriptionModifier: this.state.descriptionModifier === 'more' ? 'less' : 'more'})
    }
}

export default BeerDetails
