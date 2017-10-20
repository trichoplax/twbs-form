window.onload = function() {
    document.getElementById("required_field").addEventListener("change", validateRequiredField)
    document.getElementById("max_length_8").addEventListener("change", validateMaxLength8)
    document.getElementById("required_min_10_max_25").addEventListener("change", validateRequiredMin10Max25)
    document.getElementById("not_required_min_10_max_25").addEventListener("change", validateNotRequiredMin10Max25)
    document.getElementById("letters_only").addEventListener("change", validateLettersOnly)
    document.getElementById("required_conditionally").addEventListener("change", validateRequiredConditionally)
    window.addEventListener("submit", validateOnSubmit)
}

function validateRequiredField() {
    let content = document.getElementById("required_field").value
    let message = document.getElementById("required_field_warning")
    if (content.length === 0) {
        message.textContent = "This field must not be empty."
        return false
    }
    message.textContent = ""
    return true
}

function validateMaxLength8() {
    let content = document.getElementById("max_length_8").value
    let message = document.getElementById("max_length_8_warning")
    if (content.length > 8) {
        message.textContent = "This field must not have more than 8 characters (including spaces)."
        return false
    }
    message.textContent = ""
    return true
}

function validateRequiredMin10Max25() {
    let content = document.getElementById("required_min_10_max_25").value
    let message = document.getElementById("required_min_10_max_25_warning")
    if (content.length === 0) {
        message.textContent = "This field must not be empty."
        return false
    }
    if (content.length < 10) {
        message.textContent = "This field must have at least 10 characters (including spaces)."
        return false
    }
    if (content.length > 25) {
        message.textContent = "This field must not have more than 25 characters (including spaces)."
        return false
    }
    message.textContent = ""
    return true
}

function validateNotRequiredMin10Max25() {
    let content = document.getElementById("not_required_min_10_max_25").value
    let message = document.getElementById("not_required_min_10_max_25_warning")
    if (content.length === 0) {
        message.textContent = ""
        return true
    }
    if (content.length < 10) {
        message.textContent = "This field must have at least 10 characters (including spaces)."
        return false
    }
    if (content.length > 25) {
        message.textContent = "This field must not have more than 25 characters (including spaces)."
        return false
    }
    message.textContent = ""
    return true
}

function validateLettersOnly() {
    let content = document.getElementById("letters_only").value
    let message = document.getElementById("letters_only_warning")
    let nonLetters = []
    for (let i = 0; i < content.length; i++) {
        let character = content.charAt(i)
        if (character.toLowerCase() === character.toUpperCase()) {    // Thanks to https://stackoverflow.com/a/32567789/3344075
            nonLetters.push(character)
        }
    }
    if (nonLetters.length > 1) {
        message.textContent = "These are not considered letters here: '"
        message.textContent += nonLetters.join("', '") + "'"
        return false
    }
    if (nonLetters.length === 1) {
        message.textContent = "This is not considered a letter here: '" + nonLetters[0] + "'"
        return false
    }
    message.textContent = ""
    return true
}

function validateRequiredConditionally() {
    let content = document.getElementById("required_conditionally").value
    let message = document.getElementById("required_conditionally_warning")
    let required = document.getElementById("yes").checked
    if (content.length === 0 && required) {
        message.textContent = "This field must not be empty when the radio button 'Yes' is selected."
        return false
    }
    message.textContent = ""
    return true
}

function validateOnSubmit(event) {
    let message = document.getElementById("on_submit_warning")
    let valid = true
    valid = validateRequiredField() && valid
    valid = validateMaxLength8() && valid
    valid = validateRequiredMin10Max25() && valid
    valid = validateNotRequiredMin10Max25() && valid
    valid = validateLettersOnly() && valid
    valid = validateRequiredConditionally() && valid
    if (!valid) {
        message.textContent = "This form cannot be submitted until all warnings are resolved."
        event.preventDefault()
        return false   // This prevents the form from being submitted.
    }
    message.textContent = ""
    return true;
}


