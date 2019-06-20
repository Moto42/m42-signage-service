import React from 'react'



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
    return (<div>
      {this.props.slide.contents.mdtext}
    </div>)
  }
}

export default Markdown;
