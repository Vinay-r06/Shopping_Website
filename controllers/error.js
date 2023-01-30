exports.get404 = (req, res, next) => {
 // res.status(404).render('404', { pageTitle: 'Page Not Found' });
 res.status(400).render('404', {
  pageTitle: 'Page Not Found',
  path: '/404',
  formsCSS: true,
  productCSS: true,
  activeAddProduct: true
});          
}
  