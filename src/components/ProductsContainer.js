import React, { Component } from 'react';
import ProductItem from './ProductItem';
import './ProductsContainer.css';

class ProductsContainer extends Component {

  render() {
    let productsItems = [];
    let products = this.props.products 
    // this.props.products.forEach((product) => {
    //   productsItems.push(<ProductItem key={product.name} 
    //         productName={product.name} productPrice={product.price}></ProductItem>)
    // });
    for(let index=0; index<products.length; index++){
      productsItems.push(<ProductItem key={products[index].name} productName={products[index].name} 
                                productPrice={products[index].price}></ProductItem>);
    }
    

    return (
      <div className="boxProductsItems">
        {productsItems}
      </div>
    );
  }
}

export default ProductsContainer