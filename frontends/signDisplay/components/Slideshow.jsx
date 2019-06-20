// Accepts a slideshow object
// Plays each Slide in turn, by passing each slide in the slideshow to
// a SlideViewer, rendering it and running the slides "transition" function

import React from 'react';

import SlideViewer from './SlideViewer.jsx';
class Slideshow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <SlideViewer slide={this.props.slideshow.slides[0]} />
      <SlideViewer slide={this.props.slideshow.slides[1]} />
    </div>)
  }
}

export default Slideshow;
