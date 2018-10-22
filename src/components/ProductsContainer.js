import React, { Component } from 'react';
import ProductItem from './ProductItem';
import './ProductItem.css'

class ProductsContainer extends Component {

  render() {
    const products = this.props.products; 
    const productsItems = [];
    products.forEach((product) => {
      console.log("product name " + product.name);
      productsItems.push(<ProductItem key={product.name} productName={product.name} productPrice={product.price}></ProductItem>)
    });

    return (
      <div>
        {productsItems}
      </div>
    );
  }
}

export default ProductsContainer