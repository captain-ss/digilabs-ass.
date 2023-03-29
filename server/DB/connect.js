const mongoose = require("mongoose");

const connectDb = (url) => {

     mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true
	
    },(error)=>{
      if(error) console.log("you are unable to connect to db",);
     else console.log("connected to database");
    });
    
  
};

module.exports = connectDb;
