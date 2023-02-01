const db= require('../util/database');   // now we can access pool

const Cart=require('./cart');
 
module.exports=class Product {                              // here we doing "nextGen js" to create class
 
     constructor(id,title,imageUrl,description, price){
        this.id=id;
         this.title=title;
         this.imageUrl=imageUrl;
         this.description=description;
         this.price=price;
     }
     
      save() { 
        return db.execute('INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',                      // insert data into mysql -- insert
        [this.title, this.price, this.description, this.imageUrl]
        );     
    };                                               
        


    static deleteById(id){                                       
      return  db.execute('DELETE FROM products WHERE products.id = ?', [id]);
    }


    
       static fetchAll() {                                         // utility function ...// we can call directly on cloass itself not on a instantiated on the class itself
        return db.execute('SELECT * FROM products');       // this return promise..soo instead of ".then".... i am intrested in return value...return entire values...so we can used some whereelse...  
       }
                                                   // now go to we do call fetchall--> in "shop.js"
       
       
       
      static findById(id){                                                                   //// fetching a single product with the "where" condition..when click the "details" button of the product it should work
        return  db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
       }
     }
    
