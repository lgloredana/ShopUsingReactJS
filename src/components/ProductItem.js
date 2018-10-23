import React, { Component } from 'react';
import productImg from './img/no-product-image.png';
import './ProductItem.css';

class ProductItem extends Component{
    // constructor(props){
    //     super(props);
        // this.onRemove = this.props.onRemove.bind(this);
    // }

    // onRemove(){

    // }

    render(){
        const productName = this.props.productName;
        const productPrice = this.props.productPrice;
        return (  <div className="boxProductsEntity">
            <div className="boxImg">
                <img src={productImg} alt="no-img-product"/>
                <button name="btnRemove" className="btnUpRight" value={productName} onClick={this.props.onRemove}>Remove</button>
                <button name="btnEdit" className="btnDownLeft">Edit</button>
                <button name="btnCompare" className="btnDownRight">Compare</button>
            </div>
            <p></p>
            <div className="boxDetails">
                <div className="itemDetailsLeft">{productName}</div>
                <div className="itemDetailsRight">{productPrice}</div> 
            </div>
        </div> );
    };
}

export default ProductItem;