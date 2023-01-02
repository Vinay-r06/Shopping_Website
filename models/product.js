const fs=require('fs')
const path=require('path');

const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');


const getProductsFromFile=(cb)=>{
    fs.readFile(p, (err, fileContent)=>{
        if(err){
                           // return cb([]);--> if not using else statement
         cb([]);
        } else{
            cb(JSON.parse(fileContent));
        }
    })

}

module.exports= class Product{              // escma -->function export and class export nextgen js
constructor(t){
    this.title=t;
}

save(){
    getProductsFromFile(products=>{                          // products ---> is received from above empty array or some product...
    
    products.push(this);
    fs.writeFile(p, JSON.stringify(products),(err)=>{
        console.log(err);
    });
    }); 
}


static fetchAll(cb) {

    getProductsFromFile(cb)
}

}