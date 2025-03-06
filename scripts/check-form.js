function validateForm() {
    let contactMethod = document.forms["contact"]["contactMethod"];
    let interests = document.forms["contact"]["interests"];
    let checkedInterests = Array.from(interests).some(checkbox => checkbox.checked);

    if (!Array.from(contactMethod).some(radio => radio.checked)) {
        alert("Please select a preferred contact method!");
        return false;
    }

    if (!checkedInterests) {
        alert("Please select at least one topic of interest!");
        return false;
    }

    return true; 
}
