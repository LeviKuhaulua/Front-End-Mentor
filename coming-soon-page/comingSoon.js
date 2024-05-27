const errorMessage = document.getElementById('errorMessage')
const button = document.getElementById('formBtn')


function changeMessageState() {
    // Checks if email input is empty or if it is an invalid email
    if (document.querySelector('.subscription__input').value == "") {
        console.log('empty email input')
        errorMessage.textContent = "Whoops! It looks like you forgot to add your email"
        errorMessage.style.display = "initial"
   } else if (document.querySelector('.subscription__input:invalid') != null) { 
        console.log('Invalid email input')
        errorMessage.textContent = "Please provide a valid email address" 
        errorMessage.style.display = "initial" 
   } else {
        // Remove error message if there is a valid email input
        errorMessage.style.display = "none" 
   }
}
button.addEventListener('mouseover', () => changeMessageState())
// When users use keyboard to focus in on button
button.addEventListener('focus', () => changeMessageState())