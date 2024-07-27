const birthInputs = document.querySelectorAll('input[id]');
const calcBtn = document.getElementById('ageBtn'); 
const form = document.getElementById('date'); 
const calcYears = document.getElementById('yearsCalc'); 
const calcMonth = document.getElementById('monthsCalc'); 
const calcDays = document.getElementById('daysCalc'); 
const dateErr = document.getElementById(`${form.id}Err`); 

/**
 * Get the number of days in a month. Accounts for year as well. 
 * @param {number} year 
 * @param {number} month 
 * @returns number of days in the month of that year. 
 */
function getDaysOfMonth(year, month) {
    return new Date(year, month, 0).getDate(); 
}


/**
 * Checks the validity of the Day input field. Updates the error message to reflect what caused the 
 * input to be invalid. 
 * @param {HTMLInputElement} day
 * @param {RegExp} pattern
 */
function checkDay(day, pattern) {
    let errorElm = document.getElementById(`${day.id}Err`);
    
    if (day.value === '') {
        day.setAttribute('aria-invalid', 'true'); 
        errorElm.textContent = 'This field is required'; 
    } else if (!pattern.test(day.value)) {
        day.setAttribute('aria-invalid', 'true'); 
        errorElm.textContent = `Must be a valid ${day.id}`
    } else {
        day.removeAttribute('aria-invalid'); 
        errorElm.textContent = ''; 
    }

}

/**
 * Checks the validity of the Month input field. Updates the error message to reflect what caused the
 * input to be invalid. 
 * @param {HTMLInputElement} month 
 * @param {RegExp} pattern 
 */
function checkMonth(month, pattern) {
    let errorElm = document.getElementById(`${month.id}Err`); 

    if (month.value === '') {
        month.setAttribute('aria-invalid', 'true'); 
        errorElm.textContent = 'This field is required'; 
    } else if (!pattern.test(month.value)) {
        month.setAttribute('aria-invalid', 'true'); 
        errorElm.textContent = 'Must be a valid month'; 
    } else {
        month.removeAttribute('aria-invalid'); 
        errorElm.textContent = ''; 
    }
}

/**
 * Checks the input fields to see if any of them contain the attribute 'aria-invalid="true"'. 
 * @returns True, if there are any inputs that contain an aria-invalid attribute of 'true', otherwise, false
 */
function checkForInvalids() {
    let inputs = document.querySelectorAll('input[aria-invalid="true"]'); 
    return inputs.length > 0; 
}


/**
 * Calculate the user's age in years, months, and day. 
 * @param {Date} currDate 
 */
function calcDate(currDate) {
    if (!checkForInvalids()) {
        // Age calculation after we verified that all the inputs are valid and that the date is valid. 
        let yearDiff = currDate.getFullYear() - parseInt(year.value); 
        let monthDiff, dayDiff; 

        let birthMonth = parseInt(month.value);  
        let currentMonth = currDate.getMonth() + 1; // 0 indexed
        
        if (birthMonth > currentMonth) {
            monthDiff = currentMonth - birthMonth + 12; 
            yearDiff -= 1; 
        } else {
            monthDiff = currentMonth - birthMonth; 
        }
        
        let birthDay = parseInt(day.value); 
        let currentDay = currDate.getDate();  // Not 0 indexed

        if (birthDay > currentDay) {
            dayDiff = currentDay - birthDay + getDaysOfMonth(parseInt(year.value), birthMonth); 
        } else {
            dayDiff = currentDay - birthDay; 
        }

        calcYears.textContent = yearDiff; 
        calcMonth.textContent = monthDiff; 
        calcDays.textContent = dayDiff; 

    } else {
        // If input or date is invalid, then reset the year, month, and age fields. 
        calcYears.textContent = '--';  
        calcMonth.textContent = '--'; 
        calcDays.textContent = '--'; 
    }
}


calcBtn.addEventListener('click', () => {
    
    const [ day, month, year ] = [ ...birthInputs ]; 
    const dayRegex = /^(0?[1-9]|[12]\d|3[01])$/;  
    const monthRegex = /^(0?[1-9]|1[012])$/; 
    const yearRegex = /\d{4}/; 

    // Initial validity check for invalid inputs or empty inputs
    checkDay(day, dayRegex); 
    checkMonth(month, monthRegex);  
    
    let currentDate = new Date(); 
    // Check the Year input field for invalid input. 
    if (year.value === '' || !yearRegex.test(year.value)) {
        year.setAttribute('aria-invalid', 'true'); 
        yearErr.textContent = 'This field is required'; 
    } else if (parseInt(year.value) > currentDate.getFullYear()) {
        year.setAttribute('aria-invalid', 'true'); 
        yearErr.textContent = 'Must be in the past'; 
    } else {
        year.removeAttribute('aria-invalid'); 
        yearErr.textContent = ''; 
    }

    // Check that the birthdate is valid.
    if (!checkForInvalids() && (parseInt(day.value) > getDaysOfMonth(year.value, month.value))) {
        form.setAttribute('aria-invalid', 'true'); 
        dateErr.textContent = 'Must be a valid date'; 
    } else {
        form.removeAttribute('aria-invalid'); 
        dateErr.textContent = '';  
        calcDate(currentDate); 
    }

    
}); 

// Keyboard Functionality
form.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
        calcBtn.click(); 
    }
}); 
