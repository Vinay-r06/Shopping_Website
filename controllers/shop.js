const Product=require('../models/product');
const Cart = require('../models/cart');

exports.getProducts=(req,res,next)=>{
    Product.fetchAll()
    .then(([rows, fieldData])=>{                              // we can use "nextgen" syntax which is feature called "destructring""
        res.render('shop/product-list',{
            prods:rows,
            pageTitle: 'All Products',
            path:'/products'
        })
    })
        .catch(err=>console.log(err));
    }

   

exports.getProduct = (req,res, next)=>{
    const prodId=req.params.productId;                               //.params--> object by request....,// productId--> because we name it same in "shop.js" routes -->like-->/products/:productId
    Product.findById(prodId)
    .then(([product])=>{
        res.render('shop/product-detail', {
            product:product[0], 
            pageTitle:product.title,
             path:'/products'
           });                                       //  {this is key-->product:product-->for retrieving product... this above line variable product }
    })
    .catch(err=>
        console.log(err));
};
    

exports.getIndex=(req,res,next)=>{
    Product.fetchAll()
    .then(([rows, fieldData])=>{                              // we can use "nextgen" syntax which is feature called "destructring""
    res.render('shop/index', {
        prods:rows,                                          // my rows here are the entries in the products table...so products...
        pageTitle:'Shop',
        path:'/'
    })
    })
    .catch(err=>console.log(err));                // so our data is retrieved from the database...
}

exports.getCart=(req,res,next)=>{
    // Cart.getCart(cart=>{                                // the callback function i just added in the cart model where i will eventually receive the cart.. and i will render my view...
    //     Product.fetchAll(products =>{                  // i will use my product model then to fetch all products..
    //      const cartProducts=[];
    //         for (product of products){
    //        const cartProductData = cart.products.find(prod=>prod.id===product.id);
    //         if(cartProductData){
    //             cartProducts.push({productData: product, qty:cartProductData.qty});
    //         } 
    //     }
    //Cart.getCart()
    //.then(([rows, fieldData])=>{
        res.render('shop/cart',{
            path:'/cart',
            pageTitle:'Your Cart',
           // products:cartProducts
        })
    }
      //)
//   })
// }


exports.postCart=(req,res,next)=>{                    // we want retreive the product ID from the incoming request and then also fetch that product in our database(file)
  const prodId= req.body.productId;                    //  because productId i am using in the product-detail.ejs file in form hidden input name..
Product.findById(prodId, (product)=>{            // product as call back-->to get my product 
    Cart.addProduct(prodId, product.price);
});
  res.redirect('/cart');
  
}

// exports.postCartDeleteProduct=(req,res,next)=>{
// const prodId= req.body.productId;
// Product.findById(prodId, product=>{                          // to receive product price..
// Cart.deleteProduct(prodId, product.price);
// res.redirect('/cart');  
//   })
// }


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