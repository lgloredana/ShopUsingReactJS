import React, { Component } from 'react';
import ProductEdit from './ProductEdit';


class AddItemButton extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.openSaveModal()} >+ Add Products</button>

          <ProductEdit  title="New Product"
                        editProductIsOpened={this.props.saveProductIsOpened}
                        product={{}}
                        buttonName = "Add"
                        onUpdateProduct={(product) => this.props.addProduct(product)}/>
      </div>
    );
  }
}

export default AddItemButton