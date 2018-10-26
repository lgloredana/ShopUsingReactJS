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

  searchTerm =  '/';

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

  openModal(e) {
    let str = e.target.value; 
    let [name, price] = str.split(this.searchTerm);
    let product = new Product(name, price);
    this.setState({
      modalIsOpen: true,
      oldName: product.name,
      itemName: product.name,
      itemPrice: product.price
    });
  }

  closeModal() {
    let newProd = new Product(this.state.itemName, this.state.itemPrice)
    let products = this.props.products;
    let compareList = this.props.compareList;
    let oldName = this.state.oldName;

    let nameUnique = products.findIndex((prodItem) => prodItem.name === newProd.name); 
    
    if (nameUnique === -1 && newProd.price > 0 ){

        //update products list which will propagate to it's childrens like ProductItems wich will generate a reset
        let indexP = products.findIndex( (prodItem) => prodItem.name === oldName)
        products[indexP].name = newProd.name;
        products[indexP].price = newProd.price;
        
        //update the compare list, not sure if this is the best approch to generate an update on a sibling, 
        // maybe using an event dispathcher is better.
        let indexC = compareList.findIndex( (compItem) => compItem.name === oldName)
        if (indexC !== - 1) { 
          compareList[indexC].name = newProd.name;
          compareList[indexC].price = newProd.price;
        };

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
    //the value frome the target containes prodoct infos, 
    //if the product haded more infos than another solutin is appropiate like value should have only the product key
    let [name, price] = str.split(this.searchTerm); 
    let product = new Product(name, price);
    //again an update on a sibling, maybe an event sistem is better
    this.props.compareList.push(product); 

    //this is a functin implemented on the parent container
    this.props.propagateProductsChange();
  }

  render() {
    let productsItems = [];
    let products = this.props.products;
    let compareList = this.props.compareList;
    let show= true;
    for(let index=0; index<products.length; index++){
      show = compareList.findIndex((itemC) => itemC.name === products[index].name)  === -1
      productsItems.push(<ProductItem key={products[index].name} 
                              productName={products[index].name} productPrice={products[index].price} 
                              onRemove={this.onRemove}
                              onEdit={this.openModal}
                              onCompare={this.onCompare}
                              showCompareBtn={show}>
                        </ProductItem>);
    };
    
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