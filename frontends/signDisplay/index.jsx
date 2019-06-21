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
            mdtext: "# Fully working markdown!\n\n This is the First markdown slide.\n\n - List item 1\n -List item 2",
          }
        },
        {
          template: 'Markdown',
          transition: 'slidein-left',
          contents: {
            mdtext: "# More working markdown!\n\n **This is bold**\n\n *This is italic*\n\n ~~It just works~~",
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
