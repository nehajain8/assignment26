import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddProduct from './AddProduct.js';
import ProductItem from './ProductItem.js';
import ErrorBoundary from './ErrorBoundary'
const products = [

]
localStorage.setItem('products' ,JSON.stringify(products));
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      products:JSON.parse(localStorage.getItem('products'))
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }
  componentWillMount(){
    const products=this.getProducts();
    this.setState({products});
  }
  getProducts() {
    return this.state.products;
  }
  onAdd(name,desc,price,status) {
    const products= this.getProducts();
    products.unshift({
      name,
      desc,
      price,
      status
    });
    this.setState({products});
  }
  onDelete(name){
    const products= this.getProducts();
    const filteredProducts = products.filter(product=>
      {return product.name != name;}
    );
    this.setState({products:filteredProducts});
  }
  render() {
    return (
      <div className="App">
       <h1>Product list</h1>
       <div className="displayProducts">
        <div class="ProductForm">
         <AddProduct onAdd={this.onAdd}></AddProduct>
        </div>
         <div className="ProductList">
          {
            this.state.products.map(product => {
              return (
                <ErrorBoundary>
                  <ProductItem key={product.name} {...product} onDelete={this.onDelete}>
                  </ProductItem>
                </ErrorBoundary>
              );
            })
          }
        </div>
       </div>
      </div>
    );
  }
}

export default App;
