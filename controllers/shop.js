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
        res.render('shop/cart',{
            path:'/cart',
            pageTitle:'Your Cart',
           
        })
    }
    


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