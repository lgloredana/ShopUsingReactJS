import React, { Component } from 'react';
import productImg from './img/no-product-image.png';
import './ProductItem.css';



class ProductItem extends Component{
    constructor(props){
        super(props);
        this.onCompare = this.onCompare.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }
    onEdit(e){
        this.props.onEdit(e);
        this.setState({});
    }

    onCompare(e){
        this.props.onCompare(e);
    }

    onRemove(e){
        this.props.onRemove(e);
    }

    render(){
        const productName = this.props.productName;
        const productPrice = this.props.productPrice;
        const showCompareBtn = this.props.showCompareBtn;
        let buttons;
        if(this.props.showCompareBtn){
            buttons=<div>
                        <button name="btnEdit" className="btnDownLeft btn btn-success" 
                                value={productName + "/" + productPrice} 
                                onClick={this.onEdit}>Edit</button>
                        <button name="btnCompare" className="btnDownRight btn btn-warning" 
                                value={productName + "/" + productPrice} 
                                onClick={this.onCompare}>Compare</button>
                    </div>
        } else {
            buttons=<div>
                        <button name="btnEdit" className="btnDownLeft btn btn-success" 
                                value={productName + "/" + productPrice + '/' + showCompareBtn } 
                                onClick={this.onEdit}>Edit</button>
                        <button name="btnRemove" className="btnUpRight btn btn-danger" 
                                value={productName} 
                                onClick={this.onRemove}>Remove</button>
                    </div>
        }
        return (  <div className="boxProductsEntity">
            <div className="boxImg">
                <img src={productImg} alt="no-img-product"/>
                {buttons}
            </div>
            <div className="boxDetails">
                <div className="itemDetailsLeft">{productName}</div>
                <div className="itemDetailsRight">${productPrice}</div> 
            </div>
        </div> );
    };
}

export default ProductItem;