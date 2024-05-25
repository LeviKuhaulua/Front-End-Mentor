// Path to Expand and Minimize Icon 
const svgPlus = "assets/images/icon-plus.svg"
const svgMinus = "assets/images/icon-minus.svg" 

// Each section part of FAQ 
const faqQstnOne = document.getElementById("faqQstnOne")
const faqQstnTwo = document.getElementById("faqQstnTwo")
const faqQstnThree = document.getElementById("faqQstnThree")
const faqQstnFour = document.getElementById("faqQstnFour")

function updateFAQ(questionElement) {
    // Get related elements associated to FAQ section
    const img = questionElement.querySelector("img")
    const faqAnswer = document.getElementById("faqAns" + questionElement.id.slice(7,))  
    
    // Expand or Minimize section based on the state of the img element
    if (img.src.endsWith(svgPlus)) {
        img.src = svgMinus 
        img.alt = "Minimize Icon" 
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px"
        faqAnswer.ariaHidden = "false"
    } else {
        img.src = svgPlus
        img.alt = "Expand Icon"
        faqAnswer.style.maxHeight = "0" 
        faqAnswer.ariaHidden = "true" 
    }
}


faqQstnOne.addEventListener("click", () => updateFAQ(faqQstnOne))
faqQstnTwo.addEventListener("click", () => updateFAQ(faqQstnTwo))
faqQstnThree.addEventListener("click", () => updateFAQ(faqQstnThree))
faqQstnFour.addEventListener("click", () => updateFAQ(faqQstnFour))
