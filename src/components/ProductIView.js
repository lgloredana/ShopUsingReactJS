import React, { Component } from 'react';
import productImg from '../img/no-product-image.png';
import '../css/ProductItem.css';



const ProductView= (props) => {
    let buttons = props.product.isCompared
                        ? (<div>
                                <button name="btnEdit" className="btnDownLeft btn btn-success" onClick={() => props.onEdit(props.product)}>
                                    Edit
                                </button>
                                <button name="btnRemove" className="btnUpRight btn btn-danger" onClick={() => props.onRemove(props.product, false)}>
                                    Remove
                                </button>
                            </div>)
                        : (<div>
                                <button name="btnEdit" className="btnDownLeft btn btn-success" onClick={() => props.onEdit(props.product)}>
                                    Edit
                                </button>
                                <button name="btnCompare" className="btnDownRight btn btn-warning" onClick={() => props.onCompare(props.product, true)}>
                                    Compare
                                </button>
                            </div>);

    return (
        <div className="boxProductsEntity">
            <div className="boxImg">
                <img src={productImg} alt="no-img-product"/>
                {
                    buttons
                }
            </div>
            <div className="boxDetails">
                <div className="itemDetailsLeft">{props.product.name}</div>
                <div className="itemDetailsRight">${props.product.price}</div>
            </div>
        </div>
    )
};

export default ProductView;