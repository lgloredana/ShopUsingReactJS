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
      bodyTet:'This text can be updated in modal 1'
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
          <h1>Add Product</h1>
         
           <ItemDetailsEdit></ItemDetailsEdit>
        
          <button onClick={this.closeModal}>close</button>
         
        </Modal>
      </div>
    );
  }
}

export default AddItemButton