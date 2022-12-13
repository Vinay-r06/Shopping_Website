// const express= require('express');

// const router=express.Router();              //.Router()--> this is a function..

// const path = require ('path');            // core module by nodejs

// // ../admin/add-product => GET request..
// router.get('/add-product', (req,res, next)=> {                                             
                                                                                   
//     res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));                                                 
   
//     });                                                                                                                                                            



//     //  ../admin/product => POST request..
// router.post('/add-product', (req, res, next)=>{
//   const object=JSON.parse(JSON.stringify(req.body))                     // { title: 'book', size: '3' }                       
//   console.log(object);
//   res.redirect('/');
// })  

// module.exports=router;           // this router object and this routes registered                          // router---.get and .post are 2 object --> this a object which we registered routes..



// now run using -->(..) instead of (../)

//output: u will get content...





// now we can also access using parent directory                    ----> for this type access should create-->" path.js file"



// const express= require('express');

// const router=express.Router();              //.Router()--> this is a function..


// const rootDir= require('../util/path');

// const path = require ('path');            // core module by nodejs

// // ../admin/add-product => GET request..
// router.get('/add-product', (req,res, next)=> {                                             
                                                                                   
//     res.sendFile(path.join(rootDir, 'views', 'add-product.html'));    // inject "rootDir"                                             
   
//     });                                                                                                                                                            



//     //  ../admin/product => POST request..
// router.post('/add-product', (req, res, next)=>{
//   const object=JSON.parse(JSON.stringify(req.body))                     // { title: 'book', size: '3' }                       
//   console.log(object);
//   res.redirect('/');
// })  

// module.exports=router;           // this router object and this routes registered                          // router---.get and .post are 2 object --> this a object which we registered routes..







// styling our pages..





const express= require('express');

const router=express.Router();              //.Router()--> this is a function..


const rootDir= require('../util/path');

const path = require ('path');            // core module by nodejs

// ../admin/add-product => GET request..
router.get('/add-product', (req,res, next)=> {                                             
                                                                                   
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));    // inject "rootDir"                                             
   
    });                                                                                                                                                            



    //  ../admin/product => POST request..
router.post('/add-product', (req, res, next)=>{
  const object=JSON.parse(JSON.stringify(req.body))                     // { title: 'book', size: '3' }                       
  console.log(object);
  res.redirect('/');
})  

module.exports=router;           // this router object and this routes registered                          // router---.get and .post are 2 object --> this a object which we registered routes..
