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
               <img className="beer_list_item_icon" src={'../images/' + this.props.image}/>
               <ul className="beer_list_item_stats bold">
                <li>
                  ABV: {this.props.details.abv}
                </li>
                <li>
                  OG: {this.props.details.og}
                </li>
                <li>
                  IBU: {this.props.details.ibu}
                </li>
                <li>
                  FG: {this.props.details.fg}
                </li>
               </ul>
             </div>
             <div className="beer_list_item_text_container">
               <p className={
                 "beer_list_item_description " + this.state.descriptionModifier } ref={(elem) => this.description = elem}
                 dangerouslySetInnerHTML={{__html:this.props.description}}/>
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
