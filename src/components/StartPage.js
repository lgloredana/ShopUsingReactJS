import React, { Component } from 'react';
import AddItemButton from './AddItemButton';
import ProductsContainer from './ProductsContainer';
import CompareContainer from './CompareContainer';
import './StartPage.css';
import Product from './Product';

class StartPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      compareList:[],
      products:[new Product("p1", 1)]
    }
  }
  render() {
    return (
      <div className="box">
        <div className="boxHeader"></div>
        <div className="boxAddProducts">
          <AddItemButton products={this.state.products}></AddItemButton>
        </div>
        <div className="boxProducts">
          <ProductsContainer products={this.state.products}></ProductsContainer>
        </div>
        <div className="boxCompare">
          <CompareContainer products={this.state.compareList}></CompareContainer>
        </div>
      </div>
    );
  }
}

export default StartPage