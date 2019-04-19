import React, { Component } from 'react';
import './assets/scss/style.scss';
import Product from './components/products/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Product/>
      </div>
    );
  }
}

export default App;