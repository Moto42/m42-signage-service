import React from 'react';
import Parser from 'html-react-parser';
import marked from 'marked';


/* Slide object reference for this template
  {
    template: 'Markdown',
    contents: {
      mdtext: "This is the First markdown slide."
    }
  }
*/

class Markdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const htmlPile = marked(this.props.slide.contents.mdtext);
    return (<div>
      {Parser(htmlPile)}
    </div>)
  }
}

export default Markdown;
