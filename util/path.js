                                                                 //export little function that helps me construct a path to the parent directory...


const path =require('path');

module.exports=path.dirname(process.mainModule.filename);           // dirname()--> returns the directory name of path.....// global process variable, variable which available in all files ..no need to import-->"process"....and "mainModule" property--->This will refer to main, module that started u r application.....here module is "backNodeBasis.js"....then "filename"---> call file name to find out in which file this module...
//                                                                    other words---> this gives us path to the file that is responsible for that our application is running...
//                                                                    .dirname(process.mainModule.filename)---> to get a path to that directory...