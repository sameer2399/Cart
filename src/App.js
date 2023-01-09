import React from "react";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar"

class App extends React.Component {
  constructor () {
    super();
    this.state = {
        products : [
            {
                price: 99,
                title: 'watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1515968004492-e6224002d7db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=834&q=80',
                id: 2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
                id: 3
            },
        ]
    }
}
handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    
    products[index].qty += 1;

    this.setState({
        products: products
    })
}

handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    
    if(products[index].qty === 0)
        return;

    products[index].qty -= 1;
    
    this.setState({
        products: products
    })
}

handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    });
}

getCartCount = () => {
  const {products} = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })
  return count;
}

getCartTotal = () => {
  const {products} = this.state;

  let total = 0;

  products.forEach((product) => {
    total += (product.qty * product.price)
  })

  return total;

}
  render (){
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar 
        count={this.getCartCount()}/>
        <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
        <div>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }  
}
  



export default App;
