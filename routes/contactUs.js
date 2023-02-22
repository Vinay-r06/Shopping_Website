const express= require('express');

const router=express.Router();              //.Router()--> this is a function..


const contactController= require('../controllers/contactus');                     // other way---> import {contactController} from '../controllers/contactus'      --> this is called spreading of object

const path = require ('path');            // core module by nodejs

 
router.get('/contactUs', contactController.getContactUs);                                                                                                                                                            
 
   
    //  ../admin/product => POST request..
router.post('/contactUs', contactController.postContactUs)  

module.exports=router;           // this router object and this routes registered                          // router---.get and .post are 2 object --> this a object which we registered routes..
     