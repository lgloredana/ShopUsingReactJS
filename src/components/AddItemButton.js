import React, { Component } from 'react';
import Modal from 'react-modal';
import ItemDetailsEdit from './ItemDetailsEdit';
import Product from './Product';

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

Modal.setAppElement('#root')
class AddItemButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      itemName: '',
      itemPrice: ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    let newProd = new Product(this.state.itemName,  this.state.itemPrice);
    let products = this.props.products;
    console.log("products.length = " + products.length);
    let nameUnique = true;
    for(let i = 0; i<products.length; i++){
      if(products[i].name === newProd.name){
        nameUnique = false;
      }
    }

    if (nameUnique && newProd.price > 0 ){
      products.push(newProd);
      this.setState(
        {
          modalIsOpen: false,
          itemName: '',
          itemPrice: ''
        });
  
      //send an event to the start page to update the products container
      this.props.onAdd();
    }
    
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
 }

  render() {
    return (
      <div>
        <button onClick={this.openModal} >+ Add Products</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className='alert alert-primary'>Add Product</div>
          <ItemDetailsEdit itemName={this.state.itemName} itemPrice={this.state.itemPrice} onChange={this.handleChange}></ItemDetailsEdit>
          <button className="btn btn-success" onClick={this.closeModal}>Add</button>
        </Modal>
      </div>
    );
  }
}

export default AddItemButton