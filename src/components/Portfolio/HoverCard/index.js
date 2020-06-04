import React, { Component } from 'react';

class HoverCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    }
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState)
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    }
  }

  render() {
    return (
      <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} className="project" key={this.props.project.id}>
        <a className="project-link" href={this.props.project.site}>
          {
            this.state.isHovering
            ?
              <div className="project-image">
                {this.props.project.title}
              </div>
            : <div style={{display: 'flex'}}><img className="project-image" src={this.props.project.image} alt={this.props.project.title} /></div>
          }
        </a>
      </div>
    )
  }
}

export default HoverCard;