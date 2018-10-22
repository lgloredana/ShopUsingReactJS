import React, { Component } from 'react';


class ItemDetailsEdit extends Component{
    render(){
        const itemName = this.props.itemName;
        const itemPrice = this.props.itemPrice;
        const onChange = this.props.onChange;
        return(
            <div>
                <form>
                    <div>
                        <input className="form-control" type="text" required name="itemName" placeholder="product name" 
                        value={itemName} onChange={onChange}/>
                    </div>
                    <div>
                        <input className="form-control" type="number" required min='0' name="itemPrice" placeholder="product price" 
                         value={itemPrice} onChange={onChange}/>
                    </div>
                </form>
                <br/>
            </div>            
        );
    }
}
export default ItemDetailsEdit