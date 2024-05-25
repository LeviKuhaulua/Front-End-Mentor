const ratingComponent = document.getElementById('ratingComponent')
const ratingOptions = document.querySelectorAll('input[name="rating"]')
const button = ratingComponent.querySelector('button')

function getRating() {
    let value = 0; 
    ratingOptions.forEach(e => {
        if (e.checked) {
            value = e.value
        }
    })
    return value
}

button.addEventListener('click', () => {
    // Get the Mahalo Component and the p element that contains the rating
    const mahaloRating = document.querySelector('.mahalo__rating')
    const mahaloComponent = document.getElementById('mahalo')
    let value = getRating()

    // Put rating that user picked. Also handles case where user doesn't rate
    if (Number(value) === 0) {
        mahaloRating.textContent = `You didn't select an option. But that's okay!`
        mahaloComponent.querySelector('p.mahalo__appreciation').textContent = `We hope that you liked it. BUT... if you do have questions / concerns, feel free to get in touch with us`
    } else {
        let result = mahaloRating.textContent.replace('\(Add rating here\)', value)
        mahaloRating.textContent = result
    }
    
    // Switching States -: Rating -> Thank You!
    ratingComponent.style.display = "none"
    ratingComponent.ariaHidden = "true" 
    ratingComponent.ariaDisabled = "true" 
    mahaloComponent.style.display = "unset"

    
})

