import React, { Component } from 'react';
import './assets/scss/style.scss';
import Product from './components/products/Product';
import _ from 'lodash';
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
  }
  // handleDelete = (id) => {
  //   console.log(id);
  //   let {arrayProduct} = this.state;
  //   let arrayProduct2 = arrayProduct.splice(id, 1);
  //   this.setState({
  //     arrayProduct: arrayProduct
  //   })
  // }
  render() {
    return (
      <div className="App">
        <Product/>
      </div>
    );
  }
}

export default App;