/**
 * Created by yyj on 11/24/16.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h1>hello world</h1>
      </div>
    );
  }
}

ReactDOM.render(
    <div>
      <App></App>
    </div>,
    document.getElementById('main')
);

//export default App;
