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
      products:[], 
      filterText:''
    }
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd(){
    //update state of the StartPage in order to propagate to all sibling
    this.setState({});
  }

  render() {

    return (
      <div className="box">
        <div className="boxHeader"></div>
        <div className="boxAddProducts">
          <AddItemButton products={this.state.products} onAdd={this.onAdd}></AddItemButton>
        </div>
        <div className="boxProducts">
          <ProductsContainer products={this.state.products}  compareList={this.state.compareList}></ProductsContainer>
        </div>
        <div className="boxCompare">
          <CompareContainer products={this.state.compareList}></CompareContainer>
        </div>
      </div>
    );
  }
}

export default StartPage