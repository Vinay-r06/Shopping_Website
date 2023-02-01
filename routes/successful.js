const express= require('express');

const router=express.Router();              //.Router()--> this is a function..

const path = require ('path');            // core module by nodejs

const successController= require('../controllers/successfull');

 
router.get('/success', successController.getSuccess);                                                                                                                                                            


    //  ../admin/product => POST request..
router.post('/success', successController.postSuccess);  

module.exports=router;           // this router object and this routes registered                          // router---.get and .post are 2 object --> this a object which we registered routes..
     