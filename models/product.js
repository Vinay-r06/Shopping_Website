const fs =require ('fs');       // to use file u want to import file module..

const path =require('path');       // construct path soo it will run on all os..

const Cart=require('./cart');

const p= path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile= cb =>{
    fs.readFile(p, (err, fileContent)=>{
        if(err){
           cb([]);                                         // if file is empty or no file to read it will get err... u will return empty array....
        } else {

        cb(JSON.parse(fileContent));                    // i will return paresed otherwise will "string"...prased filecontent here in the end--> retrieved as a "text"...so to return an "array" -->need to call "JSON parse"...
        }
    })
}


module.exports=class Product {                              // here we doing "nextGen js" to create class

     constructor(id,title,imageUrl,description, price){
        this.id=id;
         this.title=title;
         this.imageUrl=imageUrl;
         this.description=description;
         this.price=price;
     }
     
      save() { 

        getProductsFromFile(products=>{                                                             //here i dont forward callback..because i have my own implementation code below ..
            if (this.id) {                                                                          // checking the id if product is exiting to save...we get all the product..so it is in callback
              const existingProductIndex = products.findIndex(prod=>prod.id===this.id);              //products is array now..
              const updatedProducts = [...products];
              updatedProducts[existingProductIndex]=this;
              fs.writeFile(p, JSON.stringify(updatedProducts), err=>{               // here "updatedProducts" will be entire all products in file in array format after edited all produts will be call to stringify...write file will be replaced all the old content....                                          // stringify--> which takes the js object or array and converts into json
                console.log(err);                                                                                           //"null"--->in vs terminal...and in "data" folder created "product.json file" and inside wat u type it will be there--->"[{"title":"hhh"}]"....u can add aor apend as many as type ..it will append in data folder..."[{"title":"hhh"},{"title":"ddd"}]".....
                 })
            } else { 
                this.id = Math.random().toString();                                                              // method
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), err=>{                    // stringify--> which takes the js object or array and converts into json
               console.log(err);                                                   //"null"--->in vs terminal...and in "data" folder created "product.json file" and inside wat u type it will be there--->"[{"title":"hhh"}]"....u can add aor apend as many as type ..it will append in data folder..."[{"title":"hhh"},{"title":"ddd"}]".....
                })
            }
        });              
    };                                               
        


    static deleteById(id){
        getProductsFromFile( products=>{                            // we had array of objects where each object has a ID.... 
            const product=products.find(prod=>prod.id===id);
            const updatedProducts= products.filter(prod=>prod.id !==id);            //find()-->default find method in javascript to find
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                if (!err){
                Cart.deleteProduct(id, product.price);
                }
            })
        })
    }


    
       static fetchAll(cb) {                                         // utility function ...// we can call directly on cloass itself not on a instantiated on the class itself
        getProductsFromFile(cb)    
       }

       static findById(id,cb){
        getProductsFromFile( products=>{                            // we had array of objects where each object has a ID.... 
            const product= products.find(p=>p.id===id);            //find()-->default find method in javascript to find
            cb(product); 
        })
        
       }
     }
    
