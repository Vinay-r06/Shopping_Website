const express= require('express');

const router=express.Router();              //.Router()--> this is a function..


const rootDir= require('../util/path');

const path = require ('path');            // core module by nodejs


router.get('/success', (req,res, next)=> {                                             
                                                                                   
    res.sendFile(path.join(rootDir, 'views', 'success.html'));    // inject "rootDir"                                             
   
    });                                                                                                                                                            



    //  ../admin/product => POST request..
router.post('/success', (req, res, next)=>{
  const object=JSON.parse(JSON.stringify(req.body))                     // { title: 'book', size: '3' }                       
  console.log(object);
  res.redirect('/');
})  

module.exports=router;           // this router object and this routes registered                          // router---.get and .post are 2 object --> this a object which we registered routes..
