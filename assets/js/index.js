let form = document.getElementById('form');
let name = form.elements[0];
let username = name.value;

function requireValue(input) {
    return !(input.value.trim() === '');
}
// Event listener to perform the validation when user clicks on submit button
form.addEventListener('submit', (event) => {
    requiredFields.forEach((input) => {
        valid = valid|requireValue(input.input);
    });
    if (!valid) {
        event.preventDefault();
    }
});