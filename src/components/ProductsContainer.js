import React, { Component } from 'react';
import Modal from 'react-modal';
import ProductItem from './ProductItem';
import ItemDetailsEdit from './ItemDetailsEdit';
import Product from './Product';
import './ProductsContainer.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ProductsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen:false,
      itemName:"",
      itemPrice:"",
      oldProdSelectedForEdit:{}
    };
    this.onRemove = this.onRemove.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getProductFromString = this.getProductFromString.bind(this);
    this.onCompare = this.onCompare.bind(this);
  }

  onRemove(e){
    let compareList = this.props.compareList;
    for(let index=0; index<compareList.length; index++){
      if(compareList[index].name === e.target.value){
        this.props.compareList.splice(index,1);
      }
    }
    this.props.propagateProductsChange();
  }

  getProductFromString(str){
    let searchTerm = '/';
    let indexOfFirst = str.indexOf(searchTerm);
    let name = str.substring(0, indexOfFirst);
    let price = str.substring(indexOfFirst+1);

    return new Product(name, price);
  }


  openModal(e) {
    let str = e.target.value; 
    let product = this.getProductFromString(str);
    this.setState({
      modalIsOpen: true,
      oldName: product.name,
      itemName: product.name,
      itemPrice: product.price
    });
  }

  closeModal() {
    let products = this.props.products;
    console.log("-----new value----");
    console.log('name: ' + this.state.itemName);
    console.log('price: ' + this.state.itemPrice);

    let nameUnique = true;
    for(let i = 0; i<products.length; i++){
      if(products[i].name === this.state.itemName){
        nameUnique = false;
      }
    }

    if (nameUnique && this.state.itemPrice > 0 ){
        for(let index=0; index<products.length; index++){
          if(products[index].name === this.state.oldName){
            products[index].name = this.state.itemName;
            products[index].price = this.state.itemPrice;
          }
        }
        this.setState(
          {
            modalIsOpen: false,
            itemName: '',
            itemPrice: ''
          });
        this.props.propagateProductsChange();
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
 }

 onCompare(e){
   let str = e.target.value;
   let product = this.getProductFromString(str);
  this.props.compareList.push(product); 
  this.props.propagateProductsChange();
 }

  render() {
    let productsItems = [];
    let products = this.props.products;

    for(let index=0; index<products.length; index++){
      productsItems.push(<ProductItem key={products[index].name} 
          productName={products[index].name} productPrice={products[index].price} 
          onRemove={this.onRemove}
          onEdit={this.openModal}
          onCompare={this.onCompare}
          ></ProductItem>);
    }
    

    return (
      <div className="boxProductsItems">
        {productsItems}
        <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                >
                <div className='alert alert-primary'>Edit Product</div>
                <ItemDetailsEdit itemName={this.state.itemName} itemPrice={this.state.itemPrice} onChange={this.handleChange}></ItemDetailsEdit>
                <button className="btn btn-success" onClick={this.closeModal}>Save</button>
            </Modal>
      </div>
    );
  }
}

export default ProductsContainer