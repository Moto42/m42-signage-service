import React     from 'react';
import ReactDOM  from 'react-dom';
import Slideshow from './components/Slideshow.jsx';
import './index.css';

class App extends React.Component {
  render(){

    const slideshow = {
      slides: [
        {
          template: 'Markdown',
          transition: 'slidein-left',
          contents: {
            mdtext: "This is the First markdown slide.",
          }
        },
        {
          template: 'Markdown',
          transition: 'slidein-left',
          contents: {
            mdtext: "This is the Second markdown slide.",
          }
        }
      ]
    }

    /* jshint ignore:start */
    return (<div>
      <Slideshow slideshow={slideshow} />
    </div>);
    /* jshint ignore:end */
  }
}
/* jshint ignore:start */
ReactDOM.render(<App />, document.getElementById('app'));
/* jshint ignore:end */
