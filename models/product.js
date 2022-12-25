// data saving in Array(product array here)

// const products=[];

// module.exports=class Product {                              // here we doing "nextGen js" to create class

// constructor(t){
//     this.title=t;

// }
//  save() {                                        // method

//     products.push(this);
//  }                                               
    
//   static fetchAll() {                                         // utility function ...// we can call directly on cloass itself not on a instantiated on the class itself
          
//     return products;
//   }
// }






// data saving in file method....


// const { json } = require('body-parser');
// const fs =require ('fs');       // to use file u want to import file module..

// const path =require('path');       // construct path soo it will run on all os..

// module.exports=class Product {                              // here we doing "nextGen js" to create class

//      constructor(t){
//          this.title=t;
    
//      }
//       save() {                                                                                           // method
    
//         const p= path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');         // root directory--->"path.dirname(process.mainModule.filename)"... 
    
//         fs.readFile(p, (err, fileContent)=>{
//             //console.log(fileContent);                   // when run u will get "undefined"--in vs terminal....because no file to read...
//             //console.log(err);                           // in vs terminal -->"no such file or directory"
        
//             let products=[]; 
//             if(!err){                                           // if no error then read file and push to class which points "this"...
//                 products=JSON.parse(fileContent);
//             }
//           products.push(this);
//          fs.writeFile(p, JSON.stringify(products),(err)=>{                    // stringify--> which takes the js object or array and converts into json
//         console.log(err);                                               //"null"--->in vs terminal...and in "data" folder created "product.json file" and inside wat u type it will be there--->"[{"title":"hhh"}]"....u can add aor apend as many as type ..it will append in data folder..."[{"title":"hhh"},{"title":"ddd"}]"


//          })
        
//         });
    
//     };                                               
        


//        static fetchAll(cb) {                                         // utility function ...// we can call directly on cloass itself not on a instantiated on the class itself
        
//     const p= path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
//         fs.readFile(p, (err, fileContent)=>{
//             if(err){
//                 cb([]);                                         // if file is empty or no file to read it will get err... u will return empty array....
//             }
//             cb(JSON.parse(fileContent));                    // i will return paresed otherwise will "string"...prased filecontent here in the end--> retrieved as a "text"...so to return an "array" -->need to call "JSON parse"...
//         })
//        }
//      }
    







// refactoring code




//const { json } = require('body-parser');

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

     constructor(t){
         this.title=t;
     }
      save() {                                                                                           // method
        getProductsFromFile(products=>{                //here i dont forward callback..because i have my own implementation code below ..
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),(err)=>{                    // stringify--> which takes the js object or array and converts into json
           console.log(err);                                               //"null"--->in vs terminal...and in "data" folder created "product.json file" and inside wat u type it will be there--->"[{"title":"hhh"}]"....u can add aor apend as many as type ..it will append in data folder..."[{"title":"hhh"},{"title":"ddd"}]"
   
            })
        });              
    };                                               
        
       static fetchAll(cb) {                                         // utility function ...// we can call directly on cloass itself not on a instantiated on the class itself
        getProductsFromFile(cb)    
       }
     }
    