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
           


//in "controllers" their--"admin.js"---their--"postDeleteProduct" write code for sequelize..
// in sequelize we dont had "deleteById" method...soo  ".destroy{where:{}}"
// or we can do using "findAll()"  






// Design the User and Product relationship--task sharp


// creating a user model----task ude


// const path = require('path');
// const cors = require('cors');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
// const sequelize= require('./util/database');                     // pool that allows to connection in it  

// const Product = require('./models/product');           //  Product model
// const User = require('./models/user');          //  user model

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

//  Product.belongsTo(User, {constraints:true, onDelete: 'CASCADE'});               
//                                                                                    // this line is relation setup // cascade means any related that product price like that will be deleted..          // this user "created product" not purchased   and 2nd argument u can config and how the realationship to manage                           // assciations(relation)-->"belongTo"      // i will relate the imported models here
//  User.hasMany(Product);

// sequelize.sync({force: true})                                              // will not seeting in production..i will do in development because i want reflect change..so i will set true..         //sequelize.sync will not just create table for our model. but also define the relations in our database has defined above...                             // sync method has look at all the models u defined and...u models in the u r model files by calling sequelize defined on that same sequelize object...
//           .then(result =>{                                                      // it syncs u r models to the database by creating the appropriate tables and if had relations...  
//            //console.log(result);
//            app.listen(3000);
//         })
//         .catch(err=>{
//             console.log(err);  
//         }); 
           


// create "user.js" in "models"      (now real authentication, now will use dummy user )
// write code in "user.js"







// adding a one-to-many relationship (adding association)----task udem




// associations(relation)

// in project we had ---" product, user, cart, order"...--> to connect all this..

// product has many carts (users)---
//                                 product--"belongs to many"-->cart..

// we had multiple "users" multiple "carts"...product can be many carts...because same product to thier carts..

// each "user" has one "cart"---
//                              "product"----"belongs to many"-->"cart"<---has one----"user"

// "product" has multiple order...and "user" has multiple order---

//                                "product"----"belongs to many"-->"Cart"<---has one----"user"
//                                "product"----"belongs to many"-->"Order"<---has many----"user"

// "user" can has multiple "product"---
//                                     "product"<----"has Many"----"user"

// this is the rough we can communicate or relate different models..
// this will also reflect in sequelize..

// in app.js--> before "sync" all my data in database...i will define my models..
// for this i will add more imports and 
// i will import my "product model" and "user model"


// before sequelize sync we adding ("Product".belongsto"user")-- which we imported product and user in app.js..

// Product.belongsTo(User)--->user created this product..not purchase...
// second argument as optional-- can define how this relationship be managed...

//  onDelete: 'CASCADE'---> if user is deleted all the conntected to the product will be deleted related to user like price like that etc...

// User.hasMany(Product);---> inverse of "belongsTo"..
// will show both relations.. 

// sequelize sync will not just create tables for our models but also define the relations in our database as we define them...
// products table already created so not override with new info--so--> "force:true"

// in production we not use --"force:true"...because dont want always overrirde u rtables all the time..

// but here during development i want see new changes..so set --> "true"..

// and relate them with
// after excute u can see in terminal-- it will drop user and product table if had ...and then create the user and product table...and also in product table there is  "userid" field which s integer and which is "foreign key" that reference the ID feild in the "users" table..that delete will cascade..and update is default..

// in mysql will see the two table -->"products" and "users"
// check "products"-- there is no product it is gone... because it is "recreated the table"..

// "createdAt" and "updatedAt" and "userId" is added by sequelize..
// this userid is added by sequelize and automatically populated by sequelize once we created products that are related to a user...
// in "users" table will empty and we can connect "users" and "products" in our app.








// creating and managing a dummy User----task udem...




// i need user..for now without authetication process..
// create user manually..
// i will remove--> {force:true}---> because i dont always want to overwrite my tables...otherwise all products will gone all..
// create "user" in .then()
// check findByPk() to find user with ID one if had not create..if not create one..


//next step is i will register a new middleware..because i want to store that user in my request...so i can use it anywhere in app..
// incoming request only for middleware......"npm start" runs for sequelize here not incoming request..
// incoming requests are only funneled through our middleware..

const path = require('path');
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize= require('./util/database');                                 // pool that allows to connection in it  

const Product = require('./models/product');                      //  Product model
const User = require('./models/user');                           //  user model

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
 
app.use((req,res,next)=>{                                      // just register it as middleware for incoming requests..  //adding new middleware
    User.findByPk(1)                                             // reach out my database and retreieve my user with user id 1..
       .then(user=>{
          req.user=user;                 // so we storing this sequelize object here in the request  and not just javascript object with field values.. we got extended version...when ever we call request user in future..can also excute methods like "destroy"                                 // i will store it in a request....//can simply add new feild to our request object..
       next();                    // we call next() so we can contiune with the next step..if we get our user and stored it..                                                // user is undefined by default  // i am storing the user i retrieved from database in there...// also the user we retreived from database is not just "javascript object" with the values stored in database...// its "sequelize object" with the value stored in database and with all these "utility methods" sequelize added like destroy.. 
    })                                         
       .catch(err=> console.log(err));
    })                                                      // after all make sure ..can also use it to "create new products that are associated to that user"..

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/admin', contactRoutes); 
app.use('/admin', successRoutes); 

