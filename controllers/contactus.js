exports.getContactUs=(req,res, next)=> {                                                                                                                            
    //res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));    // inject "rootDir"  
    res.render('contactUs', {
        pageTitle: 'Contact Us',
        path: '/admin/contactUs',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });                                           
    }


exports.postContactUs=(req, res, next)=>{
    const object=JSON.parse(JSON.stringify(req.body))                     // { title: 'book', size: '3' }                       
    console.log(object);
    res.redirect('/admin/success');  
    
  }   