// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');

// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.use(errorController.get404);

// app.listen(3000);

 

// warp up

//model:

//responsible for represting u r data..
//responsible for managing u r data( saving, fetching,..)
//does not matter if u manage data in memory , files, databases...
//contains data-related logic...


//view

//what the user sees..
//should not contain too much logic (handlebars)....

//controller

//connects model and view..
//should only make sure that the two can communicate (in both directions)..





//assignment..adding contacs and suuccess MVC pattern...



// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');

// const app = express();

// app.set('view engine', 'ejs'); 
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// const contactRoutes=require('./routes/contactUs');
// const successRoutes=require('./routes/successful');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use('/admin', contactRoutes); 
// app.use('/admin', successRoutes); 

// app.use(errorController.get404);

// app.listen(3000);








// dynamic routes 1 and adv





// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');

// const app = express();

// app.set('view engine', 'ejs'); 
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// const contactRoutes=require('./routes/contactUs');
// const successRoutes=require('./routes/successful');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use('/admin', contactRoutes); 
// app.use('/admin', successRoutes); 

// app.use(errorController.get404);

// app.listen(3000);





//main file-->router-->controller-->views (ejs files) render..







// // dynamic post (1)( part 1) ---> Passing Data with POST Requests




// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');

// const app = express();

// app.set('view engine', 'ejs'); 
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// const contactRoutes=require('./routes/contactUs');
// const successRoutes=require('./routes/successful');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use('/admin', contactRoutes); 
// app.use('/admin', successRoutes); 

// app.use(errorController.get404);

// app.listen(3000);


// //this task changed in product-detil.ejs-...
// // we can pass data in the request body..this is not posible for a "get request"...
// //but for "post request" u use the request body... 


// //output: when add to cart clicked -->product id will create -->0.7507128399867786.(in console vs code)....










// dynamic post (1)( part 2)--> handling cart-->Adding a Cart Model..and edit funtionality....delete funationality...
 


// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
 
// const app = express();

// app.set('view engine', 'ejs'); 
// app.set('views', 'views'); 

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// const contactRoutes=require('./routes/contactUs');
// const successRoutes=require('./routes/successful');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use('/admin', contactRoutes); 
// app.use('/admin', successRoutes); 

// app.use(errorController.get404);

// app.listen(3000);



// changed in this task-->adding "cart" file in models..



//output: when add to cart clicked...data will store in cart.json... price and details....





//summary: 
//         dynamic routing:
// u can pass dynamic path segments by adding a ":" to the express router path.. 
// the name u add after ":" is the name by which u can extract the data on "req.params"....
// optional(query) parameters can also be passed (?param=value&b=2) and extracted (req.query.myParam)...
//



//     more on models:
// a cart model was added- it holds static methods only.. 
// u can interact between models (e.g - delete cart item if a product is deleted)...
// working with files for data storage is suboptimal for bigger amounts od data..
//
//




// sql integrate  (connection our code to the sql database) and retrieving data (vs code terminal)


// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
// const db= require('./util/database');                     // pool that allows to connection in it  

// const app = express();

// app.set('view engine', 'ejs'); 
// app.set('views', 'views'); 

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// db.execute('SELECT * FROM products')         // create table in "node-complete" and name "products"...note: there u can add new "fields"...in "schema"--> u add "fields".. 
// .then(result=>{
//     //console.log(result);
//     console.log(result[0],result[1]);
// })
// .catch(err=>{
//     console.log(err);
// });

// const contactRoutes=require('./routes/contactUs');
// const successRoutes=require('./routes/successful');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use('/admin', contactRoutes); 
// app.use('/admin', successRoutes); 

// app.use(errorController.get404);

// app.listen(3000);

// output: since retrieving data.... the output shown in vs code terminal what we created table and values in sql workbench will recieve here....







// after this  now lets see adjust our models to interact with our database instead of files...

// task --> fetching products and till last sql task (and adding delete functionality in admin )


// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
// const db= require('./util/database');                     // pool that allows to connection in it  

// const app = express();

// app.set('view engine', 'ejs'); 
// app.set('views', 'views'); 

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');



