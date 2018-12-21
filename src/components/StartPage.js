import React, { Component } from 'react'
import '../css/StartPage.css'
import ProductEdit from "./ProductEdit";
import CompareContainer from "./containers/CompareContainer";
import ProductsContainer from './containers/ProductsContainer'
import AddItemButton from "./AddItemButton";


class StartPage extends Component {
    state = {
        compareProducts:[{name: 'apple', price:23, isCompared: true}, {name: 'onion', price:55, isCompared: true}],
        products:[{name: 'apple', price:23, isCompared: true}, {name: 'pie', price:33, isCompared: false},{name: 'onion', price:55, isCompared: true}, {name: 'eggplant', price:41, isCompared: false}],
        editProductIsOpened: false,
        saveProductIsOpened: false,
        productToEdit: {}
    };

    onEdit(product){
        this.setState({
            editProductIsOpened: true,
            productToEdit: product
        })
    }
    openSaveModal(){
        this.setState({
            saveProductIsOpened:true
        })
    }
    saveProduct(product){
        this.setState((prevState) => ({
                    editProductIsOpened: false,
                    products: prevState.products.map((prod) => {
                        if(prod.name === prevState.productToEdit.name){
                            prod = product;
                        }
                        return prod;
                    }),
                    compareProducts: prevState.compareProducts.map((prod) => {
                        if(prod.name === prevState.productToEdit.name){
                            prod = product;
                        }
                        return prod;
                    })
                }))
    }

    handleChangeList(product, isCompared){
        this.setState((prevState) => ({
            products:prevState.products.map((prod) => {
                    if (prod.name === product.name) prod.isCompared = isCompared;
                    return prod;
                }
            ),
            compareProducts: isCompared ? [...prevState.compareProducts, product] : prevState.compareProducts.filter((prod) => (prod.name !== product.name))
        }));
    }

    addProduct(product){
        debugger;
        this.setState((prevState) => ({
            saveProductIsOpened: false,
            products: [...prevState.products, product]
        }))
    }

    render() {

      return (
        <div className="box">
            <div className="boxHeader"><h1>Compare Products</h1></div>
            <div className="boxAddProducts">
              <AddItemButton
                            openSaveModal={() => this.openSaveModal()}
                            saveProductIsOpened={this.state.saveProductIsOpened}
                             editProductIsOpened={this.state.editProductIsOpened}
                             addProduct={(product) => this.addProduct(product)}/>
            </div>
            <ProductsContainer products={this.state.products}
                               onRemove={(product, isCompared) => this.handleChangeList(product, isCompared)}
                               onCompare={(product, isCompared) => this.handleChangeList(product, isCompared)}
                               onEdit={(product) => this.onEdit(product)} />
            <CompareContainer compareProducts={this.state.compareProducts}/>

            <ProductEdit  title="Edit Product"
                          editProductIsOpened={this.state.editProductIsOpened}
                          product={this.state.productToEdit}
                          buttonName = "Save"
                          onUpdateProduct={(product) => this.saveProduct(product)}/>

        </div>
      )
    }
}

export default StartPage