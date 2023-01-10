const Product=require('../models/product');
const Cart = require('../models/cart');

exports.getProducts=(req,res,next)=>{
    Product.fetchAll(products=>{
        res.render('shop/product-list',{
            prods:products,
            pageTitle: 'All Products',
            path:'/products'
        })
    })
}


exports.getProduct = (req,res, next)=>{
    const prodId=req.params.productId;        //.params--> object by request....,// productId--> because we name it same in "shop.js" routes -->like-->/products/:productId
    Product.findById(prodId, product =>{                      // async function we have to pass in a callback ..cant console.log
   // console.log(product);
   res.render('shop/product-detail', {product:product, 
    pageTitle:product.title,
     path:'/products'})            //  {this is key-->product:product-->for retrieving product... this above line variable product }
    });
  //  res.redirect('/');
}

exports.getIndex=(req,res,next)=>{
    Product.fetchAll(products =>{
    res.render('shop/index',{
        prods:products,
        pageTitle:'Shop',
        path:'/'
    })
    })
}

exports.getCart=(req,res,next)=>{
    res.render('shop/cart',{
        path:'/cart',
        pageTitle:'Your Cart'
    })
}


exports.postCart=(req,res,next)=>{                    // we want retreive the product ID from the incoming request and then also fetch that product in our database(file)
  const prodId= req.body.productId;                    //  because productId i am using in the product-detail.ejs file in form hidden input name..
Product.findById(prodId, (product)=>{            // product as call back-->to get my product 
    Cart.addProduct(prodId, product.price);
});
  res.redirect('/cart');
  
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