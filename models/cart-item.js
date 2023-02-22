const Sequelize = require ('sequelize');

const sequelize= require ('../util/database');

const CartItem = sequelize.define('cartItem', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity:Sequelize.INTEGER
}); 

module.exports=CartItem;

// cart id will added by sequelize ..because ery cart will had product and quantity..
