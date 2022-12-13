// const path= require('path')      //construct path...
// const express= require('express');

// const router=express.Router();              //.Router()--> this is a function..


// router.get('/', (req,res, next)=> {                                       
                                                                                    
//    // res.sendFile('./views/shop.html');              // abslout path ('/')--> from root floder.../-->refer to root floder of operating system...not to this project folder..                                
   
//    res.sendFile(path.join(__dirname, '../', 'views','shop.html'));  //  (../)--> up one level               // __dirname-->global variable provided by nodejs--->this simply holds the absolute path on our os to this project folder
//     });                                                   // (path to this whole project, view floder, our file)
         

// module.exports=router;    






// now we can also access using parent directory                       ----> for this type access should create-->" path.js file"



const path= require('path')      //construct path...

const express= require('express');

const rootDir=require('../util/path')
const router=express.Router();              //.Router()--> this is a function..


router.get('/', (req,res, next)=> {                                       
                                                                                    
   // res.sendFile('./views/shop.html');              // abslout path ('/')--> from root floder.../-->refer to root floder of operating system...not to this project folder..                                
   
   res.sendFile(path.join(rootDir, 'views','shop.html'));  //  (../)--> up one level               // __dirname-->global variable provided by nodejs--->this simply holds the absolute path on our os to this project folder
    });                                                   // (path to this whole project, view floder, our file)
         

module.exports=router;    

