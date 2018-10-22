import React, { Component } from 'react';
import productImg from './img/no-product-image.png';
class ProductItem extends Component{
    
    render(){
        const productName = this.props.productName;
        const productPrice = this.props.productPrice;
        return (  <div className="box">
        <div className="boxImg">
            <img src={productImg} alt="no-img-product"/>
            <button name="btnRemove" className="btnUpRight">Remove</button>
            <button name="btnEdit" className="btnDownLeft">Edit</button>
            <button name="btnCompare" className="btnDownRight">Compare</button>
        </div>
        <p></p>
        <div className="boxDetails">
            <div className="itemDetailsLeft">{productName}</div>
            <div className="itemDetailsRight">{productPrice}</div> 
        </div>
    </div>  
      );
    };
}

export default ProductItem;