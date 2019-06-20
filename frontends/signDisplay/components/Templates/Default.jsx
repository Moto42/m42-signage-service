import React from 'react'

class Default extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h1>Template not found</h1>
      <p>
        The template type "{this.props.slide.template}" was not found.<br/>
        Note that template names are case sensitive and are all CapitalizesCamelCase.
      </p>
    </div>)
  }
}

export default Default;
