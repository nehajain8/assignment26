import React, { Component } from 'react';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete() {
    const {onDelete, name} = this.props;
    onDelete(name);
  }
  render() {
    const {name, desc,price,status,onDelete} = this.props;
    return(

      <div className="ProductItemContainer" onClick={this.onDelete}>
        <span className="blue">{name}</span>
        <span className="purple">{desc}</span>
        <div className="statusWrapper"><span className="status">Availability? </span><span className="statusValue">{status}</span></div>
        <span className="price">Price: Rs{price}</span>
      </div>

    )
  }
}

export default ProductItem;
