const Sequelize = require('sequelize');    //need sequelize constructor or class...

const sequelize = require('../util/database');     //import our own sequelize object which holds the connections on from the util folder and there the database file...

const User = sequelize.define('user', {            // now i will create the model and name the "user"...and store in user constant...// and then as an object u define the "structure of the user"..

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },  
    name:Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports=User;                      // now i want to start using it for is that i want to create an association... 