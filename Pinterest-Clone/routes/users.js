const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pinDB');

let userSchema = new mongoose.Schema({

  username : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  },
  posts : [{

  }],
  dateCreated : {
    type : Date,
    default : Date.now()
  }
});

module.exports =  mongoose.model('Users', userSchema);

