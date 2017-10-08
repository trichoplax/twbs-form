window.onload = function() {
    document.getElementById("required_field").addEventListener("change", validateRequiredField);
    document.getElementById("max_length_8").addEventListener("change", validateMaxLength8);
    document.getElementById("required_min_10_max_25").addEventListener("change", validateRequiredMin10Max25);
    document.getElementById("not_required_min_10_max_25").addEventListener("change", validateNotRequiredMin10Max25);
    document.getElementById("letters_only").addEventListener("change", validateLettersOnly);
    document.getElementById("required_conditionally").addEventListener("change", validateRequiredConditionally);
    document.getElementById("on_submit").addEventListener("change", validateOnSubmit);
    document.getElementById("valid_email").addEventListener("change", validateEmail);
}

function validateRequiredField() {
    var content = document.getElementById("required_field").value;
    var message = document.getElementById("required_field_warning");
    if (content.length === 0) {
        message.textContent = "This field must not be empty.";
        return false;
    }
    message.textContent = "";
    return true;
}

function validateMaxLength8() {
    var content = document.getElementById("max_length_8").value;
    var message = document.getElementById("max_length_8_warning");
    if (content.length > 8) {
        message.textContent = "This field must not have more than 8 characters (including spaces).";
        return false;
    }
    message.textContent = "";
    return true;
}

function validateRequiredMin10Max25() {
    var content = document.getElementById("required_min_10_max_25").value;
    var message = document.getElementById("required_min_10_max_25_warning");
    if (content.length === 0) {
        message.textContent = "This field must not be empty.";
        return false;
    }
    if (content.length < 10) {
        message.textContent = "This field must have at least 10 characters (including spaces).";
        return false;
    }
    if (content.length > 25) {
        message.textContent = "This field must not have more than 25 characters (including spaces).";
        return false;
    }
    message.textContent = "";
    return true;
}

function validateNotRequiredMin10Max25() {
    var content = document.getElementById("not_required_min_10_max_25").value;
    var message = document.getElementById("not_required_min_10_max_25_warning");
    if (content.length === 0) {
        message.textContent = "";
        return true;
    }
    if (content.length < 10) {
        message.textContent = "This field must have at least 10 characters (including spaces).";
        return false;
    }
    if (content.length > 25) {
        message.textContent = "This field must not have more than 25 characters (including spaces).";
        return false;
    }
    message.textContent = "";
    return true;
}

function validateLettersOnly() {

}

function validateRequiredConditionally() {

}

function validateOnSubmit() {

}

function validateEmail() {

}

