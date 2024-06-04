const inputsText = document.querySelectorAll('input[type="text"], textarea'); 
const email = document.querySelector('input[type="email"'); 
const inputsRadio = document.querySelectorAll('input[type="radio"]'); 
const inputsCheckbox = document.querySelector('input[type="checkbox"]');  

function validateInputs() {
    inputsText.forEach((textInput) => {
        // Most likely means that the text element itself is empty. 
        if (!textInput.checkValidity()) {
            textInput.setAttribute('aria-invalid', 'true'); 
            textInput.classList.add('form__input-error'); 
        } else {
            textInput.setAttribute('aria-invalid', 'false'); 
            textInput.classList.remove('form__input-error'); 
        }
    })

    const emailError = email.nextElementSibling; 
   
    // Check validity of email 
    if (!email.checkValidity()) {
        email.setAttribute('aria-invalid', 'true'); 
        email.classList.add('form__input-error'); 
        // Changes error message based on what caused the email input to be invalid
        emailError.textContent = (email.validity.patternMismatch) ? 'Please enter a valid email address' : 'This field is required'; 
    } else {
        email.setAttribute('aria-invalid', 'false'); 
        email.classList.remove('form__input-error'); 
    }

    // This section will give the fieldset tag the aria-invalid attribute
    const inputsRadioParent = document.querySelector('fieldset');  

    if (!inputsRadio.item(0).checked && !inputsRadio.item(1).checked) {
        inputsRadioParent.setAttribute('aria-invalid', 'true'); 
    } else {
        inputsRadioParent.setAttribute('aria-invalid', 'false'); 
        inputsRadio.forEach(radio => {
            if (radio.checked) {
                radio.setAttribute('aria-checked', 'true'); 
            }
        })
    }

    // Make sure user checked the consent box. 
    if (inputsCheckbox.checked) {
        inputsCheckbox.setAttribute('aria-invalid', 'false'); 
        inputsCheckbox.setAttribute('aria-checked', 'true'); 
    } else {
        inputsCheckbox.setAttribute('aria-invalid', 'true'); 
        inputsCheckbox.setAttribute('aria-checked', 'false'); 
    }
    
}


const btn = document.querySelector('button'); 
btn.addEventListener('click', () => {
    validateInputs(); 
    const anyInvalids = document.querySelector('*[aria-invalid="true"]')
    if (anyInvalids === null) {
        // Clearing the form and any ARIA related states. 
        inputsText.forEach((text) => {
            text.value = ''; 
            text.removeAttribute('aria-invalid'); 
        }); 

        email.value = ''; 

        inputsRadio.forEach((radio) => {
            radio.checked = false; 
            radio.setAttribute('aria-checked', 'false'); 
        });

        inputsCheckbox.checked = false; 
        inputsCheckbox.removeAttribute('aria-invalid'); 
        inputsCheckbox.setAttribute('aria-checked', 'false'); 

        document.querySelector('fieldset').removeAttribute('aria-invalid'); 

        // Reveal the success dialog to the user. 
        const successDialog = document.getElementById('successDialog'); 
        successDialog.style.setProperty('display', 'unset'); 
        successDialog.setAttribute('aria-hidden', 'false'); 

    } 
    
})

