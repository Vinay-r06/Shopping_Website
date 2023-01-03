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







// dynamic post (1)( part 1)




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


//this task changed in product-detil.ejs-...
// we can pass data in the request body..this is not posible for a "get request"...
//but for "post request" u use the request body... 


//output: when add to cart clicked -->product id will create -->0.7507128399867786.(in console vs code)