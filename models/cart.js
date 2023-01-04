const fs= require('fs');                                       // so lets start with adding the logic for fetching a cart from a database(file)...so import file system...
const path = require('path');            // path helper to construct good path..


const p= path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');   // cart.json--> there  we will store an object that represents our cart...
 
module.exports= class Cart {

static addProduct(id, productPrice) {                             // id as argument

    // approaches
    // 1st--> fetch the previous cart..
    // 2nd --> analyse the cart=> find existing product..
    // 3rd--> add new product / increase quality...


// 1st
    fs.readFile(p, (err, fileContent)=>{
        let cart= { products: [], totalPrice: 0 };
        if(!err){
            cart=JSON.parse(fileContent);
        }
        // 2nd and 3rd
        const existingProductIndex =cart.products.findIndex(prod=>prod.id === id);   // if find same then stored in exitingProduct
        const existingProduct = cart.products[existingProductIndex] ;                     // this allows me to use that index to replace the item in our cart products here..                                                                 // if i got exiting product.. dont want add new product...instead i want to replace the old one and to do that...i need to find out where in my old products this exiting product was located..so which position it had..to do this i will get index (array concept)
       
        let updatedProduct;
        if (existingProduct) {
            updatedProduct= {...existingProduct};                       // using nextGeneration js with the object spread operator..i will take all the properties of the exiting product..and add them to a new js object and then on that updated product... 
            updatedProduct.qty= updatedProduct.qty + 1;
            cart.products = [...cart.products];                        // coping the old array 
            cart.products[existingProductIndex] = updatedProduct;                      ;                  // i will not update products..instead i will set cart products and over write existing product index..so at this position i will replace the element with my updated product..... 

        } else {
            updatedProduct = { id: id, qty: 1 };                      // id as argument                             // a new js object where i add information for that product and that will be my ID 
            cart.products = [...cart.products, updatedProduct]      // using nextGen js feauture by spreading the exiting products of the cart.....so this will now be an array with all the old cart products..    // updating if product is new in cart
        }
          cart.totalPrice= cart.totalPrice + +productPrice;          // updating price..... +--> to convert that string to number
          fs.writeFile(p, JSON.stringify(cart), err => {             // writing in file of my cart..
            console.log(err);
          })
    });
                                                                 // save the cart back to our file
}
}


// we want group products by id
// to add more product --using constructor-->which allows to create a new cart---but the problem is cart itself is not really an object we will  constantly recreate...not for every new product that we add we want to have a new cart....instead there is always cart in our application ...just want to manage the products in there....
//so used "static method" 