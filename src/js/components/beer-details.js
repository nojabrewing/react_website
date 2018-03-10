import React, {Component} from 'react'

class BeerDetails extends Component {

    constructor(props) {
      super(props)
      this.state = {
        descriptionModifier: null,
        descriptionHeight: 'auto'
      }
      this.toggleDescription = this.toggleDescription.bind(this)
      this.onImgLoad = this.onImgLoad.bind(this)
    }

    render() {
        console.log('render', this.state.descriptionModifier, this.state.descriptionModifier === 'more', this.state.descriptionHeight)
      return (
         <div className="beer_details container" id={this.props.name.replace(' ', '_')}>
           <div className="row">
             <div className="beer_details_icon_container col-sm-12 col-md-6 col-lg-4">
               <img className="beer_details_icon" src={'../images/' + this.props.image} onLoad={this.onImgLoad}/>
             </div>
             <div className="beer_details_description_container col-sm-12 col-md-6 col-lg-8">
                <div className="row">
                    <div className="beer_details_title_container col-sm-12 col-lg-7" ref={(elem) => this.title = elem}>
                        <h2 className="beer_details_title">
                            {this.props.name}
                        </h2>
                        <h5 className="beer_details_category">
                            {this.props.category}
                        </h5>
                    </div>
                    <div className="beer_details_stats_container col-sm-12 col-lg-5">
                        <ul className="beer_details_stats bold">
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
                    <div className="beer_details_text_container col-sm-12">
                      <p className={"beer_details_description " + this.state.descriptionModifier}
                        style={{height: this.state.descriptionModifier === 'more' ? this.state.descriptionHeight : 'auto'}}
                        ref={(elem) => this.description = elem}
                        dangerouslySetInnerHTML={{__html:this.props.description}}/>
                      {
                        this.state.descriptionModifier !== null
                        ? <div className='less_more_button' onClick={this.toggleDescription}>{'\u2026' + this.state.descriptionModifier}</div>
                        : null
                      }
                    </div>
                </div>
             </div>
           </div>
         </div>
      )
    }

    toggleDescription() {
      this.setState({descriptionModifier: this.state.descriptionModifier === 'more' ? 'less' : 'more'})
    }

    onImgLoad({target: image}) {
        const descriptionHeight = this.description.clientHeight;
        const titleHeight = this.title.clientHeight;
        const imageHeight = image.offsetHeight;
        if (descriptionHeight > (imageHeight - titleHeight)) {
          this.setState({descriptionModifier: 'more', descriptionHeight: (imageHeight - titleHeight - 30) + 'px'})
        }
    }
}

export default BeerDetails
