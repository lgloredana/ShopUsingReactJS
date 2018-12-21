import React, { Component } from 'react';
import Modal from "react-modal";

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
class ProductEdit extends Component{
    state = {
        product: {}
    };

    updateProduct(event){
        event.preventDefault();
        this.props.onUpdateProduct(this.state.product);
    }
    onChangeName(event){
        event.preventDefault();
        const newName = event.target.value;
        this.setState((prevState) => ({
            product: {...prevState.product, name: newName}
        }))
    }
    onChangePrice(event){
        event.preventDefault();
        const newPrice = event.target.value;
        this.setState((prevState) => ({
            product: {...prevState.product, price: newPrice}
        }))
    }


    // this is a HACK because the edit product view is based on set state from the parent based on 2 props open modal and product
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            product: {
                name: nextProps.product.name,
                price: nextProps.product.price,
                isCompared:nextProps.product.isCompared
            }
        })
    }

    render(){
        const {editProductIsOpened, title, buttonName} = this.props;
        return(
            <div>
                <Modal isOpen={editProductIsOpened} style={customStyles}>
                    <div className='alert alert-primary'>{title}</div>
                    <form onSubmit={(event) => this.updateProduct(event)}>
                        <div>
                            <input key="productName" className="form-control" type="text" required name="itemName" placeholder="product name"
                            value={this.state.product.name} onChange={(event) => this.onChangeName(event)}/>
                        </div>
                        <div>
                            <input key="productPrice" className="form-control" type="number" required min='0' name="itemPrice" placeholder="product price"
                             value={this.state.product.price} onChange={(event) => this.onChangePrice(event)}/>
                        </div>
                        <button className="btn btn-success"> {buttonName} </button>
                    </form>
                    <br/>
                </Modal>
            </div>            
        );
    }
}
export default ProductEdit