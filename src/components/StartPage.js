import React, { Component } from 'react';
import AddItemButton from './AddItemButton';
import ProductsContainer from './ProductsContainer';
import CompareContainer from './CompareContainer';
import './StartPage.css';

class StartPage extends Component {

  render() {
    return (
      <div class="box">
        <div class="boxHeader"></div>
        <div class="boxAddProducts">
          <AddItemButton></AddItemButton>
        </div>
        <div class="boxProducts">
          <ProductsContainer></ProductsContainer>
        </div>
        <div class="boxCompare">
          <CompareContainer></CompareContainer>
        </div>
      </div>
    );
  }
}

export default StartPage