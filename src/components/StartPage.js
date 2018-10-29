import React, { Component } from 'react';
import AddItemButton from './AddItemButton';
import ProductsContainer from './ProductsContainer';
import CompareContainer from './CompareContainer';
import './StartPage.css';
// import Product from './Product';

class StartPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      compareList:[],
      products:[]
    }
    this.updateProducts = this.updateProducts.bind(this);
  }

  updateProducts(){
    //update state of the StartPage in order to propagate to all sibling
    this.setState({});
  }

  render() {
    let productsContainer=[];
    let compareContainer=[];
    const products = this.state.products;
    const compareList = this.state.compareList;

    if (products.length > 0){
      productsContainer.push(<div className="boxProducts" key={products.length}>
                              <ProductsContainer products={this.state.products} compareList={this.state.compareList}
                              propagateProductsChange={this.updateProducts}></ProductsContainer>
                            </div>);
    }
    if(compareList.length > 0 ){
      compareContainer.push(<div className="boxCompare" key={compareList.length}>
                          <CompareContainer compareList={this.state.compareList}></CompareContainer>
                        </div>);
    }
    return (
      <div className="box">
        <div className="boxHeader"><h1>Compare Products</h1></div>
        <div className="boxAddProducts">
          <AddItemButton products={this.state.products} onAdd={this.updateProducts}></AddItemButton>
        </div>
        {productsContainer}
        {compareContainer}
      </div>
    );
  }
}

export default StartPage