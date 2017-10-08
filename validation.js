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
    } else {
        message.textContent = "";
        return true;
    }
}

function validateMaxLength8() {
    var content = document.getElementById("max_length_8").value;
    var message = document.getElementById("max_length_8_warning");
    if (content.length > 8) {
        message.textContent = "This field must not have more than 8 characters (including spaces).";
        return false;
    } else {
        message.textContent = "";
        return true;
    }
}

function validateRequiredMin10Max25() {

}

function validateNotRequiredMin10Max25() {

}

function validateLettersOnly() {

}

function validateRequiredConditionally() {

}

function validateOnSubmit() {

}

function validateEmail() {

}

