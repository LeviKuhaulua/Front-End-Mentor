const adviceIdElm = document.getElementById('adviceSlipId'); 
const adviceTextElm = document.getElementById('adviceSlip'); 
async function getAdvice() {
    
    // {cache: 'no-cache'} option for Firefox so that a new response is generated. 
    let adviceSlip = await fetch('https://api.adviceslip.com/advice', {cache: 'no-cache'});
    console.log(adviceSlip);  
    let adviceData = await adviceSlip.json(); 
    
    adviceIdElm.textContent = `Advice #${adviceData.slip.id}`; 
    adviceTextElm.textContent = adviceData.slip.advice; 
    
    adviceIdElm.style.display = "block"; 
    adviceTextElm.style.display = "block"; 

    do {
        adviceIdElm.ariaBusy = "true"; 
    } while (adviceIdElm.textContent.length === 0);

    do {
        adviceTextElm.ariaBusy = "true"; 
    } while(adviceTextElm.textContent.length === 0); 

    adviceIdElm.ariaBusy = "false"; 
    adviceTextElm.ariaBusy = "false"; 
}

const btn = document.getElementById('adviceBtn'); 

window.addEventListener('load', () => {
    getAdvice()
    .catch(err => console.log(err)); 
}); 

btn.addEventListener('click', () => {
    getAdvice()
    .catch(err => console.log(err));
}); 

