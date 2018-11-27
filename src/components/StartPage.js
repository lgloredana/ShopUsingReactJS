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

    console.log('test code');

    // function doAsyncTask(cb){
    //     console.log("start executing asyncTask");
    //     setTimeout(() => {
    //         console.log("async task calling callback");
    //         cb();
    //     }, 20000);
    // }
    //
    // doAsyncTask(() => console.log("callback called"));

  // const hasError = false;
  // function doAsyncTask(cb) {
  //     console.log("start executing asyncTask");
  //     let promise = new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //             console.log("async task calling callback");
  //             if(hasError){
  //                 reject("msg err");
  //             }else{
  //                 resolve("msg succ");
  //             }
  //         }, 2000);
  //     });
  //     return promise;
  // }
  //
  // doAsyncTask().then((msg) => console.log(msg), (err) => console.log(err));


      let promise = Promise.resolve('succ');
      promise.then((val) => console.log(val), () => console.log("err"));

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