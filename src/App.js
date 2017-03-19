import React, { Component } from 'react';

import {SelectPackage} from './SelectPackage';

import './css/animate.css';
import './bulma-css/css/bulma.css';
import './bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'; 
import './App.css';

class App extends Component {

  render() {
    
    return (
      <div className="App App-background">
          <SelectPackage/>
      </div>
    );
  }
}

export default App;
