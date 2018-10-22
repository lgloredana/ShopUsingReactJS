import React, { Component } from 'react';

class ProductsContainer extends Component {

  render() {
    const productsItems = [];
    this.props.products.forEach((product) => {
      productsItems.push(<div>{product.name}</div>)
    });

    return (
      <div>
        {productsItems}
      </div>
    );
  }
}

export default ProductsContainer