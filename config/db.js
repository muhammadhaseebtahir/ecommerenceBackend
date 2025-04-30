const mongoose = require('mongoose');   
require('dotenv').config();
const dbConnected=async()=>{
       
  await mongoose.connect("mongodb+srv://malikhaseeb456070:A97xZiknmsHiOoSH@cluster0.gly3v.mongodb.net/",{
    dbName:"Ecommerence",
  })
  .then(()=>{
    console.log("MongoDb connected");
  }).catch((err)=>{
           console.log(`MongoDb connection error ${err}` );           
  })
}
module.exports= dbConnected;