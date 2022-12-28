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



//output: in vs terminal : null--> when add aproduct.
//                        { Name: 'ddd', emailId: 'sss@ff' }--> when do contactus..
//  In products.json file because we storing in file instead of database---> [{"title":"hhh"},{"title":"ddd"},{"title":"jj"},{"title":"seconddd book"},{"title":""},{"title":"done book"},{"title":"first bookkkkkkkkkk"},{"title":"gg"},{"title":"s"}]

