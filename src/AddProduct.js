import React, { Component } from 'react';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: (!!this.props.complete) || false
    };
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  onSubmit(event) {
    event.preventDefault();
    const convertedStatus= this.state.complete.toString();
    this.props.onAdd(this.pname.value,this.pdesc.value,this.pprice.value,convertedStatus);
  }
  onChangeCheckbox(event){
    const newState=!this.state.complete;
    this.setState({
      complete: newState
    });
    console.log(this.state.complete);
  }
  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Name</label>
          <input type="text" ref={pname => this.pname = pname} required/>
          <label>Description</label>
          <input type="text" ref={pdesc => this.pdesc = pdesc} required/>
          <label>Price</label>
          <input type="number" ref={pprice => this.pprice = pprice} required/>
          <div className="wrapper">
          <input type="checkbox"  onChange={this.onChangeCheckbox}  defaultChecked={this.state.complete} ref="complete" />
          <label>Availability</label>
          </div>
          <button>Save</button>
        </form>
      </div>
    )
  }
}

export default AddProduct;
