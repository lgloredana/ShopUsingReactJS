import React, { Component } from 'react';
import ProductItem from './ProductItem';
import './ProductsContainer.css';

class ProductsContainer extends Component {
  constructor(props){
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }

  onRemove(e){
    let products = this.props.products;
    for(let index=0; index<products.length; index++){
      if(products[index].name === e.target.value){
        this.props.products.splice(index,1);
      }
    }
    this.props.propagateProductsChange();
  }

  render() {
    let productsItems = [];
    let products = this.props.products;

    for(let index=0; index<products.length; index++){
      productsItems.push(<ProductItem key={products[index].name} productName={products[index].name} 
                                productPrice={products[index].price} onRemove={this.onRemove}></ProductItem>);
    }
    

    return (
      <div className="boxProductsItems">
        {productsItems}
      </div>
    );
  }
}

export default ProductsContainer