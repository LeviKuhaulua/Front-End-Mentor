const button = document.querySelector('.signup__form-btn')
const inputs = document.querySelectorAll('.signup__form-input')

button.addEventListener('click', () => {
    
    for (let i = 0; i < inputs.length; i++) {
        // Get the span element and the img element
        let errorMessage = inputs[i].nextElementSibling 
        let errorIcon = errorMessage.nextElementSibling

        // Handle empty inputs
        if (inputs[i].validity.valueMissing) {

            inputs[i].ariaInvalid = 'true' 
            inputs[i].style.border = '2px solid var(--clr-primary-red)'

            errorMessage.textContent = `${inputs[i].name} cannot be empty`
            errorMessage.style.display = 'unset'

            errorIcon.style.display = 'unset'
            
        // Handle invalid email inputs
        } else if (inputs[i].validity.typeMismatch || inputs[i].validity.patternMismatch) {
            inputs[i].ariaInvalid = 'true' 
            inputs[i].style.border = '2px solid var(--clr-primary-red)' 
            
            errorMessage.textContent = `Looks like this is not an email`
            errorMessage.style.display = 'unset' 

            errorIcon.style.display = 'unset'
        
        // Set back base styles if valid input
        } else {
            inputs[i].removeAttribute('aria-invalid')
            inputs[i].style.border = '1px solid var(--clr-blue)'            
            errorMessage.style.display = 'none' 
            errorIcon.style.display = 'none'
        }
    }
})