app.use(errorController.get404);

 Product.belongsTo(User, {constraints:true, onDelete: 'CASCADE'});               
                                                                                                    
 User.hasMany(Product);

sequelize.sync()                                                
          .then(result =>{                                                    
         return  User.findByPk(1)
            //console.log(result);
        })
        .then( user=>{                           // anonymous function starts here                                            //here i will get my retreived user..
          if(!user) {                                                                                                          // check if i dont had user...if no means create one..
        return User.create({name:"max", email: 'test@test.com'});  //--> returns promise                                        // i will pass javascript object and set name-- max...this also returns promise..i wil return this too
          }                                                                                                                        // make sure u populate all the fields u defined in the user model...
           return user;       // user-->object    // u can write(Promise.resolve(user))  -- can omit..it will wrapped to next .then()
        })                                          // anonymous function ends  here                                                  // now this anonymous function either return promise or just object...
        .then(user=>{                          // we return same..so .then chain used..
        //console.log(user);
        app.listen(3000);
        }) 
            .catch(err=>{          
            console.log(err);  
        }); 
           







 // using magic association methods..task--udem



// all new products are created should be assoicated to the currently logged in user.....dummy user-->"User.findByPk(1).then(user=>{req.user=user}"
// means in admin.js in controller-->"postAddProduct" function will not create like there define--imageurl, title, description, price..
// need to pass extra info regarding our user that is associated..
// 1 way doing add---> below description - set this new userId feild -->"userId:req.user.id"  because we had relation set up and we set this to request userid..
// that req user is the sequelize user object which holds both the database data there for that "user"..and as also helper methods...
//so this should create new product with that user associated to it..
// after adding new feild in admin.js...test by run --> add product and submit 
// and then look products table...there u had "userId:1"
// this way is manually fetch the userId

// there is more good way is 2nd way...
//we can use "user object" as its stored in the request...
// this aha lot methods...here used ".createProduct"..Product is name of 
// sequelize add special methods depending on the association u added... here we used "belongsTo" and "hasMany"....ex: to create a new asscoited object
//  since user has many products or   a product belongs to user 
// since we had relation defined, sequelize automatically adds a create Product method to the user.
// .createProduct--> our model name is "Product"..this method by sequelize

// so pass in the object with the product data...
// save and run--> add product and submit--and check product table we see userId there..we didnt set explicitly..
// this is done by sequelize with this way of connecting it...
// that is really good way of using associations in sequelize..
// now our models know about each other..






// fetching related products(logged in user)...task---udem


// for get added product u can only want to find products for the currently logged in user..
// u want use-->request user get products in "getEditProduct" in admin.js of models...
// run and click edit in admin products...u will empty form to add products..
// in sql statement in vs terminal u will see--> 2 id will show--> product.user.id=1 and product.id=1;
// like this it will show

// Executing (default): SELECT `id`, `title`, `price`, `imageUrl`, `description`, `createdAt`, `updatedAt`, `userId` FROM `products` AS `product` WHERE (`product`.`userId` = 1 AND `product`.`id` = '1');  // 2 id here..
// Executing (default): SELECT `id`, `name`, `email`, `createdAt`, `updatedAt` FROM `users` AS `user` WHERE `user`.`id` = 1;

// means-->WHERE (`product`.`userId` = 1 AND `product`.`id` = '1')--we see sql statement..
// product`.`userId` = 1--> product with user id--> we are not written like this...sequelize did this..
// we are resonposible for this part--->  product`.`id` = '1'
// .`userId` = 1 added by the sequelize because we get products on the user...
// we get back in "array" even if has only one element..
// we get soo many products but we want 1st element so we store in const of product first element--[0]
//soo  now this when edit happens values will place their own field to update...
// can also use old approach by ID..



// for post edit product-->
//no change because we reach till now means it is update is okay...



// for getProducts--->
// instead of finding all the products..i want to find products for this user..
// so i will do--> req.user.getProducts()
// now it will all products for this user...and i will render..
// run and check go to admin products u will get all products...
// in vs terminal-->  SELECT `id`, `name`, `email`, `createdAt`, `updatedAt` FROM `users` AS `user` WHERE `user`.`id` = 1;
// because select excute user with user.id =1



// for postDeleteProduct-->
//we could only find a product for this user with this Id..



// this all changes sequelize gives u for associated models










// yash: relationship between user, cart and product table...

// user and cart: one to one relationship
// one to one relationships--- a single cart can be belong to single user only...
// this cart belongs to which user-->soo cart ID  cart total... fr this userId save in table..

// in databse u will save like this below:
// cart=100 and belongsto rahul, id is 1
// id=100 belongs to rahul
// same for others--id=102 and belongsto yash, id-10...so 102 cart id belongs to userid -10


// cart and products relationships..

// 1 cart can have many products--> many
// to
 // 1 product can be in many carts--> many
 
 // both side many means---> so many to many relations..

 // example: iphone 14..

 // two table 
 // cart                                      products 

// cart id, userId                             product id, 
