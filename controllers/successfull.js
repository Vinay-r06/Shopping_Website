exports.getSuccess=(req,res, next)=> {                                                                                                                         
    //res.sendFile(path.join(rootDir, 'views', 'success.html'));    // inject "rootDir"                                             
    res.render('success', {
        pageTitle: 'Submitted Successfully',
        path: '/admin/success',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });          
} 
   
exports.postSuccess=(req, res, next)=>{
    const object=JSON.parse(JSON.stringify(req.body))                     // { title: 'book', size: '3' }                       
    console.log(object);
    res.redirect('/');
  }
    