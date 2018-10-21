import React, { Component } from 'react';

class ItemDetailsEdit extends Component{

    constructor() {
        super();
        this.state = {
            priceText:'dddd'
        }
    }

    render(){
        return(
            <div>
            <form>
                Name<input/>
                Price<input type="number" placeholder={this.priceText} onChange={this.handleChange} /> 
            </form>
            <br/>
            </div>            
        );
    }
}
export default ItemDetailsEdit