import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar"

import firebase from "firebase/compat/app";


class App extends React.Component {
  constructor () {
    super();
    this.state = {
        products : [],
        loading: true

    }
    this.db = firebase.firestore();
}

componentDidMount() {
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot) => {
  //     console.log(snapshot);

  //     snapshot.docs.map((doc) => {
  //       console.log(doc.data());
  //     });

  //     const products = snapshot.docs.map((doc) => {

  //       const data = doc.data();
  //       data['id'] = doc.id;

  //       return data;
  //     });

  //     this.setState({
  //       products,
  //       loading: false
  //     })
  //   })

    this.db
    .collection('products')
    // .where('price', '>=', 9000 )
    .orderBy('price', 'desc')
    .onSnapshot((snapshot) => {
      console.log(snapshot);

      snapshot.docs.map((doc) => {
        console.log(doc.data());
      });

      const products = snapshot.docs.map((doc) => {

        const data = doc.data();
        data['id'] = doc.id;

        return data;
      });

      this.setState({
        products,
        loading: false
      })
    })
}

// addProduct = () => {
//   this.db
//   .collection('products')
//   .add({
//     img: '',
//     price: '999',
//     qty: 3,
//     title: 'washing machine'
//   })
//   .then((docRef) => {
//     console.log("product added succesfully", docRef)
//   })
//   .catch((error) => {
//     console.log("error", error);
//   })
// }

handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty: products[index].qty + 1
    })
    .then(() => {
      console.log("document updated successfully")
    })
    .catch((error) => {
      console.log("error",error);
    })
    // products[index].qty += 1;

    // this.setState({
    //     products: products
    // })
}

handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    
   const docRef = this.db.collection('products').doc(products[index].id);

   docRef
   .update({
    qty: products[index].qty - 1
   })
   .then(() => {
    console.log("updated successfully")
   })
   .catch((error) => {
    console.log("error", error);
   })
}

handleDeleteProduct = (id) => {
    // const { products } = this.state;
    
    const docRef = this.db.collection('products').doc(id);

    docRef
    .delete()
    .then(() => {
      console.log("deleted successfully");
    })
    .catch((error) => {
      console.log("error", error);
    })
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
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar 
        count={this.getCartCount()}/>

        {/* <button onClick={this.addProduct} style={{padding: 20, fontsize: 20}}>Add Product</button>       */}
        <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products ...</h1>}
        <div style={{padding: 10, fontsize: 20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }  
}
  



export default App;
