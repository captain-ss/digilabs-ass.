const LoginSchema = new mongoose.Schema({
    MobNumber: {
      type: Number,
      requires: [true, "must provide a number"],
      maxlength: [10, "not a number "],
    },
    YourOtp: {
      type: Number,
      require: [true, "must provide otp"],
      maxlength: ["4", "must be less than 4 "],
    },
  },{timestamps:true});