// const contactRoutes=require('./routes/contactUs');
// const successRoutes=require('./routes/successful');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
 
// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use('/admin', contactRoutes); 
// app.use('/admin', successRoutes); 

// app.use(errorController.get404);

// app.listen(3000);


// to perform mysql instead of file storage....
// will remove file related codes to save and retreive from file will remove from projects...
// models-> products.js--> reomove there --"fs" and "file path" and "construct a path"(p) removing  and "getProductsFromFile" which getting from file helper function....
// and removing "save" method-->"getProductsFromFile"
// and removing "delete" method-->delete function static block..
// and removing "fetchAll" method..
// and removing "findById" method..
// now i will not work with callbacks(callback argument)...and work with "promise"...
// fetchall need to reach database-->to do-->import "pool" object from "database.js"





// making sql easy with sequelize(third party package)...



// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
// const db= require('./util/database');                     // pool that allows to connection in it  

// const app = express();

// app.set('view engine', 'ejs'); 
// app.set('views', 'views'); 

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');



// const contactRoutes=require('./routes/contactUs');
// const successRoutes=require('./routes/successful');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
 
// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use('/admin', contactRoutes); 
// app.use('/admin', successRoutes); 

// app.use(errorController.get404);

// app.listen(3000);


// in sequelize we use database but we code we write will be different instead of sql statements = we use a "third party package" that allows us to work with "javascript objects and convient methods to create new elements or  edit in the database..."



// wat is sequelize ?   task 1

// third party package.... an object-relational Mapping library..
// it does heavy lifting and all sql code..
// behind the it will maps it into javascript objects with conivence methods..can call to excute..behind sql code..... no need to write sql code...

// we got "objects- "user" "---this had -- "name", "age", "email", "password"..

// this is "mapped" to a "database table" by "sequelize"..
// automatically creates table , also sets relations and table....
// when we create a new "user"--we simply call method on that user javascript object and sequelize executes sql query.. or sql command..

// so instead of writing this on own ,  we simply create a javascript object and work with that...

// like this...." const user = User.create ({name: 'Max', age: 28, password: 'dsdg312'}) "

// sequelize offers us the models to work with our database...

// core concepts..

// "models"-  eg: User,Product

// Instances--- const user =user.build()          // can instance this models.. can execute the constructor functions or use "utility methods" to create let's say a "new user object" based on that model..

//"queries"--  User.findAll()                    // can run queries using User..

// associations -- User.hasMany(Product)         // can associate with our user model to product model...









// connecting to the database--- task 2 

// install sequelize pacakge in vs code---- run--- "npm install --save sequelize"    // --save -because  this is a production dependency...its "core dependancy" of our project..
// then create model with sequelize
// connect database...
// delete table in mysql workbench..
// open database.js ..in there i want to write some code to connect sequelize to the databse...
// now sequelize uses mysql2 behind..
// in behind will do something like code first written in database.js..but now we delete that code written...
// instaed we import "sequelize"...







// defining model-- task.

// in product.js file -- models floder..
// delete all
// write new code..




// syncing Js definitions to the database...


// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
// const sequelize= require('./util/database');                     // pool that allows to connection in it  

// const app = express();

// app.set('view engine', 'ejs'); 
// app.set('views', 'views'); 

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');



// const contactRoutes=require('./routes/contactUs');
// const successRoutes=require('./routes/successful');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
 
// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use('/admin', contactRoutes); 
// app.use('/admin', successRoutes); 

// app.use(errorController.get404);

// sequelize.sync()                                                  // sync method has look at all the models u defined and...u models in the u r model files by calling sequelize defined on that same sequelize object...
//           .then(result =>{                                                      // it syncs u r models to the database by creating the appropriate tables and if had relations...  
//            //console.log(result);
//            app.listen(3000);
//         })
//         .catch(err=>{
//             console.log(err);  
//         });
           







