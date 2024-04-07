const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect =() =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then( ()=> console.log("Database se sampark baith gya hai"))
    .catch( (error) =>{
        console.log("Database ka connection dikkat kar rha hai")
        console.error(error);
        process.exit(1);
    })
}

module.exports = dbConnect;