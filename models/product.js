const fs =require ('fs');       // to use file u want to import file module..

const path =require('path');       // construct path soo it will run on all os..

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

     constructor(title,imageUrl,description, price){
         this.title=title;
         this.imageUrl=imageUrl;
         this.description=description;
         this.price=price;
     }
     
      save() {  
        this.id = Math.random().toString();                                                                                         // method
        getProductsFromFile(products=>{                //here i dont forward callback..because i have my own implementation code below ..
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err=>{                    // stringify--> which takes the js object or array and converts into json
           console.log(err);                                               //"null"--->in vs terminal...and in "data" folder created "product.json file" and inside wat u type it will be there--->"[{"title":"hhh"}]"....u can add aor apend as many as type ..it will append in data folder..."[{"title":"hhh"},{"title":"ddd"}]"
   
            })
        });              
    };                                               
        
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
    