//  sequelize inserting data and creating product  - task



        // const path = require('path');

        // const express = require('express');
        // const bodyParser = require('body-parser');
        
        // const errorController = require('./controllers/error');
        // const sequelize= require('./util/database');                     // pool that allows to connection in it  
        
        // const app = express();
        
        // app.set('view engine', 'ejs'); 
        // app.set('views', 'views'); 
        
        // const adminRoutes = require('./routes/admin');
        // const shopRoutes = require('./routes/shop');
        
        
        
        // const contactRoutes=require('./routes/contactUs');
        // const successRoutes=require('./routes/successful');
        
        
        // app.use(bodyParser.urlencoded({ extended: false }));
        // app.use(express.static(path.join(__dirname, 'public')));
         
        // app.use('/admin', adminRoutes);
        // app.use(shopRoutes);
        // app.use('/admin', contactRoutes); 
        // app.use('/admin', successRoutes); 
        
        // app.use(errorController.get404);
        
        // sequelize.sync()                                                  // sync method has look at all the models u defined and...u models in the u r model files by calling sequelize defined on that same sequelize object...
        //           .then(result =>{                                                      // it syncs u r models to the database by creating the appropriate tables and if had relations...  
        //            //console.log(result);
        //            app.listen(3000);
        //         })
        //         .catch(err=>{
        //             console.log(err);  
        //         });
                   
     
    // TO INSERT go to "controllers"--then--"admin.js"
    // their "postAddProduct" change the create method--"Product.create"
    // then give "attributes": const "reference"
   // go to add product page type all the product and submit..  
    // then go to mysql and refresh table..
    // the data is inserted     





// With Sequelize v5," findById()" was replaced by "findByPk()".









// retrieving data and finding products...



// const path = require('path');
// const cors = require('cors');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
// const sequelize= require('./util/database');                     // pool that allows to connection in it  

// const app = express();

// app.set('view engine', 'ejs'); 
// app.set('views', 'views');

// app.use(cors()); 

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');



// const contactRoutes=require('./routes/contactUs');
// const successRoutes=require('./routes/successful');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
 
// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use('/admin', contactRoutes); 
// app.use('/admin', successRoutes); 

// app.use(errorController.get404);

// sequelize.sync()                                                  // sync method has look at all the models u defined and...u models in the u r model files by calling sequelize defined on that same sequelize object...
//           .then(result =>{                                                      // it syncs u r models to the database by creating the appropriate tables and if had relations...  
//            //console.log(result);
//            app.listen(3000);
//         })
//         .catch(err=>{
//             console.log(err);  
//         }); 
            

// go to "controllers" there go to--"shop.js"--rewrite "getIndex" code        
// sequelize will not work--"fetchAll()" method...instead we had many types...
//  so use ".findAll()" method-- to access all model file..also give arguments javascript object- like "where"--limiting the data we retrieve..  and then promise...
// without restriction -- we call --"fetchAll()" for all access..and then promise and catch.
// load the local host..click="shop" u will get all the products...       

// now same logic to "getProducts"
// load the local host..click="Products"..u will get the products..





// getting single products when u click on the "details"(in the Products page)....task



// const path = require('path');
// const cors = require('cors');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
// const sequelize= require('./util/database');                     // pool that allows to connection in it  

// const app = express();

// app.set('view engine', 'ejs'); 
// app.set('views', 'views');

// app.use(cors()); 

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');



// const contactRoutes=require('./routes/contactUs');
// const successRoutes=require('./routes/successful');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
 
// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use('/admin', contactRoutes); 
// app.use('/admin', successRoutes); 

// app.use(errorController.get404);

// sequelize.sync()                                                  // sync method has look at all the models u defined and...u models in the u r model files by calling sequelize defined on that same sequelize object...
//           .then(result =>{                                                      // it syncs u r models to the database by creating the appropriate tables and if had relations...  
//            //console.log(result);
//            app.listen(3000);
//         })
//         .catch(err=>{
//             console.log(err);  
//         }); 
           


// go to "controllers" there go to--"shop.js"--rewrite "getProduct" code        
// in sequelize we had ".findById" but the next line we had "array of products"..
// With Sequelize v5," findById()" was replaced by "findByPk()".
// instead i will use single product

// if u get image full window...then check in "views" -- their go to "shop" folder their-- "product-detail.ejs"....their u can find "image class" class wrapper class...
// in css file--there "main.css" file.. write code..image height..

