import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render(){

    /* jshint ignore:start */
    return (<div>
      Hello User
    </div>);
    /* jshint ignore:end */
  }
}
/* jshint ignore:start */
ReactDOM.render(<App />, document.getElementById('app'));
/* jshint ignore:end */
