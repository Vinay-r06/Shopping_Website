
//  creating HTML pages

//views-->bunch of html file



// serving html pages..

// const express = require('express');
// const bodyParser = require('body-parser');               

// const app = express(); 

// const  adminRoutes=require('./routesHtmlCss/adminHtmlCss')                   // using a relative path to the routes folder...

// const shopRoutes=require('./routesHtmlCss/shopHtmlCss')                      // import of shop js for front face router access


// app.use(bodyParser.urlencoded({extended:false}));                              
                                                                                                                                                   
 
// app.use('/admin', adminRoutes);                                                                                // registering   1st      // this is a middleware of 2 routes we are importing                // not like function->adminRoutes() without parenthisis...but just object--->"adminRoutes"
// app.use(shopRoutes);                                                                             //registering 2nd 
                 
// app.use((req,res,next)=>{                              // this will handle error middleware                // by default it will be '/'--> no need to put...
//   res.status(404).send('<h1>Page not found</h1>');                                  // .status(404)-->method given by express 
// });



// app.listen(3000);



//output: run--> localhost:3000/---> will come contents
   //     run-->localhost:3000/admin/add-product----> will come content






   //returning a 404 page...


  // add 404.html in views floder....and return html file..--> so add file path in main file-->backNodeBasis.js..




//  const path=require('path');

// const express = require('express');
// const bodyParser = require('body-parser');               

// const app = express(); 

// const  adminRoutes=require('./routesHtmlCss/adminHtmlCss')                   // using a relative path to the routes folder...

// const shopRoutes=require('./routesHtmlCss/shopHtmlCss')                      // import of shop js for front face router access


// app.use(bodyParser.urlencoded({extended:false}));                              
                                                                                                                                                   
 
// app.use('/admin', adminRoutes);                                                                                // registering   1st      // this is a middleware of 2 routes we are importing                // not like function->adminRoutes() without parenthisis...but just object--->"adminRoutes"
// app.use(shopRoutes);                                                                             //registering 2nd 
                 
// app.use((req,res,next)=>{                                                 // this will handle error middleware                // by default it will be '/'--> no need to put...
//   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));     // we dont need to put(../)--> because we already are in the root folder...                                // .status(404)-->method given by express 
// });



// app.listen(3000);



//output: run random url-->http://localhost:3000/admin/add-productdkdkk
 // will display -->Page Not Found!





 // deprecation warning --->use--->"module.exports = path.dirname(require.main.filename);"





 //using a helper function for navigation..


// use--->"(..)"...instead(../)
// in "adminHtmlCss.js"  and "shopHtmlCss.js"


//output: it will run---> http://localhost:3000/admin/add-product
// it will work and showed contect...and we can also it with the help og parent directory..





//we can get parent directory with the help of helper function...       this method will work all os..

//create folder as "util" ---> then inside this create ---> "path.js" and also import this in adminhtmlcss and shophtmlcss 



// const path=require('path');

// const express = require('express');
// const bodyParser = require('body-parser');               

// const app = express(); 

// const  adminRoutes=require('./routesHtmlCss/adminHtmlCss')                   // using a relative path to the routes folder...

// const shopRoutes=require('./routesHtmlCss/shopHtmlCss')                      // import of shop js for front face router access


// app.use(bodyParser.urlencoded({extended:false}));                              
                                                                                                                                                   
 
// app.use('/admin', adminRoutes);                                                                                // registering   1st      // this is a middleware of 2 routes we are importing                // not like function->adminRoutes() without parenthisis...but just object--->"adminRoutes"
// app.use(shopRoutes);                                                                             //registering 2nd 
                 
// app.use((req,res,next)=>{                                                 // this will handle error middleware                // by default it will be '/'--> no need to put...
//   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));     // we dont need to put(../)--> because we already are in the root folder...                                // .status(404)-->method given by express 
// });



// app.listen(3000);


// output: run -->http://localhost:3000/----> it will content 






//styling our pages....

  
// const path=require('path');

// const express = require('express');
// const bodyParser = require('body-parser');               

// const app = express(); 

// const  adminRoutes=require('./routesHtmlCss/adminHtmlCss')                   // using a relative path to the routes folder...

// const shopRoutes=require('./routesHtmlCss/shopHtmlCss')                      // import of shop js for front face router access


// app.use(bodyParser.urlencoded({extended:false}));                              
                                                                                                                                                   
 
// app.use('/admin', adminRoutes);                                                                                // registering   1st      // this is a middleware of 2 routes we are importing                // not like function->adminRoutes() without parenthisis...but just object--->"adminRoutes"
// app.use(shopRoutes);                                                                             //registering 2nd 
                 
// app.use((req,res,next)=>{                                                 // this will handle error middleware                // by default it will be '/'--> no need to put...
//   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));     // we dont need to put(../)--> because we already are in the root folder...                                // .status(404)-->method given by express 
// });



// app.listen(3000);



