const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    Object.keys(data).forEach(key => {
        data[key] = !isEmpty(data[key]) ? data[key] : "";
    });

    if(Validator.isEmpty(data.firstName)) errors.firstName = "First Name field is required";

    if(Validator.isEmpty(data.lastName)) errors.lastName = "Last Name field is required";

    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }
    
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }else if(!Validator.isLength(data.password, { min: 6, max: 40 })){
        errors.password = "Password must be at least 6 characters";
    }

    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Confirm password field is required";
    }else if(!Validator.equals(data.password, data.password2)){
        errors.password2 = "Passwords must match";
    }

    if(Validator.isEmpty(data.address1)){
        errors.address1 = "An address is required";
    }

    if(Validator.isEmpty(data.city)){
        errors.city = "A city is required";
    }

    if(Validator.isEmpty(data.st)){
        errors.st = "A state must be selected"
    }

    if(Validator.isEmpty(data.zip)){
        errors.zip = "A 5-digit or 9-digit zip code must be provided"
    } 

    if(Validator.isEmpty(data.phone)){
        errors.phone = "Please enter a valid 10-digit telephone or leave blank, you may use ( ) - or space"
    }

    if(Validator.isEmpty(data.phoneType)){
        errors.phoneType = "Please make a selection"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};// end of validator