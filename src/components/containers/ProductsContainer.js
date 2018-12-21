import React, { Component } from 'react'
import '../../css/ProductsContainer.css'
import ProductView from "../ProductIView";

const ProductsContainer  = (props) => (
    <div className="boxProductsItems">
        {
            props.products.map( (product) => (
                <ProductView key={product.name}
                             product={product}
                             onRemove={props.onRemove}
                             onEdit={props.onEdit}
                             onCompare={props.onCompare}/>))
        }
    </div>
);

export default ProductsContainer;