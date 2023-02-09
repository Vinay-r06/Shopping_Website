const Product= require('../models/product');
   
exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing:false                                    // u will get error if u didnt use this line..because in edit-product.ejs used "editing variable"....
  });
};
 
 
exports.postAddProduct = (req, res, next) => {
  const title=req.body.title;
  const imageUrl= req.body.imageUrl;
  const price=req.body.price;
  const description=req.body.description;
  Product.create({                                           //.create will store database imeddiate
   title:title,
   price:price,
   imageUrl:imageUrl,
   description:description
  }).then(result=>{
    //console.log(result);
    console.log('Created Product')
    res.redirect('/admin/products');
  })                                                            // sequelize works with promises...
     .catch(err=>{
     console.log(err);
}); 
};

exports.getEditProduct = (req, res, next) => {
  const editMode=req.query.edit;                   //checking here
  if(!editMode) {
    return res.redirect('/');
  }
  const prodId =req.params.productId;              //can access req.params.productId--and get that ID from the URL..
  Product.findByPk(prodId) 
    .then(product=>{
      if(!product){
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,                                 // now we can only have editmode only this set..
        product: product               // name it watever u want "key"-->product: product-->callback which  received....
      });  
    })
    .catch(err=>{
      console.log(err);
    })                             //  1st use my product model and the productID and then have my callback "product" which is received
  }


exports.postEditProduct = (req, res, next) => {     // after editing we should save and save method is in "product.js" in models.. we should tell that only update new one by comparing "id" before save...
                                                    // here will do 2 things --1st --i need fetch information for the product...2nd--i need to create a new product instance and populate it with that information and then i need to call save... 
const prodId=req.body.productId;                           // in the view file the edit product file...the edit ejs "name" given "productId"..soo using here
const updatedTitle=req.body.title;                                                                // when edit ..all the value is sent to me...so i will store all values in variable..
const updatedPrice= req.body.price;
const updatedImageUrl=req.body.imageUrl;
const updatedDesc= req.body.description;
Product.findByPk(prodId)                    // for sequelize we should first search the id of the product in database..
      .then(product=>{                      //please note this will not directly change the data in the database though, it will only do it locally in  our app, in our javascript app here for the moment.
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.imageUrl = updatedImageUrl;
      product.description = updatedDesc;
      return product.save();                                // we do ".then" it will becomes ugly becomes nested promises..so i will "return"   // it will create new one if doest not had .. if it exit then overwrite and updated ..      // we know it will not save in database so do that we will do "product.save()"
      })                                                     // ".save()"-->another method to by sequelize
      .then(result=>{
        console.log('UPDATED PRODUCT!');
        res.redirect('/admin/products');                 // since this promise it is async operation it will registered and excuted later since we are redirecting after excuetion og async operation...u will get once page loaded..if it had err u want reload page because err code is outside the async..
      })                                                // since we are return the ".save"..we use that here ...
      .catch(err=>{                                          // this catch block gives err for both promises 
        console.log(err); 
      })
};

exports.getProducts = (req, res, next) => {
Product.findAll()                                       // in sequelize we are not using callback we use promise
.then(products=>{
  res.render('admin/products', {
    prods: products,
    pageTitle: 'Admin Products',
    path: '/admin/products',
  });
})
.catch(err=> console.log(err));
};  

exports.postDeleteProduct = (req, res, next) => {
const prodId= req.body.productId;
Product.findByPk(prodId)
       .then(product=>{
      return product.destroy();
})
     .then(result => {                      // once destroy succeded 
     console.log('DESTROYED PRODUCT');
     res.redirect('/admin/products');
     })                                
     .catch(err=> console.log(err));
}




//vt:124
// query parameter can be added to any URL by adding a "?" and then a key-value pair separated by equal sign and for multiple query parameter separated by "&" ..---->/edit-product/12345?edit=true&title=new
// routes will not affted because routes end till "?"...
// always check for query parameter in controllers..
// ".query" is object, created and managed by expressjs..
// u cna access data using key u given in url...
// the extracted value always is a "string"..so "true" instead of true..
// if u dont find it it will be "undefined" or "false"...like "boolean check"
// /12345--->dynamic segment set....to know productid see in "data" floder...."cart.json" and "products.json"
//? --> query parameter ...



//vt:125
// to pre populate this form with the product..we fetch the product ...
//need product model and product ID ....prod ID can be retrieved from incoming request ...
// if check the routes we had dynamic segment ...so by this name we can extract the product id..-->(/edit=product/:productID)