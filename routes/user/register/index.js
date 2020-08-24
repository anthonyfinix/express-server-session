const bcrypt = require("bcrypt");
const { userRegistrationSchema } = require("../../../utils/joi_schema");
const User = require("../../../modals/user");

module.exports = (req,res)=>{
  const {username,email,password} = req.body;
  try{
    const hashedPassword = bcrypt.hash(password,10);
    try{
      let user = new User({username,email,hashedPassword});
      user.save();
    }catch(error){
      console.log(error.message);
      res.render('register',{error:error.message})
    }
  }catch(error){
    console.log(error.message);
    res.render('register',{error:error.message})
  }
};
