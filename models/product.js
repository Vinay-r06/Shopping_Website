const Sequelize= require('sequelize');

const sequelize=require('../util/database');           // importing in database which named as "sequelize"     //configured sequelize envirnoment which does also have connection pool but also all the feautures od the sequelize package..

const Product=sequelize.define('product',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  title:Sequelize.STRING,
  price:{
    type:Sequelize.DOUBLE,
    allowNull:false
  },
  imageUrl:{
    type:Sequelize.STRING,
    allowNull:false
  },
  description:{
    type: Sequelize.STRING,
    allowNull:false
  }
});

module.exports = Product;