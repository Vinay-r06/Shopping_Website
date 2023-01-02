const Product=require('../models/product');

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