// we can also write for "findAll" method using "where" syntax...









// fetching admin products...task



// const path = require('path');
// const cors = require('cors');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
// const sequelize= require('./util/database');                     // pool that allows to connection in it  

// const app = express();

// app.set('view engine', 'ejs'); 
// app.set('views', 'views');

// app.use(cors()); 

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');



// const contactRoutes=require('./routes/contactUs');
// const successRoutes=require('./routes/successful');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
 
// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use('/admin', contactRoutes); 
// app.use('/admin', successRoutes); 

// app.use(errorController.get404);

// sequelize.sync()                                                  // sync method has look at all the models u defined and...u models in the u r model files by calling sequelize defined on that same sequelize object...
//           .then(result =>{                                                      // it syncs u r models to the database by creating the appropriate tables and if had relations...  
//            //console.log(result);
//            app.listen(3000);
//         })
//         .catch(err=>{
//             console.log(err);  
//         }); 
           


 // when clicking "admin products"..we get  --Product.fetchAll is not a function..
 // so change the code in "getProducts" to sequelize model...remove "fecthAll" and add "findAll"... 






 // updating products---task

// const path = require('path');
// const cors = require('cors');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
// const sequelize= require('./util/database');                     // pool that allows to connection in it  

// const app = express();

// app.set('view engine', 'ejs'); 
// app.set('views', 'views');

// app.use(cors()); 

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');



// const contactRoutes=require('./routes/contactUs');
// const successRoutes=require('./routes/successful');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
 
// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use('/admin', contactRoutes); 
// app.use('/admin', successRoutes); 

// app.use(errorController.get404);

// sequelize.sync()                                                  // sync method has look at all the models u defined and...u models in the u r model files by calling sequelize defined on that same sequelize object...
//           .then(result =>{                                                      // it syncs u r models to the database by creating the appropriate tables and if had relations...  
//            //console.log(result);
//            app.listen(3000);
//         })
//         .catch(err=>{
//             console.log(err);  
//         }); 
           


// in "controllers" their--"admin.js"---their--"getEditProduct" write code for sequelize..
// after write code for seuelize in  "getEditProduct" and click and load on "admin products "
// after for submit we should do sequelize for "postEditProduct"-- we should write "postEditProduct"....





// deleting products--task


const path = require('path');
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize= require('./util/database');                     // pool that allows to connection in it  

const app = express();

app.set('view engine', 'ejs'); 
app.set('views', 'views');

app.use(cors()); 

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



const contactRoutes=require('./routes/contactUs');
const successRoutes=require('./routes/successful');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
 
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/admin', contactRoutes); 
app.use('/admin', successRoutes); 

app.use(errorController.get404);

sequelize.sync()                                                  // sync method has look at all the models u defined and...u models in the u r model files by calling sequelize defined on that same sequelize object...
          .then(result =>{                                                      // it syncs u r models to the database by creating the appropriate tables and if had relations...  
           //console.log(result);
           app.listen(3000);
        })
        .catch(err=>{
            console.log(err);  
        }); 
           


//in "controllers" their--"admin.js"---their--"postDeleteProduct" write code for sequelize..
// in sequelize we dont had "deleteById" method...soo  ".destroy{where:{}}"
// or we can do using "findAll()"  







// creating a user model--task



// const path = require('path');
// const cors = require('cors');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
// const sequelize= require('./util/database');                     // pool that allows to connection in it  

// const app = express();

// app.set('view engine', 'ejs'); 
// app.set('views', 'views');

// app.use(cors()); 

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');



// const contactRoutes=require('./routes/contactUs');
// const successRoutes=require('./routes/successful');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
 
// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use('/admin', contactRoutes); 
// app.use('/admin', successRoutes); 

// app.use(errorController.get404);

// sequelize.sync()                                                  // sync method has look at all the models u defined and...u models in the u r model files by calling sequelize defined on that same sequelize object...
//           .then(result =>{                                                      // it syncs u r models to the database by creating the appropriate tables and if had relations...  
//            //console.log(result);
//            app.listen(3000);
//         })
//         .catch(err=>{
//             console.log(err);  
//         }); 
           


// 
// 
