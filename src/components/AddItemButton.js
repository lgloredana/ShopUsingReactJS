import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ItemDetailsEdit from './ItemDetailsEdit';

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

  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      itemName: '',
      itemPrice: '',
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
    console.log("print the name from modal --->" + this.state.itemName);
    console.log("print the price from modal --->" + this.state.itemPrice);
    this.setState({modalIsOpen: false});
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
 }

  render() {
    const { bodyText } = this.state;
    return (
      <div>
        <button onClick={this.openModal} >+ Add Products</button>
        <p>{this.state.itemName}</p>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1>Add Product</h1>
           <ItemDetailsEdit itemName={this.state.itemName} itemPrice={this.state.itemPrice} onChange={this.handleChange}></ItemDetailsEdit>
           <button onClick={this.closeModal}>close</button>
        </Modal>
        <div>{this.itemPrice}</div>
      </div>
    );
  }
}

export default AddItemButton