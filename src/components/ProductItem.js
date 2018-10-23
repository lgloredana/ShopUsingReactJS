import React, { Component } from 'react';
import productImg from './img/no-product-image.png';
import './ProductItem.css';



class ProductItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            showCompareBtn:true
        }
        this.onCompare = this.onCompare.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onCompare(e){
        this.state.showCompareBtn = false;
        this.props.onCompare(e);
    }

    onRemove(e){
        this.state.showCompareBtn = true;
        this.props.onRemove(e);
    }

    render(){
        const productName = this.props.productName;
        const productPrice = this.props.productPrice;
        let buttons;
        if(this.state.showCompareBtn){
            buttons=<div>
                        <button name="btnEdit" className="btnDownLeft" 
                                value={productName + "/" + productPrice} 
                                onClick={this.props.onEdit}>Edit</button>
                        <button name="btnCompare" className="btnDownRight" 
                                value={productName + "/" + productPrice} 
                                onClick={this.onCompare}>Compare</button>
                    </div>
        } else {
            buttons=<div>
                        <button name="btnRemove" className="btnUpRight" 
                                value={productName} 
                                onClick={this.onRemove}>Remove</button>
                        <button name="btnEdit" className="btnDownLeft" 
                                value={productName + "/" + productPrice} 
                                onClick={this.props.onEdit}>Edit</button>
                    </div>
        }
        return (  <div className="boxProductsEntity">
            <div className="boxImg">
                <img src={productImg} alt="no-img-product"/>
                {buttons}
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