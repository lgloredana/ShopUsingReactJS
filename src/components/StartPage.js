import React, { Component } from 'react';
import AddItemButton from './AddItemButton';
import ProductsContainer from './ProductsContainer';
import CompareContainer from './CompareContainer';
import './StartPage.css';

class StartPage extends Component {

  render() {
    return (
      <div className="box">
        <div className="boxHeader"></div>
        <div className="boxAddProducts">
          <AddItemButton ></AddItemButton>
        </div>
        <div className="boxProducts">
          <ProductsContainer></ProductsContainer>
        </div>
        <div className="boxCompare">
          <CompareContainer></CompareContainer>
        </div>
      </div>
    );
  }
}

export default StartPage