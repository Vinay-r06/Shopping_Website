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
 


const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
 
const app = express();

app.set('view engine', 'ejs'); 
app.set('views', 'views'); 

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

app.listen(3000);



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