//output:run-->http://localhost:3000/---> content will come--->click on add product -->type "book"---> and click "add product" button.
//            in vs terminal ---> { title: 'book' }--> will come...





// serving files statically..

                            
                                             // we need a feauture expressjs -->need to be able to serve files statically-->statically means--> not handled by the express router or other middleware --> "it directly forwarded to the file system"
                                             



                                              


                                              //this is handled by the static middleware..forward the request the public folder..

// const path=require('path');

// const express = require('express');
// const bodyParser = require('body-parser');               
                                              
// const app = express(); 
                                              
// const  adminRoutes=require('./routesHtmlCss/adminHtmlCss')                   // using a relative path to the routes folder...
                                              
//  const shopRoutes=require('./routesHtmlCss/shopHtmlCss')                      // import of shop js for front face router access
                                              
 
// app.use(bodyParser.urlencoded({extended:false}));  
                         
// app.use(express.static(path.join(__dirname, 'public')));                                              // register new middleware -->app.use-->this will ship by "expressjs"...this does had static method and ".static"---> is built in middleware---> it serves "static files."......//only read access                                                                                                                                                          
                                               
//  app.use('/admin', adminRoutes);                                                                                // registering   1st      // this is a middleware of 2 routes we are importing                // not like function->adminRoutes() without parenthisis...but just object--->"adminRoutes"
// app.use(shopRoutes);                                                                             //registering 2nd 
                                                               
// app.use((req,res,next)=>{                                                     // this will handle error middleware                // by default it will be '/'--> no need to put...
//  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));         // we dont need to put(../)--> because we already are in the root folder...                                // .status(404)-->method given by express 
//  });
                                              
                                              
                                              
//  app.listen(3000);                                              




                                             // create "public" floder--->inside "css" floder--->inside "main.css" floder stylesheet..
                                             // shop.html-->copy of style code into this folder "main.css" and in "shop.html"--> add "link rel=stylesheet"...
                                             // construct path for serve static files-->    "express.static(path.join(__dirname, 'public'))""
                                              // add "link rel=stylesheet"-->in "add-product.html"..remove css code in .html...and do same in 404.html...



//output: :run-->http://localhost:3000/---> content will come--->click on add product -->type "book"---> and click "add product" button.
//            in vs terminal ---> { title: 'book' }--> will come...
// here we  access css file in separete folder..








 // summary  

 // what is expressjs?

 // expressjs is nodejs framework--> a package that adds a bunch of utility functions and tools and a clear set of rules on how the app should be built (middleware)..
 // its highly extensible and other packages can be plugged into it (middleware)..  


 //middleware, next() and res()

 //express.js relies heavily on middleware functions--u can easily add them by calling use()...
 //middleware functions handle a request and should call next() to forward the request to the next function in line or send a response..
 

 //routing 

 // u can filter requests by path and method..
 //if u filter by method, paths are matched exactly, otherwise the first segment of a URL is matched.
 //u can use the express.Router() to split u r routes across files elegantly...


 // Serve files 

 // can serving dummy text as a response..
 // u can sendFile()s to u r users-- eg: HTML files..
 //if a request is directly made for a file (eg: a  ".css" files is registed) u can enable static serving for such files via express.static()..
 



 // assignment


 const path=require('path');

 const express = require('express');
 const bodyParser = require('body-parser');               
                                               
 const app = express(); 
                                               
 const  adminRoutes=require('./routesHtmlCss/adminHtmlCss')                   // using a relative path to the routes folder...
                                               
const shopRoutes=require('./routesHtmlCss/shopHtmlCss')                      // import of shop js for front face router access
                                               
const contactRoutes=require('./routesHtmlCss/contactUs'); 

const successRoutes=require('./routesHtmlCss/successful');

 app.use(bodyParser.urlencoded({extended:false}));  
                          
 app.use(express.static(path.join(__dirname, 'public')));                                              // register new middleware -->app.use-->this will ship by "expressjs"...this does had static method and ".static"---> is built in middleware---> it serves "static files."......//only read access                                                                                                                                                          
                                                
  app.use('/admin', adminRoutes);                                                                                // registering   1st      // this is a middleware of 2 routes we are importing                // not like function->adminRoutes() without parenthisis...but just object--->"adminRoutes"
 app.use(shopRoutes); 
 app.use('/admin', contactRoutes); 
 app.use('/admin', successRoutes);                                                                            //registering 2nd 
                                                                
 app.use((req,res,next)=>{                                                     // this will handle error middleware                // by default it will be '/'--> no need to put...
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));         // we dont need to put(../)--> because we already are in the root folder...                                // .status(404)-->method given by express 
  });
                                               
                                               
                                               
  app.listen(3000);                                              
 



//output: { title: 'book' }                        ---> when clicked "add product" type and submit u will get output in vs terminal..
//        { Name: 'vinay', emailId: 'vinay@gmail' }    --->click on "contact-us" type and submit u will get output in vs terminal... 
 
