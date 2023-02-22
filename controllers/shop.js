const Product=require('../models/product');
const Cart = require('../models/cart');

exports.getProducts=(req,res,next)=>{
    Product.findAll()
           .then(products=>{
            res.render('shop/product-list', {
                prods:products,                                          // my rows here are the entries in the products table...so products...
                pageTitle:'All Products',
                path:'/products'
            })
          }).catch(err=>{
            console.log(err);
          }); 
    }
 

exports.getProduct = (req,res, next)=>{
    const prodId=req.params.productId;                           
    Product.findByPk(prodId)
    .then(product => {
        res.render('shop/product-detail', {
            product:product, 
            pageTitle:product.title,
             path:'/products',
           });                                       //  {this is key-->product:product-->for retrieving product... this above line variable product }
    })
    .catch(err=>
        console.log(err));
};
  


// using "where" syntax for above code for "findAll" method

// exports.getProduct = (req,res, next)=>{
//     const prodId=req.params.productId; 
//     Product.findAll({where: {id:prodId} })                // can see query   // by default ".findByid({where: {id: prodId}})"--> gives array...findByid--gives multiple items..even array with only one element    
//            .then(products=> {
//             res.render('shop/product-detail', {
//                 product:products[0], 
//                 pageTitle:products[0].title,
//                  path:'/products'
//                });  
//            })
//            .catch(err=> {
//         console.log(err);
//     })                          
// };

exports.getIndex=(req,res,next)=>{
    Product.findAll()
           .then(products=>{
            res.render('shop/index', {
                prods:products,                                          // my rows here are the entries in the products table...so products...
                pageTitle:'Shop',
                path:'/'
            })
          }).catch(err=>{
            console.log(err);
          });
}

exports.getCart=(req,res,next)=>{
    
req.user.getCart()
.then(cart=> {
    return cart.getProducts()                // magic methods by sequelize                 // remember cart is associated to products in our app.js---> "cart.belongsToMany(products"......sequelize will make look into "cartitem"
        .then( products=>{
            res.render('shop/cart',{
                path:'/cart',
                pageTitle:'Your Cart',
                products:products
            })  
        })
    .catch(err=> console.log(err));
})
.catch(err=>{
    console.log(err)
})
 }
    


exports.postCart=(req,res,next)=>{                    
  const prodId= req.body.productId;
  let fetchCart;                                 // to make cart available whole function to access the cart.. 
  let newQuantity=1;                                 // here to add new product to cartitem create
  req.user.getCart()
  .then(cart =>{
  fetchCart=cart;
    return cart.getProducts({where: {id:prodId} });            // i will receive single product here
  })
  .then(products=>{                                         // here i will get array of products
    let product;                           // if no product means it will be undefined
    if(products.length>0){
     product= products[0];                         // checking the product to add only first element 
    }     
     
    if (product){                                   // checking if it is undefined or product is there or not...
                                                          // to add exiting product here same product increase 
     const oldQuantity= product.cartItem.quantity;   // by sequelize we acess the exact table feild we want from cartItems table..so we get quantity feild value..with that product.. 
      newQuantity= oldQuantity + 1;
      return product;
    } 
    return Product.findByPk(prodId)                // find product by searching id in database
    
})
.then(product=>{
    return fetchCart.addProduct(product, {
        through:{quantity: newQuantity}
    })
})
.then(()=>{                                           // to see our cart page
    res.redirect('/cart');
})
.catch(err=>{
    console.log(err);
})
  res.redirect('/cart');
  
} 

exports.postCartDeleteProduct=(req,res,next)=>{
const prodId= req.body.productId;
req.user.getCart()
.then(cart=>{
    return cart.getProducts({where:{id:prodId}})
})
.then(products=>{
    const product= products[0];                   // i want destroy the product but not in the products table (because each products is had many carts) only in between cartitem table that connects my cart with that product...
   return product.cartItem.destroy()                              // .cartItem--> gives using magic field sequelize gives me to access the element in the in-between table and then destroy..
})
.then(result=>{                                   // result of delete operation and render cart page
    res.redirect('/cart') 
   })
.catch(err=> console.log(err));
}


exports.getOrders=(req,res,next)=>{
    res.render('shop/orders',{
        path:'/orders',
        pageTitle:'Your Orders'
    })
}


exports.getCheckout=(req,res,next)=>{
    res.render('shop/checkout',{
        path:'/checkout',
        pageTitle:'Checkout'
    })
}





