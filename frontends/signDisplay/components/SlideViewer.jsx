// Accepts a slide object as a prop.
// Determines which Template should be used for that slide and
// renders the correct Template, passing the slide to it's props.

import React from 'react';

import Markdown from './Templates/Markdown.jsx';
import Default from './Templates/Default.jsx';

class SlideViewer extends React.Component {
  constructor(props) {
    super(props);
  }
  determineTemplate(templateName) {
    let out;
    switch(templateName){
      case 'Markdown':
        out = <Markdown slide={this.props.slide} />;
      break;
      default:
        out = <Default slide={this.props.slide} />;
      break;
    }
    return out;
  }

  render() {
    const theSlide = this.determineTemplate(this.props.slide.template);
    return (<div>
      {theSlide}
    </div>)
  }
}

export default SlideViewer;
