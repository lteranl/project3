const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {

  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name Required!";
  }
  
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email Required!";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email Invalid!";
  }
  
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password Required!";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password Required";
  }

  if (!Validator.isLength(data.password, { min: 8, max: 25 })) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};