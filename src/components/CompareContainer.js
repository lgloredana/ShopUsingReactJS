import React, { Component } from 'react';

class CompareContainer extends Component {

  render() {
    let compareList = this.props.compareList;
    let prodNameColls = [];
    let prodPriceColls = [];
    for(let index=0; index<compareList.length; index++){
      prodNameColls.push(<div className="col" key={compareList[index].name}>{compareList[index].name}</div>);
      prodPriceColls.push(<div className="col" key={compareList[index].name}>{compareList[index].price}</div>);
    }

    return (
        <div>
            <div>Table with the comparison</div>
            <div className="row">
                <div className="col"></div>
                {prodNameColls}
            </div>
            <div className="row">
                <div className="col">Price</div>
                {prodPriceColls}
            </div>
        </div>
    );
  }
}

export default CompareContainer