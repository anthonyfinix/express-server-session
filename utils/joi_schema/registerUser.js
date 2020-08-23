const joi = require("@hapi/joi");
const Joi = require("@hapi/joi");

module.exports = joi.object().keys({
  name: Joi.string().min(3).max(30).required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    .required()
    .error(
      (errors) =>
        new Error("password should be a combination of letter,number and special character")
    ),
  confirmPassword: Joi.any().equal(Joi.ref("password")).required(),
  email: Joi.string()
    .email()
    .regex(/\S+@\S+\.\S+/),
});
