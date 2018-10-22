import React, { Component } from 'react';
// import '../../node_modules/bootsrap/dist/css/bootsrap.css';

class ItemDetailsEdit extends Component{
    render(){
        const itemName = this.props.itemName;
        const itemPrice = this.props.itemPrice;
        const onChange = this.props.onChange;
        return(
            <div>
                <form>
                    <div>
                        name
                        <input type="text" required name="itemName" placeholder="product name" 
                        value={itemName} onChange={onChange}/>
                    </div>
                    <div>
                        price
                        <input type="number" required min='0' name="itemPrice" placeholder="product price" 
                         value={itemPrice} onChange={onChange}/>
                    </div>
                </form>
                <br/>
            </div>            
        );
    }
}
export default ItemDetailsEdit